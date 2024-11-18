import featureFlags from "./flags.json";

type FeatureFlagKeys = keyof typeof featureFlags;

// Wrapper function
export function featureFlagWrapper<T>(
  featureName: FeatureFlagKeys,
  onEnabled: T,
  onDisabled: T
): T {
  const isEnabled = featureFlags[featureName] === true;
  return isEnabled ? onEnabled : onDisabled;
}

// Conditional function
export function isFeatureEnabled(featureName: FeatureFlagKeys): boolean {
  return featureFlags[featureName] === true;
}
