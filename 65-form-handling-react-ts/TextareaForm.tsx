import {
  useState,
  ChangeEvent,
} from "react";

function TextareaForm() {
  const [
    message,
    setMessage,
  ] = useState("");

  function handleChange(
    event: ChangeEvent<HTMLTextAreaElement>
  ) {
    setMessage(
      event.target.value
    );
  }

  return (
    <textarea
      value={message}
      onChange={
        handleChange
      }
    />
  );
}

export default TextareaForm;