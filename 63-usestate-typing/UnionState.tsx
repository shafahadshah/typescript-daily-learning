import { useState }
from "react";

type Status =
  | "loading"
  | "success"
  | "error";

function UnionState() {
  const [
    status,
    setStatus,
  ] = useState<Status>(
    "loading"
  );

  return (
    <button
      onClick={() =>
        setStatus(
          "success"
        )
      }
    >
      {status}
    </button>
  );
}

export default UnionState;