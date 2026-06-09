 import { useState }
from "react";

function BooleanState() {
  const [
    isOpen,
    setIsOpen,
  ] = useState<boolean>(
    false
  );

  return (
    <button
      onClick={() =>
        setIsOpen(
          !isOpen
        )
      }
    >
      {isOpen
        ? "Open"
        : "Closed"}
    </button>
  );
}

export default BooleanState;