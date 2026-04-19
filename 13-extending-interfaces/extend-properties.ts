// Extending with more properties

interface User {
  name: string;
}

interface Admin extends User {
  role: string;
}

const admin: Admin = {
  name: "Sara",
  role: "superadmin"
};

console.log(admin);