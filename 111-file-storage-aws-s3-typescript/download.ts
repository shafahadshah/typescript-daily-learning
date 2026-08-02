import {
  GetObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";

const s3 =
  new S3Client({
    region: "us-east-1",
  });

async function
downloadFile() {

  const command =
    new GetObjectCommand({
      Bucket: "my-bucket",
      Key: "hello.txt",
    });

  await s3.send(
    command
  );

  console.log(
    "Downloaded"
  );
}