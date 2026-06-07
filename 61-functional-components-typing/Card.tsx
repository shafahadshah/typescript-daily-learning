import { ReactNode }
from "react";

type CardProps = {
  children: ReactNode;
};

function Card({
  children,
}: CardProps) {
  return (
    <div>
      {children}
    </div>
  );
}

export default Card;