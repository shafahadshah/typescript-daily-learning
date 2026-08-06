type FeatureFlag = {
  name: string;
  enabled: boolean;
};

const features:
  FeatureFlag[] = [
    {
      name: "chat",
      enabled: true,
    },
    {
      name: "payments",
      enabled: false,
    },
  ];

console.log(
  features
);