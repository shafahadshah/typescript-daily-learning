import {
  useState,
  FormEvent,
} from "react";

function SubmitForm() {
  const [
    email,
    setEmail,
  ] = useState("");

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    console.log(email);
  }

  return (
    <form
      onSubmit={
        handleSubmit
      }
    >
      <input
        value={email}
        onChange={(e) =>
          setEmail(
            e.target.value
          )
        }
      />

      <button>
        Submit
      </button>
    </form>
  );
}

export default SubmitForm;