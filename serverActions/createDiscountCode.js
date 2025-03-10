'use server';

import { adminClient } from "@/components/shopifyAdminAPI";
import {
    CreateTableCommand,
    DynamoDBClient,
    GetItemCommand,
    PutItemCommand,
    UpdateItemCommand,
  } from "@aws-sdk/client-dynamodb";
import {
    DynamoDBDocumentClient,
    GetCommand,
    PutCommand,
    QueryCommand,
    ScanCommand,
    UpdateCommand,
  } from "@aws-sdk/lib-dynamodb";
import { createKlayEvent } from "./createKlayEvent";

const client = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  region: process.env.AWS_REGION,
});
const ddbDocClient = DynamoDBDocumentClient.from(client);

export async function createAssessmentCompleteDiscountCode({ clientID, assessmentID }) {
  try {
    if (!clientID || !assessmentID) throw new Error("Missing required parameters");

    const currDate = new Date();
    
    // Calculate expiration date (3 months later)
    const expirationDate = new Date(currDate);
    expirationDate.setMonth(expirationDate.getMonth() + 3);
    
    // Convert dates to ISO format
    const startsAt = currDate.toISOString();
    const endsAt = expirationDate.toISOString();

    // Fetch client's email from Clients table
    const getClientEmail = new GetCommand({
      TableName: "Clients",
      Key: { ClientID: clientID },
    });
    const clientData = await ddbDocClient.send(getClientEmail);
    const clientEmail = clientData?.Item?.email || "no-email@example.com";
    
    // Generate random discount code
    const generateCode = () => {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      return Array.from({ length: 12 }, () =>
        chars.charAt(Math.floor(Math.random() * chars.length))
      ).join("");
    };

    const code = generateCode();

    // Shopify GraphQL Mutation
    const operation = `
      mutation discountCodeBasicCreate($basicCodeDiscount: DiscountCodeBasicInput!) {
        discountCodeBasicCreate(basicCodeDiscount: $basicCodeDiscount) {
          codeDiscountNode {
            id
          }
          userErrors {
            field
            message
          }
        }
      }
    `;

    const response = await adminClient.request(operation, {
      variables: {
        basicCodeDiscount: {
          appliesOncePerCustomer: true,
          code,
          combinesWith: {
            orderDiscounts: false,
            productDiscounts: false,
            shippingDiscounts: true,
          },
          customerGets: {
            items: {
              collections: {
                add: ["gid://shopify/Collection/467483033819"],
              },
            },
            value: {
              discountAmount: {
                amount: "25.00",
                appliesOnEachItem: false,
              },
            },
          },
          customerSelection: { all: true },
          endsAt: endsAt,
          startsAt: startsAt,
          title: `Assessment Reward - ${code}`,
          usageLimit: 1,
        },
      },
    });
        console.log('res',response?.data);
    const { codeDiscountNode, userErrors } = response.data.discountCodeBasicCreate;

    if (userErrors?.length) {
      console.error("Shopify Discount Error:", userErrors);
      throw new Error(userErrors.map((e) => e.message).join(", "));
    }

    // Save the discount code to DiscountCodes table
    const putCommand = new PutCommand({
      TableName: "DiscountCodes",
      Item: {
        CodeID: code, // Unique Code ID
        clientID: clientID,
        assessmentID: assessmentID,
        code: code,
        issuedAt: Math.floor(Date.now() / 1000),
        expiresAt: Math.floor(expirationDate.getTime() / 1000), // Store expiry timestamp
        email: clientEmail, // Store client's email
        status: "active", // Track if code is redeemed later
      },
    });

    const saveDB = await ddbDocClient.send(putCommand);
    console.log('db command', saveDB);

    const payload = JSON.stringify({
      data: {
        type: "event",
        attributes: {
          properties: {
            "event-name": "RunReady - Assessment Reward", 
            code: code,
            email: clientEmail,
            endsAt: endsAt,
          },
          metric: {
            data: {
              type: "metric",
              attributes: {
                name: "RunReady - Assessment Reward",
              },
            },
          },
          profile: {
            data: {
              type: "profile",
              attributes: {
                properties: {
                  username: "User",
                },
                meta: {
                  patch_properties: {
                    append: {
                      newKey: "New Value",
                    },
                  },
                },
                email: clientEmail, // Use fetched client email
              },
            },
          },
        },
      },
    });

    await createKlayEvent(payload); // Send the payload

    return { code, saveDB };
  } catch (err) {
    console.error(err);
    throw new Error(err.message || "Something went wrong");
  }
}
