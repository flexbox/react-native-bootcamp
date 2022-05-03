function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { Animated, Image, Platform, requireNativeComponent, StyleSheet, UIManager, View } from 'react-native';
import { Freeze } from 'react-freeze'; // @ts-ignore Getting private component
// eslint-disable-next-line import/default

import processColor from 'react-native/Libraries/StyleSheet/processColor';
import { version } from 'react-native/package.json';
import TransitionProgressContext from './TransitionProgressContext';
import useTransitionProgress from './useTransitionProgress';
import { isSearchBarAvailableForCurrentPlatform, executeNativeBackPress } from './utils'; // web implementation is taken from `index.tsx`

const isPlatformSupported = Platform.OS === 'ios' || Platform.OS === 'android' || Platform.OS === 'windows';
let ENABLE_SCREENS = isPlatformSupported;

function enableScreens(shouldEnableScreens = true) {
  ENABLE_SCREENS = isPlatformSupported && shouldEnableScreens;

  if (ENABLE_SCREENS && !UIManager.getViewManagerConfig('RNSScreen')) {
    console.error(`Screen native module hasn't been linked. Please check the react-native-screens README for more details`);
  }
}

let ENABLE_FREEZE = false;

function enableFreeze(shouldEnableReactFreeze = true) {
  const minor = parseInt(version.split('.')[1]); // eg. takes 66 from '0.66.0'
  // react-freeze requires react-native >=0.64, react-native from main is 0.0.0

  if (!(minor === 0 || minor >= 64) && shouldEnableReactFreeze) {
    console.warn('react-freeze library requires at least react-native 0.64. Please upgrade your react-native version in order to use this feature.');
  }

  ENABLE_FREEZE = shouldEnableReactFreeze;
} // const that tells if the library should use new implementation, will be undefined for older versions


const shouldUseActivityState = true;

function screensEnabled() {
  return ENABLE_SCREENS;
} // We initialize these lazily so that importing the module doesn't throw error when not linked
// This is necessary coz libraries such as React Navigation import the library where it may not be enabled


let NativeScreenValue;
let NativeScreenContainerValue;
let NativeScreenNavigationContainerValue;
let NativeScreenStack;
let NativeScreenStackHeaderConfig;
let NativeScreenStackHeaderSubview;
let AnimatedNativeScreen;
let NativeSearchBar;
let NativeFullWindowOverlay;
const ScreensNativeModules = {
  get NativeScreen() {
    NativeScreenValue = NativeScreenValue || requireNativeComponent('RNSScreen');
    return NativeScreenValue;
  },

  get NativeScreenContainer() {
    NativeScreenContainerValue = NativeScreenContainerValue || requireNativeComponent('RNSScreenContainer');
    return NativeScreenContainerValue;
  },

  get NativeScreenNavigationContainer() {
    NativeScreenNavigationContainerValue = NativeScreenNavigationContainerValue || (Platform.OS === 'ios' ? requireNativeComponent('RNSScreenNavigationContainer') : this.NativeScreenContainer);
    return NativeScreenNavigationContainerValue;
  },

  get NativeScreenStack() {
    NativeScreenStack = NativeScreenStack || requireNativeComponent('RNSScreenStack');
    return NativeScreenStack;
  },

  get NativeScreenStackHeaderConfig() {
    NativeScreenStackHeaderConfig = NativeScreenStackHeaderConfig || requireNativeComponent('RNSScreenStackHeaderConfig');
    return NativeScreenStackHeaderConfig;
  },

  get NativeScreenStackHeaderSubview() {
    NativeScreenStackHeaderSubview = NativeScreenStackHeaderSubview || requireNativeComponent('RNSScreenStackHeaderSubview');
    return NativeScreenStackHeaderSubview;
  },

  get NativeSearchBar() {
    NativeSearchBar = NativeSearchBar || requireNativeComponent('RNSSearchBar');
    return NativeSearchBar;
  },

  get NativeFullWindowOverlay() {
    NativeFullWindowOverlay = NativeFullWindowOverlay || requireNativeComponent('RNSFullWindowOverlay');
    return NativeFullWindowOverlay;
  }

};

// This component allows one more render before freezing the screen.
// Allows activityState to reach the native side and useIsFocused to work correctly.
function DelayedFreeze({
  freeze,
  children
}) {
  // flag used for determining whether freeze should be enabled
  const [freezeState, setFreezeState] = React.useState(false);

  if (freeze !== freezeState) {
    // setImmediate is executed at the end of the JS execution block.
    // Used here for changing the state right after the render.
    setImmediate(() => {
      setFreezeState(freeze);
    });
  }

  return /*#__PURE__*/React.createElement(Freeze, {
    freeze: freeze ? freezeState : false
  }, children);
}

function MaybeFreeze({
  freeze,
  children
}) {
  if (ENABLE_FREEZE) {
    return /*#__PURE__*/React.createElement(DelayedFreeze, {
      freeze: freeze
    }, children);
  } else {
    return /*#__PURE__*/React.createElement(React.Fragment, null, children);
  }
}

function ScreenStack(props) {
  if (ENABLE_FREEZE) {
    const {
      children,
      ...rest
    } = props;
    const size = React.Children.count(children); // freezes all screens except the top one

    const childrenWithFreeze = React.Children.map(children, (child, index) => /*#__PURE__*/React.createElement(DelayedFreeze, {
      freeze: size - index > 1
    }, child));
    return /*#__PURE__*/React.createElement(ScreensNativeModules.NativeScreenStack, rest, childrenWithFreeze);
  }

  return /*#__PURE__*/React.createElement(ScreensNativeModules.NativeScreenStack, props);
} // Incomplete type, all accessible properties available at:
// react-native/Libraries/Components/View/ReactNativeViewViewConfig.js


class Screen extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "ref", null);

    _defineProperty(this, "closing", new Animated.Value(0));

    _defineProperty(this, "progress", new Animated.Value(0));

    _defineProperty(this, "goingForward", new Animated.Value(0));

    _defineProperty(this, "setRef", ref => {
      var _this$props$onCompone, _this$props;

      this.ref = ref;
      (_this$props$onCompone = (_this$props = this.props).onComponentRef) === null || _this$props$onCompone === void 0 ? void 0 : _this$props$onCompone.call(_this$props, ref);
    });
  }

  setNativeProps(props) {
    var _this$ref;

    (_this$ref = this.ref) === null || _this$ref === void 0 ? void 0 : _this$ref.setNativeProps(props);
  }

  render() {
    const {
      enabled = ENABLE_SCREENS,
      ...rest
    } = this.props;

    if (enabled && isPlatformSupported) {
      AnimatedNativeScreen = AnimatedNativeScreen || Animated.createAnimatedComponent(ScreensNativeModules.NativeScreen);
      let {
        // Filter out active prop in this case because it is unused and
        // can cause problems depending on react-native version:
        // https://github.com/react-navigation/react-navigation/issues/4886
        active,
        activityState,
        children,
        isNativeStack,
        statusBarColor,
        ...props
      } = rest;

      if (active !== undefined && activityState === undefined) {
        console.warn('It appears that you are using old version of react-navigation library. Please update @react-navigation/bottom-tabs, @react-navigation/stack and @react-navigation/drawer to version 5.10.0 or above to take full advantage of new functionality added to react-native-screens');
        activityState = active !== 0 ? 2 : 0; // in the new version, we need one of the screens to have value of 2 after the transition
      }

      const processedColor = processColor(statusBarColor);
      return /*#__PURE__*/React.createElement(MaybeFreeze, {
        freeze: activityState === 0
      }, /*#__PURE__*/React.createElement(AnimatedNativeScreen, _extends({}, props, {
        statusBarColor: processedColor,
        activityState: activityState // This prevents showing blank screen when navigating between multiple screens with freezing
        // https://github.com/software-mansion/react-native-screens/pull/1208
        ,
        ref: ref => {
          var _ref$viewConfig, _ref$viewConfig$valid;

          if (ref !== null && ref !== void 0 && (_ref$viewConfig = ref.viewConfig) !== null && _ref$viewConfig !== void 0 && (_ref$viewConfig$valid = _ref$viewConfig.validAttributes) !== null && _ref$viewConfig$valid !== void 0 && _ref$viewConfig$valid.style) {
            ref.viewConfig.validAttributes.style = { ...ref.viewConfig.validAttributes.style,
              display: false
            };
          }

          this.setRef(ref);
        },
        onTransitionProgress: !isNativeStack ? undefined : Animated.event([{
          nativeEvent: {
            progress: this.progress,
            closing: this.closing,
            goingForward: this.goingForward
          }
        }], {
          useNativeDriver: true
        })
      }), !isNativeStack ? // see comment of this prop in types.tsx for information why it is needed
      children : /*#__PURE__*/React.createElement(TransitionProgressContext.Provider, {
        value: {
          progress: this.progress,
          closing: this.closing,
          goingForward: this.goingForward
        }
      }, children)));
    } else {
      // same reason as above
      let {
        active,
        activityState,
        style,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onComponentRef,
        ...props
      } = rest;

      if (active !== undefined && activityState === undefined) {
        activityState = active !== 0 ? 2 : 0;
      }

      return /*#__PURE__*/React.createElement(Animated.View, _extends({
        style: [style, {
          display: activityState !== 0 ? 'flex' : 'none'
        }],
        ref: this.setRef
      }, props));
    }
  }

}

function ScreenContainer(props) {
  const {
    enabled = ENABLE_SCREENS,
    hasTwoStates,
    ...rest
  } = props;

  if (enabled && isPlatformSupported) {
    if (hasTwoStates) {
      return /*#__PURE__*/React.createElement(ScreensNativeModules.NativeScreenNavigationContainer, rest);
    }

    return /*#__PURE__*/React.createElement(ScreensNativeModules.NativeScreenContainer, rest);
  }

  return /*#__PURE__*/React.createElement(View, rest);
}

const styles = StyleSheet.create({
  headerSubview: {
    position: 'absolute',
    top: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const ScreenStackHeaderBackButtonImage = props => /*#__PURE__*/React.createElement(ScreensNativeModules.NativeScreenStackHeaderSubview, {
  type: "back",
  style: styles.headerSubview
}, /*#__PURE__*/React.createElement(Image, _extends({
  resizeMode: "center",
  fadeDuration: 0
}, props)));

const ScreenStackHeaderRightView = props => /*#__PURE__*/React.createElement(ScreensNativeModules.NativeScreenStackHeaderSubview, _extends({}, props, {
  type: "right",
  style: styles.headerSubview
}));

const ScreenStackHeaderLeftView = props => /*#__PURE__*/React.createElement(ScreensNativeModules.NativeScreenStackHeaderSubview, _extends({}, props, {
  type: "left",
  style: styles.headerSubview
}));

const ScreenStackHeaderCenterView = props => /*#__PURE__*/React.createElement(ScreensNativeModules.NativeScreenStackHeaderSubview, _extends({}, props, {
  type: "center",
  style: styles.headerSubview
}));

const ScreenStackHeaderSearchBarView = props => /*#__PURE__*/React.createElement(ScreensNativeModules.NativeScreenStackHeaderSubview, _extends({}, props, {
  type: "searchBar",
  style: styles.headerSubview
}));

// context to be used when the user wants to use enhanced implementation
// e.g. to use `react-native-reanimated` (see `reanimated` folder in repo)
const ScreenContext = /*#__PURE__*/React.createContext(Screen);
module.exports = {
  // these are classes so they are not evaluated until used
  // so no need to use getters for them
  Screen,
  ScreenContainer,
  ScreenContext,
  ScreenStack,

  get NativeScreen() {
    return ScreensNativeModules.NativeScreen;
  },

  get NativeScreenContainer() {
    return ScreensNativeModules.NativeScreenContainer;
  },

  get NativeScreenNavigationContainer() {
    return ScreensNativeModules.NativeScreenNavigationContainer;
  },

  get ScreenStackHeaderConfig() {
    return ScreensNativeModules.NativeScreenStackHeaderConfig;
  },

  get ScreenStackHeaderSubview() {
    return ScreensNativeModules.NativeScreenStackHeaderSubview;
  },

  get SearchBar() {
    if (!isSearchBarAvailableForCurrentPlatform) {
      console.warn('Importing SearchBar is only valid on iOS and Android devices.');
      return View;
    }

    return ScreensNativeModules.NativeSearchBar;
  },

  get FullWindowOverlay() {
    if (Platform.OS !== 'ios') {
      console.warn('Importing FullWindowOverlay is only valid on iOS devices.');
      return View;
    }

    return ScreensNativeModules.NativeFullWindowOverlay;
  },

  // these are functions and will not be evaluated until used
  // so no need to use getters for them
  ScreenStackHeaderBackButtonImage,
  ScreenStackHeaderRightView,
  ScreenStackHeaderLeftView,
  ScreenStackHeaderCenterView,
  ScreenStackHeaderSearchBarView,
  enableScreens,
  enableFreeze,
  screensEnabled,
  shouldUseActivityState,
  useTransitionProgress,
  isSearchBarAvailableForCurrentPlatform,
  executeNativeBackPress
};
//# sourceMappingURL=index.native.js.map