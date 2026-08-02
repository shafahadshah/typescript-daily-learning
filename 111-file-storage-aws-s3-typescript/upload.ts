import {
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";

const s3 =
  new S3Client({
    region: "us-east-1",
  });

async function
uploadFile() {

  const command =
    new PutObjectCommand({
      Bucket: "my-bucket",
      Key: "hello.txt",
      Body: "Hello World",
    });

  await s3.send(
    command
  );

  console.log(
    "Uploaded"
  );
}