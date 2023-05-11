import { FlexState, Manager } from "@twilio/flex-ui";


const manager = Manager.getInstance();

export function registerReducers() {
  if (!manager.store.addReducer) {
    console.error("You need FlexUI > 1.9.0 to use built-in redux");
    return;
  }

  //manager.store.addReducer("buildNow/{{name}}", reducer);
}

export type PluginAppState = FlexState & {
  
};
