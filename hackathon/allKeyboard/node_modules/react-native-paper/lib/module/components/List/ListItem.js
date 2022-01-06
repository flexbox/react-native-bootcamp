function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import color from 'color';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import Text from '../Typography/Text';
import { withTheme } from '../../core/theming';

/**
 * A component to show tiles inside a List.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/list-item-1.png" />
 *   <img class="medium" src="screenshots/list-item-2.png" />
 *   <img class="medium" src="screenshots/list-item-3.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <List.Item
 *     title="First Item"
 *     description="Item description"
 *     left={props => <List.Icon {...props} icon="folder" />}
 *   />
 * );
 *
 * export default MyComponent;
 * ```
 *
 * @extends TouchableRipple props https://callstack.github.io/react-native-paper/touchable-ripple.html
 */
const ListItem = ({
  left,
  right,
  title,
  description,
  onPress,
  theme,
  style,
  titleStyle,
  titleNumberOfLines = 1,
  descriptionNumberOfLines = 2,
  titleEllipsizeMode,
  descriptionEllipsizeMode,
  descriptionStyle,
  ...rest
}) => {
  const renderDescription = (descriptionColor, description) => {
    return typeof description === 'function' ? description({
      selectable: false,
      ellipsizeMode: descriptionEllipsizeMode,
      color: descriptionColor,
      fontSize: styles.description.fontSize
    }) : /*#__PURE__*/React.createElement(Text, {
      selectable: false,
      numberOfLines: descriptionNumberOfLines,
      ellipsizeMode: descriptionEllipsizeMode,
      style: [styles.description, {
        color: descriptionColor
      }, descriptionStyle]
    }, description);
  };

  const renderTitle = () => {
    const titleColor = color(theme.colors.text).alpha(0.87).rgb().string();
    return typeof title === 'function' ? title({
      selectable: false,
      ellipsizeMode: titleEllipsizeMode,
      color: titleColor,
      fontSize: styles.title.fontSize
    }) : /*#__PURE__*/React.createElement(Text, {
      selectable: false,
      ellipsizeMode: titleEllipsizeMode,
      numberOfLines: titleNumberOfLines,
      style: [styles.title, {
        color: titleColor
      }, titleStyle]
    }, title);
  };

  const descriptionColor = color(theme.colors.text).alpha(0.54).rgb().string();
  return /*#__PURE__*/React.createElement(TouchableRipple, _extends({}, rest, {
    style: [styles.container, style],
    onPress: onPress
  }), /*#__PURE__*/React.createElement(View, {
    style: styles.row
  }, left ? left({
    color: descriptionColor,
    style: description ? styles.iconMarginLeft : { ...styles.iconMarginLeft,
      ...styles.marginVerticalNone
    }
  }) : null, /*#__PURE__*/React.createElement(View, {
    style: [styles.item, styles.content]
  }, renderTitle(), description ? renderDescription(descriptionColor, description) : null), right ? right({
    color: descriptionColor,
    style: description ? styles.iconMarginRight : { ...styles.iconMarginRight,
      ...styles.marginVerticalNone
    }
  }) : null));
};

ListItem.displayName = 'List.Item';
const styles = StyleSheet.create({
  container: {
    padding: 8
  },
  row: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 16
  },
  description: {
    fontSize: 14
  },
  marginVerticalNone: {
    marginVertical: 0
  },
  iconMarginLeft: {
    marginLeft: 0,
    marginRight: 16
  },
  iconMarginRight: {
    marginRight: 0
  },
  item: {
    marginVertical: 6,
    paddingLeft: 8
  },
  content: {
    flex: 1,
    justifyContent: 'center'
  }
});
export default withTheme(ListItem);
//# sourceMappingURL=ListItem.js.map