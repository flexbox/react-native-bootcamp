import {
  getStorybookUI,
  configure,
  addDecorator,
} from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";

import "./rn-addons";

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
  require("./stories");
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage:
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("@react-native-async-storage/async-storage").default || null,
});

// eslint-disable-next-line import/no-default-export
export default StorybookUIRoot;
