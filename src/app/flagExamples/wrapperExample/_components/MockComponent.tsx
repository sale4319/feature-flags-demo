import { featureFlagWrapper } from "../../../../utils/featureFlags";
import styles from "./MockComponent.module.css";

const App = async () => {
  return (
    <div
      className={[
        styles.container,
        featureFlagWrapper(
          "enableDarkMode",
          styles.themeDark,
          styles.themeLight
        ),
      ].join(" ")}
    >
      <h1>Wrapper Example</h1>

      {featureFlagWrapper(
        "showWelcomeMessage",
        <p>Welcome to our example!</p>,
        null
      )}

      <p>
        {featureFlagWrapper(
          "enableDarkMode",
          "Dark mode is enabled.",
          "Dark mode is disabled."
        )}
      </p>
      <br />
      <a href="/" rel="noopener noreferrer">
        &#8592; Back
      </a>
    </div>
  );
};

export default App;
