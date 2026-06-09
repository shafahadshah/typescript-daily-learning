import { useState }
from "react";

function ArrayState() {
  const [
    items,
    setItems,
  ] = useState<string[]>(
    []
  );

  function addItem() {
    setItems([
      ...items,
      "New Item",
    ]);
  }

  return (
    <button
      onClick={addItem}
    >
      {items.length}
    </button>
  );
}


export default ArrayState;