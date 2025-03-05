const { DynamoDBClient, GetItemCommand } = require("@aws-sdk/client-dynamodb");
const { unmarshall } = require("@aws-sdk/util-dynamodb");

// Initialize DynamoDB Client
const client = new DynamoDBClient({ region: "ap-south-1" });
const TABLE_NAME = "JobPosts";

exports.handler = async (event) => {
  try {
    // Extract jobId from path parameters
    const jobId = event.pathParameters && event.pathParameters.jobId;
    if (!jobId) {
      return {
        statusCode: 400,
        headers: corsHeaders(),
        body: JSON.stringify({ error: "Job ID is required" }),
      };
    }
    
    const params = {
      TableName: TABLE_NAME,
      Key: {
        jobId: { S: jobId }
      }
    };
    
    const data = await client.send(new GetItemCommand(params));
    
    if (!data.Item) {
      return {
        statusCode: 404,
        headers: corsHeaders(),
        body: JSON.stringify({ error: "Job not found" }),
      };
    }
    
    // Convert DynamoDB item to a plain object
    const job = unmarshall(data.Item);
    
    return {
      statusCode: 200,
      headers: corsHeaders(),
      body: JSON.stringify(job),
    };
  } catch (error) {
    console.error("Error fetching job:", error);
    return {
      statusCode: 500,
      headers: corsHeaders(),
      body: JSON.stringify({ error: "Internal Server Error", details: error.message }),
    };
  }
};

const corsHeaders = () => ({
  "Access-Control-Allow-Origin": "https://www.qavisiontestlab.com",
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
});
