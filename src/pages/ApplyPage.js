const { DynamoDBClient, GetItemCommand } = require("@aws-sdk/client-dynamodb");
const { unmarshall } = require("@aws-sdk/util-dynamodb");

const client = new DynamoDBClient({ region: "ap-south-1" });
const TABLE_NAME = "JobPosts";

exports.handler = async (event) => {
  try {
    console.log("Received event:", JSON.stringify(event, null, 2));
    
    // Assuming you're using Lambda Proxy Integration with API Gateway,
    // the jobId should be in event.pathParameters
    const jobId = event.pathParameters ? event.pathParameters.jobId : null;
    
    if (!jobId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Job ID is required" })
      };
    }
    
    const params = {
      TableName: TABLE_NAME,
      Key: {
        jobId: { S: jobId }
      }
    };
    
    const result = await client.send(new GetItemCommand(params));
    
    if (!result.Item) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Job not found" })
      };
    }
    
    // Convert DynamoDB format to plain object
    const job = unmarshall(result.Item);
    console.log("Fetched job:", job);
    
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://www.qavisiontestlab.com",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization"
      },
      body: JSON.stringify(job)
    };
  } catch (error) {
    console.error("Error fetching job:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "https://www.qavisiontestlab.com",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization"
      },
      body: JSON.stringify({ error: "Failed to fetch job", details: error.message })
    };
  }
};
