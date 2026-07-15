type UploadFile = {
  name: string;
  size: number;
  type: string;
};

function uploadFile(
  file: UploadFile
): void {
  console.log(
    `Uploading ${file.name}`
  );
}

uploadFile({
  name: "photo.png",
  size: 2048,
  type: "image/png",
});