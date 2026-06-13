import { useState }
from "react";

function useCounter() {

  const [
    count,
    setCount,
  ] = useState<number>(
    0
  );

  function increment() {
    setCount(
      count + 1
    );
  }

  return {
    count,
    increment,
  };
}

export default useCounter;