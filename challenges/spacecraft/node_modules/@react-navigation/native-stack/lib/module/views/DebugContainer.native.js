import * as React from 'react';
import { Platform, View } from 'react-native'; // @ts-ignore Getting private component

import AppContainer from 'react-native/Libraries/ReactNative/AppContainer';
let Container = View;

if (process.env.NODE_ENV !== 'production') {
  const DebugContainer = props => {
    const {
      stackPresentation,
      ...rest
    } = props;

    if (Platform.OS === 'ios' && stackPresentation !== 'push') {
      // This is necessary for LogBox
      return /*#__PURE__*/React.createElement(AppContainer, null, /*#__PURE__*/React.createElement(View, rest));
    }

    return /*#__PURE__*/React.createElement(View, rest);
  };

  Container = DebugContainer;
}

export default Container;
//# sourceMappingURL=DebugContainer.native.js.map