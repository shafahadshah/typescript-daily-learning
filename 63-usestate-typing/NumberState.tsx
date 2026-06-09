import { useState }
from "react";

function NumberState() {
  const [
    count,
    setCount,
  ] = useState<number>(
    0
  );

  return (
    <button
      onClick={() =>
        setCount(
          count + 1
        )
      }
    >
      {count}
    </button>
  );
}

export default NumberState;