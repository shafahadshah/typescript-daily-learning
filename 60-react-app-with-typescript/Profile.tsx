import { User }
from "./types";

type ProfileProps = {
  user: User;
};

function Profile({
  user,
}: ProfileProps) {
  return (
    <div>
      {user.name}
    </div>
  );
}

export default Profile;