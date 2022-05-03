import { NavigationContext, NavigationRouteContext } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';
import Background from './Background';
import getDefaultHeaderHeight from './Header/getDefaultHeaderHeight';
import HeaderHeightContext from './Header/HeaderHeightContext';
import HeaderShownContext from './Header/HeaderShownContext';
export default function Screen(props) {
  const dimensions = useSafeAreaFrame();
  const insets = useSafeAreaInsets();
  const isParentHeaderShown = React.useContext(HeaderShownContext);
  const parentHeaderHeight = React.useContext(HeaderHeightContext);
  const {
    focused,
    modal = false,
    header,
    headerShown = true,
    headerTransparent,
    headerStatusBarHeight = isParentHeaderShown ? 0 : insets.top,
    navigation,
    route,
    children,
    style
  } = props;
  const [headerHeight, setHeaderHeight] = React.useState(() => getDefaultHeaderHeight(dimensions, modal, headerStatusBarHeight));
  return /*#__PURE__*/React.createElement(Background, {
    accessibilityElementsHidden: !focused,
    importantForAccessibility: focused ? 'auto' : 'no-hide-descendants',
    style: [styles.container, style]
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.content
  }, /*#__PURE__*/React.createElement(HeaderShownContext.Provider, {
    value: isParentHeaderShown || headerShown !== false
  }, /*#__PURE__*/React.createElement(HeaderHeightContext.Provider, {
    value: headerShown ? headerHeight : parentHeaderHeight !== null && parentHeaderHeight !== void 0 ? parentHeaderHeight : 0
  }, children))), headerShown ? /*#__PURE__*/React.createElement(NavigationContext.Provider, {
    value: navigation
  }, /*#__PURE__*/React.createElement(NavigationRouteContext.Provider, {
    value: route
  }, /*#__PURE__*/React.createElement(View, {
    onLayout: e => {
      const {
        height
      } = e.nativeEvent.layout;
      setHeaderHeight(height);
    },
    style: headerTransparent ? styles.absolute : null
  }, header))) : null);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse'
  },
  // This is necessary to avoid applying 'column-reverse' to screen content
  content: {
    flex: 1
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  }
});
//# sourceMappingURL=Screen.js.map