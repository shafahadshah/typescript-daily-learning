type FeatureConfig = {
  chat: boolean;
  payments: boolean;
  notifications: boolean;
};

const config:
  FeatureConfig = {
    chat: true,
    payments: false,
    notifications: true,
};

console.log(
  config
);