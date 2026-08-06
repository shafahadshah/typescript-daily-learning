type FeatureFlag = {
  name: string;
  enabled: boolean;
};

class FeatureService {

  isEnabled(
    feature: FeatureFlag
  ): boolean {

    return feature.enabled;
  }
}

const service =
  new FeatureService();

console.log(
  service.isEnabled({
    name: "chat",
    enabled: true,
  })
);