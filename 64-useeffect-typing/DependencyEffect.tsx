import {
  useState,
  useEffect,
} from "react";

function DependencyEffect() {
  const [
    count,
    setCount,
  ] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

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

export default DependencyEffect;