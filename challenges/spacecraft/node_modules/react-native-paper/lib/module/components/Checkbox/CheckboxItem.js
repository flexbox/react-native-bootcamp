import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Checkbox from './Checkbox';
import CheckboxAndroid from './CheckboxAndroid';
import CheckboxIOS from './CheckboxIOS';
import Text from '../Typography/Text';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import { withTheme } from '../../core/theming';

/**
 * Checkbox.Item allows you to press the whole row (item) instead of only the Checkbox.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { Checkbox } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <View>
 *     <Checkbox.Item label="Item" status="checked" />
 *   </View>
 * );
 *
 * export default MyComponent;
 *```
 */
const CheckboxItem = _ref => {
  let {
    style,
    status,
    label,
    onPress,
    labelStyle,
    theme,
    testID,
    mode,
    position = 'trailing',
    disabled,
    ...props
  } = _ref;
  const checkboxProps = { ...props,
    status,
    theme,
    disabled
  };
  const isLeading = position === 'leading';
  let checkbox;

  if (mode === 'android') {
    checkbox = /*#__PURE__*/React.createElement(CheckboxAndroid, checkboxProps);
  } else if (mode === 'ios') {
    checkbox = /*#__PURE__*/React.createElement(CheckboxIOS, checkboxProps);
  } else {
    checkbox = /*#__PURE__*/React.createElement(Checkbox, checkboxProps);
  }

  return /*#__PURE__*/React.createElement(TouchableRipple, {
    accessibilityLabel: label,
    accessibilityRole: "checkbox",
    accessibilityState: {
      checked: status === 'checked',
      disabled
    },
    onPress: onPress,
    testID: testID,
    disabled: disabled
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.container, style],
    pointerEvents: "none",
    importantForAccessibility: "no-hide-descendants"
  }, isLeading && checkbox, /*#__PURE__*/React.createElement(Text, {
    style: [styles.label, {
      color: disabled ? theme.colors.disabled : theme.colors.text,
      textAlign: isLeading ? 'right' : 'left'
    }, labelStyle]
  }, label), !isLeading && checkbox));
};

CheckboxItem.displayName = 'Checkbox.Item';
export default withTheme(CheckboxItem); // @component-docs ignore-next-line

const CheckboxItemWithTheme = withTheme(CheckboxItem); // @component-docs ignore-next-line

export { CheckboxItemWithTheme as CheckboxItem };
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  label: {
    fontSize: 16,
    flexShrink: 1,
    flexGrow: 1
  }
});
//# sourceMappingURL=CheckboxItem.js.map