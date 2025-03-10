require("dotenv").config();
const { DynamoDBClient, CreateTableCommand, UpdateTableCommand } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, QueryCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  region: process.env.AWS_REGION,
});
const ddbDocClient = DynamoDBDocumentClient.from(client);




async function createUsersTable() {
  const command = new CreateTableCommand({
    TableName: "Users",
    AttributeDefinitions: [
      {
        AttributeName: "UserID",
        AttributeType: "S",
      },
    ],
    KeySchema: [
      {
        AttributeName: "UserID",
        KeyType: "HASH",
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  })
  
  return await client.send(command)
}


async function createClientsTable() {
  const command = new CreateTableCommand({
    TableName: "Clients",
    AttributeDefinitions: [
      {
        AttributeName: "ClientID",
        AttributeType: "S",
      },
      {
        AttributeName: "email",
        AttributeType: "S",
      },
    ],
    KeySchema: [
      {
        AttributeName: "ClientID",
        KeyType: "HASH",
      },
    ],
    GlobalSecondaryIndexes: [
      {
        IndexName: "ClientEmailIndex",
        KeySchema: [
          {
            AttributeName: "email",
            KeyType: "HASH",
          }
        ],
        Projection: {
          ProjectionType: "ALL",
        },
        ProvisionedThroughput: {
          ReadCapacityUnits: 1,
          WriteCapacityUnits: 1,
        },
      }
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  })
  
  return await client.send(command)
}

async function updateClientsTable() {
  const command = new UpdateTableCommand({
    TableName: "Clients",
    AttributeDefinitions: [ // AttributeDefinitions
      { // AttributeDefinition
        AttributeName: "pt_id", // required
        AttributeType: "S", // required
      },
      { // AttributeDefinition
        AttributeName: "created_at", // required
        AttributeType: "N", // required
      },
    ],
    GlobalSecondaryIndexUpdates: [ // GlobalSecondaryIndexUpdateList
      { // GlobalSecondaryIndexUpdate
        Create: { // CreateGlobalSecondaryIndexAction
          IndexName: "ClientPTIndex", // required
          KeySchema: [ // KeySchema // required
            { // KeySchemaElement
              AttributeName: "pt_id", // required
              KeyType: "HASH", // required
            },
            { // KeySchemaElement
              AttributeName: "created_at", // required
              KeyType: "RANGE", // required
            },
          ],
          Projection: { // Projection
            ProjectionType: "ALL",
            // NonKeyAttributes: [ // NonKeyAttributeNameList
            //   "STRING_VALUE",
            // ],
          },
          ProvisionedThroughput: {
            ReadCapacityUnits: 1, // required
            WriteCapacityUnits: 1, // required
          },
          OnDemandThroughput: {
            MaxReadRequestUnits: 1,
            MaxWriteRequestUnits: 1,
          },
        },
      },
    ],
  })
  
  return await client.send(command)
}


async function createAssessmentsTable() {

    const command = new CreateTableCommand({
    TableName: "Assessments",
    AttributeDefinitions: [
      {
        AttributeName: "AssessmentID",
        AttributeType: "S",
      },
      {
        AttributeName: "pt_id",
        AttributeType: "S",
      },
      {
        AttributeName: "created_at",
        AttributeType: "N",
      },
    ],
    KeySchema: [
      {
        AttributeName: "AssessmentID",
        KeyType: "HASH",
      },
    ],
    GlobalSecondaryIndexes: [
      {
        IndexName: "AssessmentPTIndex",
        KeySchema: [
          {
            AttributeName: "pt_id",
            KeyType: "HASH",
          },
          {
            AttributeName: "created_at",
            KeyType: "RANGE",
          }
        ],
        Projection: {
          ProjectionType: "ALL",
        },
        ProvisionedThroughput: {
          ReadCapacityUnits: 1,
          WriteCapacityUnits: 1,
        },
      }
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  })

  return await client.send(command)
}


async function createProgramsTable() {
  const command = new CreateTableCommand({
    TableName: "Programs",
    AttributeDefinitions: [
      {
        AttributeName: "ProgramID",
        AttributeType: "S",
      },
      {
        AttributeName: "pt_id",
        AttributeType: "S",
      },
      {
        AttributeName: "ClientID",
        AttributeType: "S",
      },
      {
        AttributeName: "created_at",
        AttributeType: "N",
      },
    ],
    KeySchema: [
      {
        AttributeName: "ProgramID",
        KeyType: "HASH",
      },
    ],
    GlobalSecondaryIndexes: [
      {
        IndexName: "PTProgramIndex",
        KeySchema: [
          {
            AttributeName: "pt_id",
            KeyType: "HASH",
          },
          {
            AttributeName: "created_at",
            KeyType: "RANGE",
          }
        ],
        Projection: {
          ProjectionType: "ALL",
        },
        ProvisionedThroughput: {
          ReadCapacityUnits: 1,
          WriteCapacityUnits: 1,
        },
      },
      {
        IndexName: "ClientProgramIndex",
        KeySchema: [
          {
            AttributeName: "ClientID",
            KeyType: "HASH",
          },
          {
            AttributeName: "created_at",
            KeyType: "RANGE",
          }
        ],
        Projection: {
          ProjectionType: "ALL",
        },
        ProvisionedThroughput: {
          ReadCapacityUnits: 1,
          WriteCapacityUnits: 1,
        },
      }
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  })
  
  return await client.send(command)
}


async function getAssessments(pt_id, pt_name) {
  try {
  const assessmentsCommand = new QueryCommand({
    TableName: "Assessments",
    IndexName: "AssessmentPTIndex",
    FilterExpression: "assessType = :assessType and isComplete = :completeStatus",
    KeyConditionExpression: "pt_id = :ptID",
    ExpressionAttributeValues: {
      ":ptID": pt_id,
      ":assessType": "Movement",
      ":completeStatus": true,
    },
    ProjectionExpression: "AssessmentID, clientFName, clientLName, pt_id, movementAssessment.scores",
  });

  const res = await ddbDocClient.send(assessmentsCommand);


  const table = res.Items.map(item => {

    const {A:absorb, B:bounce, S:stability} = item.movementAssessment.scores

    finalAbsorb = (+absorb.L + +absorb.R) / 2
    finalBounce = (+bounce.L + +bounce.R) / 2
    finalStability = (+stability.L + +stability.R) / 2

    delete item.pt_id
    delete item.AssessmentID
    delete item.movementAssessment
    
    return {PT: pt_name, ...item, absorb: finalAbsorb, bounce: finalBounce, stability: finalStability} 
  }
  )

  // console.log(res.Items[0].movementAssessment)

  console.log(table)

  } catch (err) {
    throw new Error(err);
  }
}

async function createDiscountCodesTable() {
  const command = new CreateTableCommand({
    TableName: "DiscountCodes",
    AttributeDefinitions: [
      { AttributeName: "CodeID", AttributeType: "S" }, // Unique identifier for each discount code
      { AttributeName: "clientID", AttributeType: "S" }, // User receiving the discount
      { AttributeName: "assessmentID", AttributeType: "S" } // The assessment that generated the code
    ],
    KeySchema: [
      { AttributeName: "CodeID", KeyType: "HASH" } // Primary Key
    ],
    GlobalSecondaryIndexes: [
      {
        IndexName: "ClientIDIndex",
        KeySchema: [{ AttributeName: "clientID", KeyType: "HASH" }],
        Projection: { ProjectionType: "ALL" },
        ProvisionedThroughput: { ReadCapacityUnits: 1, WriteCapacityUnits: 1 }
      },
      {
        IndexName: "AssessmentIDIndex",
        KeySchema: [{ AttributeName: "assessmentID", KeyType: "HASH" }],
        Projection: { ProjectionType: "ALL" },
        ProvisionedThroughput: { ReadCapacityUnits: 1, WriteCapacityUnits: 1 }
      }
    ],
    ProvisionedThroughput: { ReadCapacityUnits: 1, WriteCapacityUnits: 1 }
  });

  return await ddbDocClient.send(command);
}

// Call the function to create the table
createDiscountCodesTable()
  .then(() => console.log("DiscountCodes table created successfully"))
  .catch((err) => console.error("Error creating DiscountCodes table:", err));


// updateClientsTable()
// createProgramsTable()

// getAssessments('f408c498-5071-7005-bbcd-847addb8104a', "Kendra")