 import { useState }
from "react";

type User = {
  name: string;
};

function NullableState() {
  const [
    user,
    setUser,
  ] = useState<
    User | null
  >(null);

  return (
    <button
      onClick={() =>
        setUser({
          name: "Ali",
        })
      }
    >
      {user?.name ??
        "No User"}
    </button>
  );
}

export default NullableState;