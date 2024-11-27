import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";

// DynamoDBクライアントを設定
const client = new DynamoDBClient({
  region: "ap-northeast-1", // 東京リージョン
  credentials: {
    accessKeyId: import.meta.env.VITE_APP_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_APP_SECRET_ACCESS_KEY,
  },
});

const ddbDocClient = DynamoDBDocumentClient.from(client);

export const AllSeichi = async () => {
  try {
    const params = {
      TableName: "AllSeichi",
    };
    const data = await ddbDocClient.send(new ScanCommand(params));
    return data.Items;
  } catch (err) {
    console.error("Error fetching data from DynamoDB", err);
    throw err;
  }
};
