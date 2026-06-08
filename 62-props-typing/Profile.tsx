type ProfileProps = {
  name: string;
  city?: string;
};

function Profile({
  name,
  city,
}: ProfileProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>
        {city ?? "Unknown"}
      </p>
    </div>
  );
}

export default Profile;         