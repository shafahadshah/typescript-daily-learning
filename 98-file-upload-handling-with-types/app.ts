type UploadResponse = {
  success: boolean;
  url: string;
};

const response:
  UploadResponse = {
    success: true,
    url: "/uploads/photo.png",
};

console.log(
  response.url
);