type ApiVersion =
  | "v1"
  | "v2";

function getVersion(
  version: ApiVersion
) {
  console.log(
    version
  );
}

getVersion(
  "v1"
);