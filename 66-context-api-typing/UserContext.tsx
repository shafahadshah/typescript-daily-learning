import {
  createContext,
} from "react";

type UserContextType = {
  name: string;
};

export const UserContext =
  createContext<
    UserContextType | null
  >(null);