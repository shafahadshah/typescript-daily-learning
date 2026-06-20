import {
  useMemo,
} from "react";

function UseMemoExample() {

  const total =
    useMemo(() => {
      return (
        100 + 200
      );
    }, []);

  return (
    <h2>{total}</h2>
  );
}

export default
  UseMemoExample;