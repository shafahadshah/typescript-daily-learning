type FeatureFlag = {
  name: string;
  enabled: boolean;
};

const darkMode:
  FeatureFlag = {
    name: "dark-mode",
    enabled: true,
};

console.log(
  darkMode
);