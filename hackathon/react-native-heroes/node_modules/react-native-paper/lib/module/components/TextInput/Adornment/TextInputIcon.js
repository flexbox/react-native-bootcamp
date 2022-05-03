function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { View, StyleSheet } from 'react-native';
import IconButton from '../../IconButton';
export const ICON_SIZE = 24;
const ICON_OFFSET = 12;
const StyleContext = /*#__PURE__*/React.createContext({
  style: {},
  isTextInputFocused: false,
  forceFocus: () => {}
});

const IconAdornment = ({
  icon,
  topPosition,
  side,
  isTextInputFocused,
  forceFocus
}) => {
  const style = {
    top: topPosition,
    [side]: ICON_OFFSET
  };
  const contextState = {
    style,
    isTextInputFocused,
    forceFocus
  };
  return /*#__PURE__*/React.createElement(StyleContext.Provider, {
    value: contextState
  }, icon);
};
/**
 * A component to render a leading / trailing icon in the TextInput
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/textinput-flat.icon.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { TextInput } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [text, setText] = React.useState('');
 *
 *   return (
 *     <TextInput
 *       label="Password"
 *       secureTextEntry
 *       right={<TextInput.Icon name="eye" />}
 *     />
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */


const TextInputIcon = ({
  name,
  onPress,
  forceTextInputFocus,
  color,
  ...rest
}) => {
  const {
    style,
    isTextInputFocused,
    forceFocus
  } = React.useContext(StyleContext);
  const onPressWithFocusControl = React.useCallback(() => {
    if (forceTextInputFocus && !isTextInputFocused) {
      forceFocus();
    }

    onPress === null || onPress === void 0 ? void 0 : onPress();
  }, [forceTextInputFocus, forceFocus, isTextInputFocused, onPress]);
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.container, style]
  }, /*#__PURE__*/React.createElement(IconButton, _extends({
    icon: name,
    style: styles.iconButton,
    size: ICON_SIZE,
    onPress: onPressWithFocusControl,
    color: typeof color === 'function' ? color(isTextInputFocused) : color
  }, rest)));
};

TextInputIcon.displayName = 'TextInput.Icon';
TextInputIcon.defaultProps = {
  forceTextInputFocus: true
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: ICON_SIZE,
    height: ICON_SIZE,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconButton: {
    margin: 0
  }
});
export default TextInputIcon; // @component-docs ignore-next-line

export { IconAdornment };
//# sourceMappingURL=TextInputIcon.js.map