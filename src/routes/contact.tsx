import { ActionFunction, redirect } from "remix";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";

export const action: ActionFunction = async ({ request }) => {
  const client = new S3Client({
    endpoint: process.env.S3_ENDPOINT,
    region: process.env.S3_REGION,
    credentials: {
      accessKeyId: process.env.FILEBASE_ACCESS_ID || "",
      secretAccessKey: process.env.FILEBASE_SECRET_KEY || "",
    },
  });

  const body = await request.formData();

  const data = {
    email: body.get("email"),
    reason: body.get("reason"),
  };

  await client.send(
    new PutObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key: `waitlist/${uuidv4()}.json`,
      Body: JSON.stringify(data, null, 2),
    })
  );

  return redirect("/");
};
