function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import color from 'color';
import AppbarContent from './AppbarContent';
import AppbarAction from './AppbarAction';
import AppbarBackAction from './AppbarBackAction';
import Surface from '../Surface';
import { withTheme } from '../../core/theming';
import { black, white } from '../../styles/colors';
import overlay from '../../styles/overlay';
export const DEFAULT_APPBAR_HEIGHT = 56;
/**
 * A component to display action items in a bar. It can be placed at the top or bottom.
 * The top bar usually contains the screen title, controls such as navigation buttons, menu button etc.
 * The bottom bar usually provides access to a drawer and up to four actions.
 *
 * By default Appbar uses primary color as a background, in dark theme with `adaptive` mode it will use surface colour instead.
 * See [Dark Theme](https://callstack.github.io/react-native-paper/theming.html#dark-theme) for more informations
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/appbar.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 * import { StyleSheet } from 'react-native';
 *
 * const MyComponent = () => (
 *  <Appbar style={styles.bottom}>
 *    <Appbar.Action
 *      icon="archive"
 *      onPress={() => console.log('Pressed archive')}
 *     />
 *     <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
 *     <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
 *     <Appbar.Action
 *       icon="delete"
 *       onPress={() => console.log('Pressed delete')}
 *     />
 *   </Appbar>
 *  );
 *
 * export default MyComponent
 *
 * const styles = StyleSheet.create({
 *   bottom: {
 *     position: 'absolute',
 *     left: 0,
 *     right: 0,
 *     bottom: 0,
 *   },
 * });
 * ```
 */

const Appbar = _ref => {
  let {
    children,
    dark,
    style,
    theme,
    ...rest
  } = _ref;
  const {
    colors,
    dark: isDarkTheme,
    mode
  } = theme;
  const {
    backgroundColor: customBackground,
    elevation = 4,
    ...restStyle
  } = StyleSheet.flatten(style) || {};
  let isDark;
  const backgroundColor = customBackground ? customBackground : isDarkTheme && mode === 'adaptive' ? overlay(elevation, colors.surface) : colors.primary;

  if (typeof dark === 'boolean') {
    isDark = dark;
  } else {
    isDark = backgroundColor === 'transparent' ? false : typeof backgroundColor === 'string' ? !color(backgroundColor).isLight() : true;
  }

  let shouldCenterContent = false;
  let shouldAddLeftSpacing = false;
  let shouldAddRightSpacing = false;

  if (Platform.OS === 'ios') {
    let hasAppbarContent = false;
    let leftItemsCount = 0;
    let rightItemsCount = 0;
    React.Children.forEach(children, child => {
      if ( /*#__PURE__*/React.isValidElement(child)) {
        if (child.type === AppbarContent) {
          hasAppbarContent = true;
        } else if (hasAppbarContent) {
          rightItemsCount++;
        } else {
          leftItemsCount++;
        }
      }
    });
    shouldCenterContent = hasAppbarContent && leftItemsCount < 2 && rightItemsCount < 2;
    shouldAddLeftSpacing = shouldCenterContent && leftItemsCount === 0;
    shouldAddRightSpacing = shouldCenterContent && rightItemsCount === 0;
  }

  return /*#__PURE__*/React.createElement(Surface, _extends({
    style: [{
      backgroundColor
    }, styles.appbar, {
      elevation
    }, restStyle]
  }, rest), shouldAddLeftSpacing ? /*#__PURE__*/React.createElement(View, {
    style: styles.spacing
  }) : null, React.Children.toArray(children).filter(child => child != null && typeof child !== 'boolean').map((child, i) => {
    if (! /*#__PURE__*/React.isValidElement(child) || ![AppbarContent, AppbarAction, AppbarBackAction].includes( // @ts-expect-error: TypeScript complains about the type of type but it doesn't matter
    child.type)) {
      return child;
    }

    const props = {
      color: typeof child.props.color !== 'undefined' ? child.props.color : isDark ? white : black
    };

    if (child.type === AppbarContent) {
      props.style = [// Since content is not first item, add extra left margin
      i !== 0 && {
        marginLeft: 8
      }, shouldCenterContent && {
        alignItems: 'center'
      }, child.props.style];
    }

    return /*#__PURE__*/React.cloneElement(child, props);
  }), shouldAddRightSpacing ? /*#__PURE__*/React.createElement(View, {
    style: styles.spacing
  }) : null);
};

const styles = StyleSheet.create({
  appbar: {
    height: DEFAULT_APPBAR_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    elevation: 4
  },
  spacing: {
    width: 48
  }
});
export default withTheme(Appbar); // @component-docs ignore-next-line

const AppbarWithTheme = withTheme(Appbar); // @component-docs ignore-next-line

export { AppbarWithTheme as Appbar };
//# sourceMappingURL=Appbar.js.map