type UserNameProps = {
  name: string;
};

function UserName({
  name,
}: UserNameProps) {
  return <h2>{name}</h2>;
}

export default UserName;