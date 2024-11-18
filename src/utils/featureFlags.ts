type FeatureFlags = {
  [key: string]: boolean;
};

export function isFeatureEnabled(
  featureName: string,
  flags: FeatureFlags
): boolean {
  return flags[featureName] === true;
}
