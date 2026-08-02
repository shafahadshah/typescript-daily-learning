import {
  DeleteObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";

const s3 =
  new S3Client({
    region: "us-east-1",
  });

async function
deleteFile() {

  const command =
    new DeleteObjectCommand({
      Bucket: "my-bucket",
      Key: "hello.txt",
    });

  await s3.send(
    command
  );

  console.log(
    "Deleted"
  );
}