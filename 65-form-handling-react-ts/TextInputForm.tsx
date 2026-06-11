import {
  useState,
  ChangeEvent,
} from "react";

function TextInputForm() {
  const [
    name,
    setName,
  ] = useState("");

  function handleChange(
    event: ChangeEvent<HTMLInputElement>
  ) {
    setName(
      event.target.value
    );
  }

  return (
    <input
      value={name}
      onChange={
        handleChange
      }
    />
  );
}

export default TextInputForm;