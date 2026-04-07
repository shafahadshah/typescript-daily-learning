import { UserRole } from "./roles";

// Using enum in a real model
export interface User {
  id: number;
  name: string;
  role: UserRole;
}

export const user: User = {
  id: 1,
  name: "Alice",
  role: UserRole.Admin
};