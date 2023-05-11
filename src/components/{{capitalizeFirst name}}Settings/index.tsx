import { registerSettingsPage } from "@build-now/core";
import { Settings } from "./Settings";

export const PAGE_NAME = "{{naem}} Settings";

export const registerEssentialsSettingPage = () => {
  registerSettingsPage("buildNow", [
    {
      container: <Settings />,
      name: PAGE_NAME,
    },
  ]);
};
