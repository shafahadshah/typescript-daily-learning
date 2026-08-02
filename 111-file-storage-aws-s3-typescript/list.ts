import {
  ListObjectsV2Command,
  S3Client,
} from "@aws-sdk/client-s3";

const s3 =
  new S3Client({
    region: "us-east-1",
  });

async function
listFiles() {

  const command =
    new ListObjectsV2Command({
      Bucket: "my-bucket",
    });

  const files =
    await s3.send(
      command
    );

  console.log(
    files.Contents
  );
}