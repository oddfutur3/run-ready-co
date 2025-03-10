"use server";

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
  DeleteCommand
} from "@aws-sdk/lib-dynamodb";
import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";
import { createAssessmentCompleteDiscountCode } from "./createDiscountCode";

const client = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  region: process.env.AWS_REGION,
});
const ddbDocClient = DynamoDBDocumentClient.from(client);

function validateID(assessID) {
  if (!assessID) {
    throw Error("Invalid Assessment ID!");
  }
}


export async function newUser(userID, email) {
  try {
    const currTime = `${Math.floor(Date.now() / 1000)}`;
  
    const command = new PutCommand({
      TableName: "Users",
      Item: {
        UserID: userID,
        email : email,
        // first_name : firstName,
        // last_name: lastName,
        created_at: currTime,
      },
      ConditionExpression: "attribute_not_exists(UserID)",
    })
  
    const res = await ddbDocClient.send(command);
    // console.log(res)
    return { userID: userID, email: email }
  } catch (err) {
    console.log(err)
  }

}


export async function newClient(email, firstName, lastName, ptID) {

  const userRes = await getUser(ptID)
  console.log(userRes)
  if (!userRes?.Item?.UserID) {
    throw new Error("Failed to create client: user does not exist")
  }

  const clientID = uuidv4();

  const currTime = Math.floor(Date.now() / 1000);

  const command = new PutCommand({
    TableName: "Clients",
    Item: {
      ClientID: clientID,
      email : email,
      first_name : firstName,
      last_name: lastName,
      created_at: currTime,
      pt_id: ptID
      // last_visit: last_visit,
    },
  })

  const res = await ddbDocClient.send(command);

  console.log(res)
  return { clientID: clientID, firstName: firstName, lastName: lastName }

}


export async function newLiteAssessment(clientID, firstName, lastName, ptID) {
  
  if (!ptID) {
    throw new Error("Failed to create assessment: no pt_id provided")
  }

  const clientRes = await getClientById(clientID)
  if (!clientRes?.ClientID) {
    throw new Error("Failed to create assessment: client does not exist")
  }

  const assessmentID = uuidv4();

  (await cookies()).set("assessmentSession", assessmentID);

  const currTime = Math.floor(Date.now() / 1000);

  const command = new PutCommand({
    TableName: "Assessments",
    Item: {
      AssessmentID: assessmentID,
      created_at: currTime,
      updated_at: [currTime],
      isComplete: false,
      assessType: "Lite",
      clientID: clientID,
      clientFName: firstName,
      clientLName: lastName,
      pt_id: ptID
    },
  });

  const res = await ddbDocClient.send(command);

  console.log(res);
  return assessmentID
}


export async function newMvmtAssessment(clientID, firstName, lastName, ptID) {
  
  if (!ptID) {
    throw new Error("Failed to create assessment: no pt_id provided")
  }

  const clientRes = await getClientById(clientID)
  if (!clientRes?.ClientID) {
    throw new Error("Failed to create assessment: client does not exist")
  }
  
  const assessmentID = uuidv4();

  (await cookies()).set("assessmentSession", assessmentID);

  const currTime = Math.floor(Date.now() / 1000);

  const command = new PutCommand({
    TableName: "Assessments",
    Item: {
      AssessmentID: assessmentID,
      created_at: currTime,
      updated_at: [currTime],
      isComplete: false,
      assessType: "Movement",
      clientID: clientID,
      clientFName: firstName,
      clientLName: lastName,
      pt_id: ptID
    },
  });

  const res = await ddbDocClient.send(command);

  console.log(res);
  return assessmentID
}

export async function newTdmlAssessment(clientID, firstName, lastName, ptID) {
  
  if (!ptID) {
    throw new Error("Failed to create assessment: no pt_id provided")
  }

  const clientRes = await getClientById(clientID)
  if (!clientRes?.ClientID) {
    throw new Error("Failed to create assessment: client does not exist")
  }
  
  const assessmentID = uuidv4();

  (await cookies()).set("assessmentSession", assessmentID);

  const currTime = Math.floor(Date.now() / 1000);

  const command = new PutCommand({
    TableName: "Assessments",
    Item: {
      AssessmentID: assessmentID,
      created_at: currTime,
      updated_at: [currTime],
      isComplete: false,
      assessType: "Treadmill",
      clientID: clientID,
      clientFName: firstName,
      clientLName: lastName,
      pt_id: ptID
    },
  });

  const res = await ddbDocClient.send(command);

  console.log(res);
  return assessmentID
}

export async function newMvmtTdmlAssessment(clientID, firstName, lastName, ptID) {
  
  if (!ptID) {
    throw new Error("Failed to create assessment: no pt_id provided")
  }

  const clientRes = await getClientById(clientID)
  if (!clientRes?.ClientID) {
    throw new Error("Failed to create assessment: client does not exist")
  }
  
  const assessmentID = uuidv4();

  (await cookies()).set("assessmentSession", assessmentID);

  const currTime = Math.floor(Date.now() / 1000);
  console.log(currTime);

  const command = new PutCommand({
    TableName: "Assessments",
    Item: {
      AssessmentID: assessmentID,
      created_at: currTime,
      updated_at: [currTime],
      isComplete: false,
      assessType: "Movement + Treadmill",
      clientID: clientID,
      clientFName: firstName,
      clientLName: lastName,
      pt_id: ptID
    },
  });

  const res = await ddbDocClient.send(command);

  console.log(res);
  return assessmentID
}



export async function duplicateAssessment(assessmentID, ptID) {
  try {

    const assessData = (await getAssessment(assessmentID)).Item

    if (!ptID) {
      throw new Error("Failed to create assessment: no pt_id provided")
    }

    const { clientID } = assessData

    const clientRes = await getClientById(clientID)
    if (!clientRes?.ClientID) {
      throw new Error("Failed to create assessment: client does not exist")
    }
    
    const newAssessID = uuidv4();
  
    (await cookies()).set("assessmentSession", newAssessID);
  
    const currTime = Math.floor(Date.now() / 1000);
    console.log(currTime);
  
    const command = new PutCommand({
      TableName: "Assessments",
      Item: {
        ...assessData,
        AssessmentID: newAssessID,
        created_at: currTime,
        updated_at: [currTime],
        isComplete: false,
        pt_id: ptID
      },
    });
  
    const res = await ddbDocClient.send(command);
    console.log(res)

    return newAssessID

  } catch (err) {
    console.error(`Failed to duplicate assessment: ${err}`);
    throw new Error("Failed to duplicate assessment");
  }
}



export async function newProgram(programName, description, ptID, clientID, exercises) {

  const programID = uuidv4();

  const currTime = Math.floor(Date.now() / 1000);

  const command = new PutCommand({
    TableName: "Programs",
    Item: {
      ProgramID : programID,
      programName : programName,
      description: description,
      ClientID: clientID,
      pt_id: ptID,
      exercises: exercises,
      created_at: currTime,
    },
  })

  const res = await ddbDocClient.send(command);

  console.log(res)
  return { programID, currTime }

}



export async function getAssessment(assessmentID) {
  try {
    validateID(assessmentID);

    const command = new GetCommand({
      TableName: "Assessments",
      Key: {
        AssessmentID: assessmentID,
      },
    });

    const res = await ddbDocClient.send(command);

    // console.log(res)

    return res;
  } catch (err) {
    throw new Error(err);
  }
}

export async function deleteAssessment(assessmentID) {
  try {
    validateID(assessmentID); // Ensure AssessmentID is valid

    const command = new DeleteCommand({
      TableName: "Assessments",
      Key: {
        AssessmentID: assessmentID,
      },
    });

    const res = await ddbDocClient.send(command);
    console.log(`Assessment ${assessmentID} deleted successfully.`);
    return res;
  } catch (err) {
    console.error(`Failed to delete assessment: ${err}`);
    throw new Error("Failed to delete assessment");
  }
}

export async function getAssessmentByClientID(clientID) {
  try {


    // Create a QueryCommand to search by ClientID using the GSI
    const command = new QueryCommand({
      TableName: "Assessments",
      IndexName: "clientID-index", // ensure this index exists in your table
      KeyConditionExpression: "clientID = :clientID",
      ExpressionAttributeValues: {
        ":clientID": clientID,
      },
    });

    // Execute the command
    const res = await ddbDocClient.send(command);
        console.log(res);
    console.log(res.Items);

    return res.Items;
  } catch (err) {
    throw new Error(err);
  }
}


export async function getClientById(clientId) {
  try {
    const command = new GetCommand({
      TableName: "Clients",
      Key: {
        ClientID: clientId, 
      },
    });

    const res = await ddbDocClient.send(command);
    return res?.Item || null;
  } catch (err) {
    console.error("Error fetching client by ID:", err);
    throw new Error("Error fetching client by ID");
  }
}

export async function getClientByEmail(email) {
  try {

    // Create a QueryCommand to search by email using the GSI
    const command = new QueryCommand({
      TableName: "Clients",
      IndexName: "ClientEmailIndex", // ensure this index exists in your table
      KeyConditionExpression: "email = :email",
      ExpressionAttributeValues: {
        ":email": email,
      },
    });

    // Execute the command
    const res = await ddbDocClient.send(command);
        console.log(res);
    console.log(res.Items);

    return res.Items;
  } catch (err) {
    throw new Error(err);
  }
}


export async function getUser(userID) {
  try {
    
    const command = new GetCommand({
      TableName: "Users",
      Key: {
        UserID: userID,
      },
    });

    const res = await ddbDocClient.send(command);

    // console.log(res)

    return res;
  } catch (err) {
    throw new Error(err);
  }
}



export async function getClients(userID) {
  // console.log(userID)

  const command = new QueryCommand({
    TableName: "Clients",
    IndexName: "ClientPTIndex",
    KeyConditionExpression: "pt_id = :ptID",
    ExpressionAttributeValues: {
      ":ptID": userID,
    },
    ProjectionExpression: "ClientID, created_at, email, first_name, last_name, pt_id",
  });

  return await ddbDocClient.send(command);
}

export async function getAssessments(userID) {
  // const assessmentsCommand = new GetItemCommand({
  //   TableName: "Assessments",
  //   Key: {
  //     AssessmentID: { S: "1" },
  //     created_at: { N: "1" },
  //     updated_at: { NS: ["1"] },
  //   },
  // })
  // console.log(userID)

  const assessmentsCommand = new QueryCommand({
    TableName: "Assessments",
    IndexName: "AssessmentPTIndex",
    // FilterExpression: "CrustType = :crustType",
    KeyConditionExpression: "pt_id = :ptID",
    ExpressionAttributeValues: {
      ":ptID": userID,
    },
    ProjectionExpression: "AssessmentID, clientFName, clientLName, created_at, updated_at, assessType, isComplete, pt_id, movementAssessment.version, treadmillAssessment.version",
  });

  return await ddbDocClient.send(assessmentsCommand);
}

export async function writeLiteAssessment(
  assessID,
  responseObject,
  scores,
  version
) {
  try {
    validateID(assessID);

    const command = new UpdateCommand({
      TableName: "Assessments",
      Key: {
        AssessmentID: assessID,
      },
      UpdateExpression: "set liteAssessment = :assessment",
      // ExpressionAttributeNames: {
      //   '#scores': 'MovementAssessment?.scores',
      // },

      ExpressionAttributeValues: {
        ":assessment": {
          responses: responseObject,
          scores: scores,
          version: version,
        },
      },
      ReturnValues: "ALL_NEW",
    });

    const response = await ddbDocClient.send(command);
    console.log(response);
    return response;
  } catch (err) {
    // throw new Error(err.message)
    console.log(err);
  }
}


export async function writePosture(
  assessID,
  responseObject,
) {
  try {
    validateID(assessID);

    const command = new UpdateCommand({
      TableName: "Assessments",
      Key: {
        AssessmentID: assessID,
      },
      UpdateExpression: "set posture = :posture",
      // ExpressionAttributeNames: {
      //   '#scores': 'MovementAssessment?.scores',
      // },

      ExpressionAttributeValues: {
        ":posture": responseObject,
      },
      ReturnValues: "ALL_NEW",
    });

    const response = await ddbDocClient.send(command);
    console.log(response);
    return response;
  } catch (err) {
    // throw new Error(err.message)
    console.log(err);
  }
}

export async function writeMovementAssessment(
  assessID,
  responseObject,
  notesObject,
  scores,
  version
) {
  try {
    validateID(assessID);

    const command = new UpdateCommand({
      TableName: "Assessments",
      Key: {
        AssessmentID: assessID,
      },
      UpdateExpression: "set movementAssessment = :assessment",
      // ExpressionAttributeNames: {
      //   '#scores': 'MovementAssessment?.scores',
      // },

      ExpressionAttributeValues: {
        ":assessment": {
          responses: responseObject,
          notes: notesObject,
          scores: scores,
          version: version,
        },
      },
      ReturnValues: "ALL_NEW",
    });

    const response = await ddbDocClient.send(command);
    console.log(response);
    return response;
  } catch (err) {
    // throw new Error(err.message)
    console.log(err);
  }
}


export async function writeTreadmillAssessment(
  assessID,
  responseObject,
  scores,
  version
) {
  try {
    validateID(assessID);

    // console.log(version)

    const command = new UpdateCommand({
      TableName: "Assessments",
      Key: {
        AssessmentID: assessID,
      },
      UpdateExpression: "set treadmillAssessment = :assessment",
      // ExpressionAttributeNames: {
      //   '#scores': 'MovementAssessment?.scores',
      // },

      ExpressionAttributeValues: {
        ":assessment": {
          responses: responseObject,
          scores: scores,
          version: version,
        },
      },
      ReturnValues: "ALL_NEW",
    });

    const response = await ddbDocClient.send(command);
    console.log(response);
    return response;
  } catch (err) {
    // throw new Error(err.message)
    console.log(err);
  }
}


export async function updateProgram(
  programID, programName, description, exercises
) {
  try {

    const currTime = Math.floor(Date.now() / 1000);

    const command = new UpdateCommand({
      TableName: "Programs",
      Key: {
        ProgramID: programID,
      },
      UpdateExpression: "set programName = :programName, description = :description, exercises = :exercises, updated_at = :updated_at",
      // ExpressionAttributeNames: {
      //   '#scores': 'MovementAssessment?.scores',
      // },

      ExpressionAttributeValues: {
        ":programName": programName,
        ":description": description,
        ":exercises": exercises,
        ":updated_at": [currTime],
      },
      ReturnValues: "ALL_NEW",
    });

    const response = await ddbDocClient.send(command);
    console.log(response);

    return { programID, currTime };
    
  } catch (err) {
    // throw new Error(err.message)
    console.log(err);
  }
}


export async function writeDraftPrescription(
  assessID, prescription
) {
  try {
    validateID(assessID);

    const command = new UpdateCommand({
      TableName: "Assessments",
      Key: {
        AssessmentID: assessID,
      },
      UpdateExpression: "set draftPrescription = :prescription",
      // ExpressionAttributeNames: {
      //   '#scores': 'MovementAssessment?.scores',
      // },

      ExpressionAttributeValues: {
        ":prescription": prescription,
      },
      ReturnValues: "ALL_NEW",
    });

    const response = await ddbDocClient.send(command);
    console.log(response);
    return response;
  } catch (err) {
    // throw new Error(err.message)
    console.log(err);
  }
}



export async function writePrescription(
  assessID, prescription
) {
  try {
    validateID(assessID);

    const command = new UpdateCommand({
      TableName: "Assessments",
      Key: {
        AssessmentID: assessID,
      },
      UpdateExpression: "set prescription = :prescription",
      // ExpressionAttributeNames: {
      //   '#scores': 'MovementAssessment?.scores',
      // },

      ExpressionAttributeValues: {
        ":prescription": prescription,
      },
      ReturnValues: "ALL_NEW",
    });

    const response = await ddbDocClient.send(command);
    console.log(response);
    return response;
  } catch (err) {
    // throw new Error(err.message)
    console.log(err);
  }
}

export async function addPrescription(
  assessID, programsToAdd
) {
  try {
    validateID(assessID);

    const command1 = new UpdateCommand({
      TableName: "Assessments",
      Key: {
        AssessmentID: assessID,
      },
      UpdateExpression: "set prescription = list_append(prescription,:programsToAdd)",
      // ExpressionAttributeNames: {
      //   '#scores': 'MovementAssessment?.scores',
      // },

      ExpressionAttributeValues: {
        ":programsToAdd": programsToAdd,
      },
      ReturnValues: "ALL_NEW",
    });

    const command2 = new UpdateCommand({
      TableName: "Assessments",
      Key: {
        AssessmentID: assessID,
      },
      UpdateExpression: "REMOVE draftPrescription",
      ReturnValues: "ALL_NEW",
    });

    const response1 = await ddbDocClient.send(command1);
    console.log(response1);
    const response2 = await ddbDocClient.send(command2);
    console.log(response2);
    return response1;
  } catch (err) {
    // throw new Error(err.message)
    console.log(err);
  }
}



export async function completeAssessment(assessID, issueDiscount ) {
  try {
    validateID(assessID);

    // Fetch clientID from the assessment
    const getCommand = new GetCommand({
      TableName: "Assessments",
      Key: { AssessmentID: assessID },
    });

    const assessmentData = await ddbDocClient.send(getCommand);

    if (!assessmentData.Item) {
      throw new Error("Assessment not found");
    }

    const clientID = assessmentData.Item.clientID;
    if (!clientID) throw new Error("Client ID not found for this assessment");


    const currTime = Math.floor(Date.now() / 1000);

    // Mark assessment as complete
    const updateCommand = new UpdateCommand({
      TableName: "Assessments",
      Key: { AssessmentID: assessID },
      UpdateExpression: "set isComplete = :completed, completed_at = :completedAt",
      ExpressionAttributeValues: { ":completed": true, ":completedAt" : currTime },
      ReturnValues: "ALL_NEW",
    });

    const response = await ddbDocClient.send(updateCommand);

    console.log('issueDiscount', issueDiscount);
    
    if (response.Attributes?.isComplete && issueDiscount) {
      // Call the discount API
      const discountResponse = await createAssessmentCompleteDiscountCode
      ({clientID, assessmentID: assessID})

      if (!discountResponse.code) {
        throw new Error("Failed to generate discount code");
      }

      const { code } = discountResponse;
      console.log("Discount Code:", code);
    }

    return response;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}

export async function fetchDiscountCodes(clientID) {
  try {
    if (!clientID) throw new Error("Client ID is required");

    const command = new QueryCommand({
      TableName: "DiscountCodes",
      IndexName: "ClientIDIndex", // Using GSI on clientID
      KeyConditionExpression: "clientID = :clientID",
      ExpressionAttributeValues: {
        ":clientID": clientID,
      },
    });

    const { Items } = await ddbDocClient.send(command);

    return Items || [];
  } catch (err) {
    console.error("Error fetching discount codes:", err);
    throw new Error(err.message || "Failed to fetch discount codes");
  }
}