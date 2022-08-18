import { Navigator as App } from "./src/navigation/Navigator";
import StorybookUIRoot from "./storybook";

// Should we show storybook instead of our app?
//
// ⚠️ Leave this as `false` when checking into git.
const SHOW_STORYBOOK = true;

const UI = SHOW_STORYBOOK && __DEV__ ? StorybookUIRoot : App;
// eslint-disable-next-line import/no-default-export
export default UI;
