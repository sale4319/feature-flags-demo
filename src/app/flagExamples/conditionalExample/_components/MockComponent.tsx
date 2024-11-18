import { isFeatureEnabled } from "../../../../utils/featureFlags";

import styles from "./MockComponent.module.css";

const MockComponent = async () => {
  const showWelcomeMessage = isFeatureEnabled("showWelcomeMessage");
  const enableDarkMode = isFeatureEnabled("enableDarkMode");
  const mode = enableDarkMode ? styles.themeDark : styles.themeLight;

  return (
    <div className={[styles.container, mode].join(" ")}>
      <h1>Conditional Example</h1>

      {showWelcomeMessage && <p>Welcome to our example!</p>}

      {enableDarkMode ? (
        <p>Dark mode is enabled.</p>
      ) : (
        <p>Dark mode is disabled.</p>
      )}
      <br />
      <a href="/" rel="noopener noreferrer">
        &#8592; Back
      </a>
    </div>
  );
};

export default MockComponent;
