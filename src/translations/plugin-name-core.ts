import { generateUsePluginTranslationsHook } from "@build-now/core";
import { PLUGIN_NAME } from "../constants";

export const defaultTranslations = {
  SettingView: {
    NavigationTitle: "Quick Navigation",
  },
} as const;

export const { usePluginTranslations, registerTranslations } = generateUsePluginTranslationsHook(
  PLUGIN_NAME,
  "core",
  defaultTranslations
);