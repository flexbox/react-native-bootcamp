function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import color from 'color';
import { black } from '../../styles/colors';
import IconButton from '../IconButton';

/**
 * A component used to display an action item in the appbar.
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-action-android.png" />
 *       <figcaption>Android</figcaption>
 *   </figure>
 * </div>
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/appbar-action-ios.png" />
 *       <figcaption>iOS</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Appbar } from 'react-native-paper';
 * import { Platform } from 'react-native';
 *
 * const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
 *
 * const MyComponent = () => (
 *     <Appbar.Header>
 *        <Appbar.Content title="Title" subtitle={'Subtitle'} />
 *         <Appbar.Action icon="magnify" onPress={() => {}} />
 *         <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
 *     </Appbar.Header>
 * );
 *
 * export default MyComponent;
 * ```
 */
const AppbarAction = _ref => {
  let {
    size = 24,
    color: iconColor = color(black).alpha(0.54).rgb().string(),
    icon,
    disabled,
    onPress,
    accessibilityLabel,
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(IconButton, _extends({
    size: size,
    onPress: onPress,
    color: iconColor,
    icon: icon,
    disabled: disabled,
    accessibilityLabel: accessibilityLabel,
    animated: true
  }, rest));
};

AppbarAction.displayName = 'Appbar.Action';
export default AppbarAction; // @component-docs ignore-next-line

export { AppbarAction };
//# sourceMappingURL=AppbarAction.js.map