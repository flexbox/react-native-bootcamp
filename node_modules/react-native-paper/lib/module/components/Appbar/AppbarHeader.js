function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import overlay from '../../styles/overlay';
import { DEFAULT_APPBAR_HEIGHT, Appbar } from './Appbar';
import shadow from '../../styles/shadow';
import { withTheme } from '../../core/theming';
import { APPROX_STATUSBAR_HEIGHT } from '../../constants';

/**
 * A component to use as a header at the top of the screen.
 * It can contain the screen title, controls such as navigation buttons, menu button etc.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-header.android.png" />
 *     <figcaption>Android</figcaption>
 *   </figure>
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-header.ios.png" />
 *     <figcaption>iOS</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const _goBack = () => console.log('Went back');
 *
 *   const _handleSearch = () => console.log('Searching');
 *
 *   const _handleMore = () => console.log('Shown more');
 *
 *   return (
 *     <Appbar.Header>
 *       <Appbar.BackAction onPress={_goBack} />
 *       <Appbar.Content title="Title" subtitle="Subtitle" />
 *       <Appbar.Action icon="magnify" onPress={_handleSearch} />
 *       <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
 *     </Appbar.Header>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const AppbarHeader = props => {
  const {
    // Don't use default props since we check it to know whether we should use SafeAreaView
    statusBarHeight = APPROX_STATUSBAR_HEIGHT,
    style,
    dark,
    ...rest
  } = props;
  const {
    dark: isDarkTheme,
    colors,
    mode
  } = rest.theme;
  const {
    height = DEFAULT_APPBAR_HEIGHT,
    elevation = 4,
    backgroundColor: customBackground,
    zIndex = 0,
    ...restStyle
  } = StyleSheet.flatten(style) || {};
  const backgroundColor = customBackground ? customBackground : isDarkTheme && mode === 'adaptive' ? overlay(elevation, colors.surface) : colors.primary; // Let the user override the behaviour

  const Wrapper = typeof props.statusBarHeight === 'number' ? View : SafeAreaView;
  return /*#__PURE__*/React.createElement(Wrapper, {
    style: [{
      backgroundColor,
      zIndex,
      elevation
    }, shadow(elevation)]
  }, /*#__PURE__*/React.createElement(Appbar, _extends({
    style: [{
      height,
      backgroundColor,
      marginTop: statusBarHeight
    }, styles.appbar, restStyle],
    dark: dark
  }, rest)));
};

AppbarHeader.displayName = 'Appbar.Header';
const styles = StyleSheet.create({
  appbar: {
    elevation: 0
  }
});
export default withTheme(AppbarHeader); // @component-docs ignore-next-line

const AppbarHeaderWithTheme = withTheme(AppbarHeader); // @component-docs ignore-next-line

export { AppbarHeaderWithTheme as AppbarHeader };
//# sourceMappingURL=AppbarHeader.js.map