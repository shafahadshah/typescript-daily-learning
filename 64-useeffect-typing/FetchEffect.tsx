import {
  useEffect,
  useState,
} from "react";

type User = {
  id: number;
  name: string;
};

function FetchEffect() {
  const [
    users,
    setUsers,
  ] = useState<User[]>(
    []
  );

  useEffect(() => {
    async function load() {
      const response =
        await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

      const data:
        User[] =
        await response.json();

      setUsers(data);
    }

    load();
  }, []);

  return (
    <div>
      {users.length}
    </div>
  );
}

export default FetchEffect;