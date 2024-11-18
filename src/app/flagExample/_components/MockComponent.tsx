import { isFeatureEnabled } from "../../../utils/featureFlags";
import featureFlags from "../../../utils/flags.json";

import styles from "./MockComponent.module.css";

const MockComponent = async () => {
  const showWelcomeMessage = isFeatureEnabled(
    "showWelcomeMessage",
    featureFlags
  );
  const enableDarkMode = isFeatureEnabled("enableDarkMode", featureFlags);
  const mode = enableDarkMode ? styles.themeDark : styles.themeLight;

  return (
    <div className={[styles.container, mode].join(" ")}>
      <h1>Feature Flags Example</h1>

      {showWelcomeMessage && <p>Welcome to the example!</p>}

      {enableDarkMode ? (
        <p>Dark mode is enabled.</p>
      ) : (
        <p>Dark mode is disabled.</p>
      )}
    </div>
  );
};

export default MockComponent;
