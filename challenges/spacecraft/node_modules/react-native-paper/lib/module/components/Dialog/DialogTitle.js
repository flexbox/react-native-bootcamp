function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { StyleSheet } from 'react-native';
import Title from '../Typography/Title';
import { withTheme } from '../../core/theming';

/**
 * A component to show a title in a Dialog.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/dialog-title.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Paragraph, Dialog, Portal } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(false);
 *
 *   const hideDialog = () => setVisible(false);
 *
 *   return (
 *     <Portal>
 *       <Dialog visible={visible} onDismiss={hideDialog}>
 *         <Dialog.Title>This is a title</Dialog.Title>
 *         <Dialog.Content>
 *           <Paragraph>This is simple dialog</Paragraph>
 *         </Dialog.Content>
 *       </Dialog>
 *     </Portal>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const DialogTitle = _ref => {
  let {
    children,
    theme,
    style,
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(Title // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
  , _extends({
    accessibilityTraits: "header",
    accessibilityRole: "header",
    style: [styles.text, {
      color: theme.colors.text
    }, style]
  }, rest), children);
};

DialogTitle.displayName = 'Dialog.Title';
const styles = StyleSheet.create({
  text: {
    marginTop: 22,
    marginBottom: 18,
    marginHorizontal: 24
  }
});
export default withTheme(DialogTitle); // @component-docs ignore-next-line

export { DialogTitle };
//# sourceMappingURL=DialogTitle.js.map