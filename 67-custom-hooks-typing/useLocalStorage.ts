import { useState }
from "react";

function useLocalStorage<T>(
  initialValue: T
) {

  const [
    value,
    setValue,
  ] = useState<T>(
    initialValue
  );

  return {
    value,
    setValue,
  };
}

export default useLocalStorage;