type Features = {
  darkMode: string;
  notifications: string;
};

type FeatureFlags<T> = {
  [K in keyof T]: boolean;
};

const flags: FeatureFlags<Features> = {
  darkMode: true,
  notifications: false,
};

console.log(flags);