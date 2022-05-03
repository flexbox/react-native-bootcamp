import * as React from 'react';
import { View } from 'react-native';
export const RadioButtonContext = /*#__PURE__*/React.createContext(null);
/**
 * Radio button group allows to control a group of radio buttons.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/radio-button-group-android.gif" />
 *  <figcaption>Android</figcaption>
 *   </figure>
 *   <figure>
 *     <img class="medium" src="screenshots/radio-button-group-ios.gif" />
 *  <figcaption>iOS</figcaption>
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { RadioButton, Text } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [value, setValue] = React.useState('first');
 *
 *   return (
 *     <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
 *       <View>
 *         <Text>First</Text>
 *         <RadioButton value="first" />
 *       </View>
 *       <View>
 *         <Text>Second</Text>
 *         <RadioButton value="second" />
 *       </View>
 *     </RadioButton.Group>
 *   );
 * };
 *
 * export default MyComponent;
 *```
 */

const RadioButtonGroup = ({
  value,
  onValueChange,
  children
}) => /*#__PURE__*/React.createElement(RadioButtonContext.Provider, {
  value: {
    value,
    onValueChange
  }
}, /*#__PURE__*/React.createElement(View, {
  accessibilityRole: "radiogroup"
}, children));

RadioButtonGroup.displayName = 'RadioButton.Group';
export default RadioButtonGroup; // @component-docs ignore-next-line

export { RadioButtonGroup };
//# sourceMappingURL=RadioButtonGroup.js.map