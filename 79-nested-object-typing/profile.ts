type Profile = {
  username: string;

  settings: {
    theme: string;
    language: string;
  };
};

const profile: Profile = {
  username: "ali123",

  settings: {
    theme: "dark",
    language: "en",
  },
};

console.log(profile);