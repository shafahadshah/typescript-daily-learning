import { useState }
from "react";

function StringState() {
  const [
    name,
    setName,
  ] = useState<string>(
    "Ali"
  );

  return (
    <button
      onClick={() =>
        setName("Sara")
      }
    >
      {name}
    </button>
  );
}

export default StringState;