function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { createNavigatorFactory, StackActions, StackRouter, useNavigationBuilder } from '@react-navigation/native';
import * as React from 'react';
import NativeStackView from '../views/NativeStackView';

function NativeStackNavigator(_ref) {
  let {
    id,
    initialRouteName,
    children,
    screenListeners,
    screenOptions,
    ...rest
  } = _ref;
  const {
    state,
    descriptors,
    navigation,
    NavigationContent
  } = useNavigationBuilder(StackRouter, {
    id,
    initialRouteName,
    children,
    screenListeners,
    screenOptions
  });
  React.useEffect(() => {
    var _navigation$addListen;

    return (// @ts-expect-error: there may not be a tab navigator in parent
      navigation === null || navigation === void 0 ? void 0 : (_navigation$addListen = navigation.addListener) === null || _navigation$addListen === void 0 ? void 0 : _navigation$addListen.call(navigation, 'tabPress', e => {
        const isFocused = navigation.isFocused(); // Run the operation in the next frame so we're sure all listeners have been run
        // This is necessary to know if preventDefault() has been called

        requestAnimationFrame(() => {
          if (state.index > 0 && isFocused && !e.defaultPrevented) {
            // When user taps on already focused tab and we're inside the tab,
            // reset the stack to replicate native behaviour
            navigation.dispatch({ ...StackActions.popToTop(),
              target: state.key
            });
          }
        });
      })
    );
  }, [navigation, state.index, state.key]);
  return /*#__PURE__*/React.createElement(NavigationContent, null, /*#__PURE__*/React.createElement(NativeStackView, _extends({}, rest, {
    state: state,
    navigation: navigation,
    descriptors: descriptors
  })));
}

export default createNavigatorFactory(NativeStackNavigator);
//# sourceMappingURL=createNativeStackNavigator.js.map