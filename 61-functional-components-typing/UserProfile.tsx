type UserProfileProps = {
  name: string;
  age: number;
};

function UserProfile({
  name,
  age,
}: UserProfileProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
    </div>
  );
}

export default UserProfile;