import React from "react";
import * as Flex from "@twilio/flex-ui";
import { FlexPlugin } from "@twilio/flex-plugin";
import { CustomizationProvider } from "@twilio-paste/customization";
import { registerEssentialsSettingPage } from "./components/Settings";
import { registerReducers } from "./store";
import { PLUGIN_NAME } from "./constants";

export default class {{pluginClassName}} extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof Flex }
   */
  async init(flex: typeof Flex, manager: Flex.Manager): Promise<void> {
    Flex.setProviders({
      PasteThemeProvider: CustomizationProvider,
    });

    registerReducers();


    manager.events.once("pluginsLoaded", async () => {
      registerEssentialsSettingPage();

    });
  }
}
