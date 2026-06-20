import {
  useCallback,
} from "react";

function UseCallbackExample() {

  const handleClick =
    useCallback(() => {
      console.log(
        "Clicked"
      );
    }, []);

  return (
    <button
      onClick={
        handleClick
      }
    >
      Click
    </button>
  );
}

export default
  UseCallbackExample;