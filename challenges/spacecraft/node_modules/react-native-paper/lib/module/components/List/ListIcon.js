import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from '../Icon';
const ICON_SIZE = 24;
/**
 * A component to show an icon in a list item.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/list-icon.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List, Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <>
 *     <List.Icon color={Colors.blue500} icon="folder" />
 *     <List.Icon color={Colors.blue500} icon="equal" />
 *     <List.Icon color={Colors.blue500} icon="calendar" />
 *   </>
 * );
 *
 * export default MyComponent;
 * ```
 */

const ListIcon = _ref => {
  let {
    icon,
    color: iconColor,
    style
  } = _ref;
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.item, style],
    pointerEvents: "box-none"
  }, /*#__PURE__*/React.createElement(Icon, {
    source: icon,
    size: ICON_SIZE,
    color: iconColor
  }));
};

const styles = StyleSheet.create({
  item: {
    margin: 8,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
ListIcon.displayName = 'List.Icon';
export default ListIcon;
//# sourceMappingURL=ListIcon.js.map