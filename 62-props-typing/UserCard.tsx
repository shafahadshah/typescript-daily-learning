type UserCardProps = {
  name: string;
  age: number;
};

function UserCard({
  name,
  age,
}: UserCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
    </div>
  );
}

export default UserCard;