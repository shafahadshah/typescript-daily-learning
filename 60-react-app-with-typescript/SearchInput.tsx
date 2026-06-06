import { ChangeEvent }
from "react";

function SearchInput() {
  function handleChange(
    event: ChangeEvent<HTMLInputElement>
  ) {
    console.log(
      event.target.value
    );
  }

  return (
    <input
      onChange={
        handleChange
      }
    />
  );
}

export default SearchInput;