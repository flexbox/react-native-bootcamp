"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _color = _interopRequireDefault(require("color"));

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple/TouchableRipple"));

var _Text = _interopRequireDefault(require("../Typography/Text"));

var _theming = require("../../core/theming");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
    }) : /*#__PURE__*/React.createElement(_Text.default, {
      selectable: false,
      numberOfLines: descriptionNumberOfLines,
      ellipsizeMode: descriptionEllipsizeMode,
      style: [styles.description, {
        color: descriptionColor
      }, descriptionStyle]
    }, description);
  };

  const renderTitle = () => {
    const titleColor = (0, _color.default)(theme.colors.text).alpha(0.87).rgb().string();
    return typeof title === 'function' ? title({
      selectable: false,
      ellipsizeMode: titleEllipsizeMode,
      color: titleColor,
      fontSize: styles.title.fontSize
    }) : /*#__PURE__*/React.createElement(_Text.default, {
      selectable: false,
      ellipsizeMode: titleEllipsizeMode,
      numberOfLines: titleNumberOfLines,
      style: [styles.title, {
        color: titleColor
      }, titleStyle]
    }, title);
  };

  const descriptionColor = (0, _color.default)(theme.colors.text).alpha(0.54).rgb().string();
  return /*#__PURE__*/React.createElement(_TouchableRipple.default, _extends({}, rest, {
    style: [styles.container, style],
    onPress: onPress
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.row
  }, left ? left({
    color: descriptionColor,
    style: description ? styles.iconMarginLeft : { ...styles.iconMarginLeft,
      ...styles.marginVerticalNone
    }
  }) : null, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.item, styles.content]
  }, renderTitle(), description ? renderDescription(descriptionColor, description) : null), right ? right({
    color: descriptionColor,
    style: description ? styles.iconMarginRight : { ...styles.iconMarginRight,
      ...styles.marginVerticalNone
    }
  }) : null));
};

ListItem.displayName = 'List.Item';

const styles = _reactNative.StyleSheet.create({
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

var _default = (0, _theming.withTheme)(ListItem);

exports.default = _default;
//# sourceMappingURL=ListItem.js.map