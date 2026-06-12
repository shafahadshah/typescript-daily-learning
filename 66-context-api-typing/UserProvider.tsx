import {
  ReactNode,
} from "react";

import {
  UserContext,
} from "./UserContext";

type Props = {
  children: ReactNode;
};

function UserProvider({
  children,
}: Props) {
  return (
    <UserContext.Provider
      value={{
        name: "Ali",
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;