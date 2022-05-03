function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { Platform, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import color from 'color';
import Text from '../Typography/Text';
import { withTheme } from '../../core/theming';
import { white } from '../../styles/colors';

/**
 * A component used to display a title and optional subtitle in an appbar.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-content.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *     <Appbar.Header>
 *        <Appbar.Content title="Title" subtitle={'Subtitle'} />
 *     </Appbar.Header>
 * );
 *
 * export default MyComponent;
 * ```
 */
const AppbarContent = _ref => {
  let {
    color: titleColor = white,
    subtitle,
    subtitleStyle,
    onPress,
    style,
    titleRef,
    titleStyle,
    theme,
    title,
    ...rest
  } = _ref;
  const {
    fonts
  } = theme;
  const subtitleColor = color(titleColor).alpha(0.7).rgb().string();
  return /*#__PURE__*/React.createElement(TouchableWithoutFeedback, {
    onPress: onPress,
    disabled: !onPress
  }, /*#__PURE__*/React.createElement(View, _extends({
    style: [styles.container, style]
  }, rest), /*#__PURE__*/React.createElement(Text, {
    ref: titleRef,
    style: [{
      color: titleColor,
      ...(Platform.OS === 'ios' ? fonts.regular : fonts.medium)
    }, styles.title, titleStyle],
    numberOfLines: 1,
    accessible: true,
    accessibilityTraits: "header" // @ts-expect-error React Native doesn't accept 'heading' as it's web-only
    ,
    accessibilityRole: Platform.OS === 'web' ? 'heading' : 'header'
  }, title), subtitle ? /*#__PURE__*/React.createElement(Text, {
    style: [styles.subtitle, {
      color: subtitleColor
    }, subtitleStyle],
    numberOfLines: 1
  }, subtitle) : null));
};

AppbarContent.displayName = 'Appbar.Content';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12
  },
  title: {
    fontSize: Platform.OS === 'ios' ? 17 : 20
  },
  subtitle: {
    fontSize: Platform.OS === 'ios' ? 11 : 14
  }
});
export default withTheme(AppbarContent); // @component-docs ignore-next-line

const AppbarContentWithTheme = withTheme(AppbarContent); // @component-docs ignore-next-line

export { AppbarContentWithTheme as AppbarContent };
//# sourceMappingURL=AppbarContent.js.map