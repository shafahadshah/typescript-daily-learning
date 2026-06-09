import { useState }
from "react";

type User = {
  name: string;
  age: number;
};

function ObjectState() {
  const [
    user,
    setUser,
  ] = useState<User>({
    name: "Ali",
    age: 20,
  });

  return (
    <button
      onClick={() =>
        setUser({
          ...user,
          age: 21,
        })
      }
    >
      {user.name}
    </button>
  );
}

export default ObjectState;