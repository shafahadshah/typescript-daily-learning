import {
  useState,
  ChangeEvent,
} from "react";

type FormData = {
  name: string;
  email: string;
};

function MultiFieldForm() {
  const [
    form,
    setForm,
  ] = useState<FormData>({
    name: "",
    email: "",
  });

  function handleChange(
    event: ChangeEvent<HTMLInputElement>
  ) {
    setForm({
      ...form,
      [event.target.name]:
        event.target.value,
    });
  }

  return (
    <>
      <input
        name="name"
        onChange={
          handleChange
        }
      />

      <input
        name="email"
        onChange={
          handleChange
        }
      />
    </>
  );
}

export default MultiFieldForm;