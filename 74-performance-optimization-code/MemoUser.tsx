import { memo } from "react";

type Props = {
  name: string;
};

function User({
  name,
}: Props) {
  console.log(
    "Rendered"
  );

  return <h2>{name}</h2>;
}

export default memo(User);