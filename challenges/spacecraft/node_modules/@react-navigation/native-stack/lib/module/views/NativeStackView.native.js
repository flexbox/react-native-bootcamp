function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { getDefaultHeaderHeight, getHeaderTitle, HeaderHeightContext, HeaderShownContext, SafeAreaProviderCompat } from '@react-navigation/elements';
import { NavigationContext, NavigationRouteContext, StackActions, useTheme } from '@react-navigation/native';
import * as React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Screen, ScreenStack } from 'react-native-screens';
import warnOnce from 'warn-once';
import DebugContainer from './DebugContainer';
import HeaderConfig from './HeaderConfig';
const isAndroid = Platform.OS === 'android';

const MaybeNestedStack = _ref => {
  let {
    options,
    route,
    presentation,
    headerHeight,
    children
  } = _ref;
  const {
    colors
  } = useTheme();
  const {
    header,
    headerShown = true,
    contentStyle
  } = options;
  const isHeaderInModal = isAndroid ? false : presentation !== 'card' && headerShown === true && header === undefined;
  const headerShownPreviousRef = React.useRef(headerShown);
  React.useEffect(() => {
    warnOnce(!isAndroid && presentation !== 'card' && headerShownPreviousRef.current !== headerShown, `Dynamically changing 'headerShown' in modals will result in remounting the screen and losing all local state. See options for the screen '${route.name}'.`);
    headerShownPreviousRef.current = headerShown;
  }, [headerShown, presentation, route.name]);
  const content = /*#__PURE__*/React.createElement(DebugContainer, {
    style: [styles.container, presentation !== 'transparentModal' && presentation !== 'containedTransparentModal' && {
      backgroundColor: colors.background
    }, contentStyle],
    stackPresentation: presentation === 'card' ? 'push' : presentation
  }, children);

  if (isHeaderInModal) {
    return /*#__PURE__*/React.createElement(ScreenStack, {
      style: styles.container
    }, /*#__PURE__*/React.createElement(Screen, {
      enabled: true,
      style: StyleSheet.absoluteFill
    }, /*#__PURE__*/React.createElement(HeaderConfig, _extends({}, options, {
      route: route,
      headerHeight: headerHeight,
      canGoBack: true
    })), content));
  }

  return content;
};

const SceneView = _ref2 => {
  let {
    descriptor,
    previousDescriptor,
    index,
    onWillDisappear,
    onAppear,
    onDisappear,
    onDismissed
  } = _ref2;
  const {
    route,
    navigation,
    options,
    render
  } = descriptor;
  const {
    animation,
    animationTypeForReplace = 'push',
    customAnimationOnGesture,
    fullScreenGestureEnabled,
    gestureEnabled,
    header,
    headerShown,
    orientation,
    statusBarAnimation,
    statusBarHidden,
    statusBarStyle
  } = options;
  let {
    presentation = 'card'
  } = options;

  if (index === 0) {
    // first screen should always be treated as `card`, it resolves problems with no header animation
    // for navigator with first screen as `modal` and the next as `card`
    presentation = 'card';
  }

  const isHeaderInPush = isAndroid ? headerShown : presentation === 'card' && headerShown !== false;
  const insets = useSafeAreaInsets();
  const frame = useSafeAreaFrame(); // `modal` and `formSheet` presentations do not take whole screen, so should not take the inset.

  const isModal = presentation === 'modal' || presentation === 'formSheet'; // Modals are fullscreen in landscape only on iPhone

  const isIPhone = Platform.OS === 'ios' && !(Platform.isPad && Platform.isTVOS);
  const isLandscape = frame.width > frame.height;
  const topInset = isModal || isIPhone && isLandscape ? 0 : insets.top;
  const isParentHeaderShown = React.useContext(HeaderShownContext);
  const parentHeaderHeight = React.useContext(HeaderHeightContext);
  const defaultHeaderHeight = getDefaultHeaderHeight(frame, isModal, topInset);
  const [customHeaderHeight, setCustomHeaderHeight] = React.useState(defaultHeaderHeight);
  const headerHeight = header ? customHeaderHeight : defaultHeaderHeight;
  return /*#__PURE__*/React.createElement(Screen, {
    key: route.key,
    enabled: true,
    style: StyleSheet.absoluteFill,
    customAnimationOnSwipe: customAnimationOnGesture,
    fullScreenSwipeEnabled: fullScreenGestureEnabled,
    gestureEnabled: isAndroid ? // This prop enables handling of system back gestures on Android
    // Since we handle them in JS side, we disable this
    false : gestureEnabled,
    replaceAnimation: animationTypeForReplace,
    stackPresentation: presentation === 'card' ? 'push' : presentation,
    stackAnimation: animation,
    screenOrientation: orientation,
    statusBarAnimation: statusBarAnimation,
    statusBarHidden: statusBarHidden,
    statusBarStyle: statusBarStyle,
    onWillDisappear: onWillDisappear,
    onAppear: onAppear,
    onDisappear: onDisappear,
    onDismissed: onDismissed,
    isNativeStack: true
  }, /*#__PURE__*/React.createElement(NavigationContext.Provider, {
    value: navigation
  }, /*#__PURE__*/React.createElement(NavigationRouteContext.Provider, {
    value: route
  }, /*#__PURE__*/React.createElement(HeaderShownContext.Provider, {
    value: isParentHeaderShown || isHeaderInPush !== false
  }, /*#__PURE__*/React.createElement(HeaderHeightContext.Provider, {
    value: isHeaderInPush !== false ? headerHeight : parentHeaderHeight !== null && parentHeaderHeight !== void 0 ? parentHeaderHeight : 0
  }, header !== undefined && headerShown !== false ? /*#__PURE__*/React.createElement(View, {
    onLayout: e => {
      setCustomHeaderHeight(e.nativeEvent.layout.height);
    }
  }, header({
    back: previousDescriptor ? {
      title: getHeaderTitle(previousDescriptor.options, previousDescriptor.route.name)
    } : undefined,
    options,
    route,
    navigation
  })) : /*#__PURE__*/React.createElement(HeaderConfig, _extends({}, options, {
    route: route,
    headerShown: isHeaderInPush,
    headerHeight: headerHeight,
    canGoBack: index !== 0
  })), /*#__PURE__*/React.createElement(MaybeNestedStack, {
    options: options,
    route: route,
    presentation: presentation,
    headerHeight: headerHeight
  }, render()))))));
};

function NativeStackViewInner(_ref3) {
  var _state$routes$find;

  let {
    state,
    navigation,
    descriptors
  } = _ref3;
  const [nextDismissedKey, setNextDismissedKey] = React.useState(null);
  const dismissedRouteName = nextDismissedKey ? (_state$routes$find = state.routes.find(route => route.key === nextDismissedKey)) === null || _state$routes$find === void 0 ? void 0 : _state$routes$find.name : null;
  React.useEffect(() => {
    if (dismissedRouteName) {
      const message = `The screen '${dismissedRouteName}' was removed natively but didn't get removed from JS state. ` + `This can happen if the action was prevented in a 'beforeRemove' listener, which is not fully supported in native-stack.\n\n` + `Consider using 'gestureEnabled: false' to prevent back gesture and use a custom back button with 'headerLeft' option to override the native behavior.`;
      console.error(message);
    }
  }, [dismissedRouteName]);
  return /*#__PURE__*/React.createElement(ScreenStack, {
    style: styles.container
  }, state.routes.map((route, index) => {
    var _state$routes;

    const descriptor = descriptors[route.key];
    const previousKey = (_state$routes = state.routes[index - 1]) === null || _state$routes === void 0 ? void 0 : _state$routes.key;
    const previousDescriptor = previousKey ? descriptors[previousKey] : undefined;
    return /*#__PURE__*/React.createElement(SceneView, {
      key: route.key,
      index: index,
      descriptor: descriptor,
      previousDescriptor: previousDescriptor,
      onWillDisappear: () => {
        navigation.emit({
          type: 'transitionStart',
          data: {
            closing: true
          },
          target: route.key
        });
      },
      onAppear: () => {
        navigation.emit({
          type: 'transitionEnd',
          data: {
            closing: false
          },
          target: route.key
        });
      },
      onDisappear: () => {
        navigation.emit({
          type: 'transitionEnd',
          data: {
            closing: true
          },
          target: route.key
        });
      },
      onDismissed: event => {
        navigation.dispatch({ ...StackActions.pop(event.nativeEvent.dismissCount),
          source: route.key,
          target: state.key
        });
        setNextDismissedKey(route.key);
      }
    });
  }));
}

export default function NativeStackView(props) {
  return /*#__PURE__*/React.createElement(SafeAreaProviderCompat, null, /*#__PURE__*/React.createElement(NativeStackViewInner, props));
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
//# sourceMappingURL=NativeStackView.native.js.map