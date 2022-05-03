"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CardTitle = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _theming = require("../../core/theming");

var _Caption = _interopRequireDefault(require("./../Typography/Caption"));

var _Title = _interopRequireDefault(require("./../Typography/Title"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const LEFT_SIZE = 40;
/**
 * A component to show a title, subtitle and an avatar inside a Card.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/card-title-1.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar, Card, IconButton } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Card.Title
 *     title="Card Title"
 *     subtitle="Card Subtitle"
 *     left={(props) => <Avatar.Icon {...props} icon="folder" />}
 *     right={(props) => <IconButton {...props} icon="more-vert" onPress={() => {}} />}
 *   />
 * );
 *
 * export default MyComponent;
 * ```
 */

const CardTitle = _ref => {
  let {
    title,
    titleStyle,
    titleNumberOfLines = 1,
    subtitle,
    subtitleStyle,
    subtitleNumberOfLines = 1,
    left,
    leftStyle,
    right,
    rightStyle,
    style
  } = _ref;
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.container, {
      minHeight: subtitle || left || right ? 72 : 50
    }, style]
  }, left ? /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.left, leftStyle]
  }, left({
    size: LEFT_SIZE
  })) : null, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.titles]
  }, title ? /*#__PURE__*/React.createElement(_Title.default, {
    style: [styles.title, {
      marginBottom: subtitle ? 0 : 2
    }, titleStyle],
    numberOfLines: titleNumberOfLines
  }, title) : null, subtitle ? /*#__PURE__*/React.createElement(_Caption.default, {
    style: [styles.subtitle, subtitleStyle],
    numberOfLines: subtitleNumberOfLines
  }, subtitle) : null), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: rightStyle
  }, right ? right({
    size: 24
  }) : null));
};

exports.CardTitle = CardTitle;
CardTitle.displayName = 'Card.Title';

const styles = _reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16
  },
  left: {
    justifyContent: 'center',
    marginRight: 16,
    height: LEFT_SIZE,
    width: LEFT_SIZE
  },
  titles: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title: {
    minHeight: 30,
    paddingRight: 16
  },
  subtitle: {
    minHeight: 20,
    marginVertical: 0,
    paddingRight: 16
  }
});

var _default = (0, _theming.withTheme)(CardTitle); // @component-docs ignore-next-line


exports.default = _default;
//# sourceMappingURL=CardTitle.js.map