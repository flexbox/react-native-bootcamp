"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _color = _interopRequireDefault(require("color"));

var _colors = require("../../styles/colors");

var _CardContent = _interopRequireDefault(require("./CardContent"));

var _CardActions = _interopRequireDefault(require("./CardActions"));

var _CardCover2 = _interopRequireDefault(require("./CardCover"));

var _CardTitle2 = _interopRequireDefault(require("./CardTitle"));

var _Surface = _interopRequireDefault(require("../Surface"));

var _theming = require("../../core/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * A card is a sheet of material that serves as an entry point to more detailed information.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/card-1.png" />
 *   <img class="medium" src="screenshots/card-2.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
 *
 * const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
 *     <Card.Content>
 *       <Title>Card title</Title>
 *       <Paragraph>Card content</Paragraph>
 *     </Card.Content>
 *     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
 *     <Card.Actions>
 *       <Button>Cancel</Button>
 *       <Button>Ok</Button>
 *     </Card.Actions>
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 */
const Card = ({
  elevation: cardElevation = 1,
  onLongPress,
  onPress,
  mode: cardMode = 'elevated',
  children,
  style,
  theme,
  testID,
  accessible,
  ...rest
}) => {
  const {
    current: elevation
  } = React.useRef(new _reactNative.Animated.Value(cardElevation));
  const {
    animation,
    dark,
    mode,
    roundness
  } = theme;

  const handlePressIn = () => {
    const {
      dark,
      mode,
      animation: {
        scale
      }
    } = theme;

    _reactNative.Animated.timing(elevation, {
      toValue: 8,
      duration: 150 * scale,
      useNativeDriver: !dark || mode === 'exact'
    }).start();
  };

  const handlePressOut = () => {
    _reactNative.Animated.timing(elevation, {
      toValue: cardElevation,
      duration: 150 * animation.scale,
      useNativeDriver: !dark || mode === 'exact'
    }).start();
  };

  const total = React.Children.count(children);
  const siblings = React.Children.map(children, child => /*#__PURE__*/React.isValidElement(child) && child.type ? child.type.displayName : null);
  const borderColor = (0, _color.default)(theme.dark ? _colors.white : _colors.black).alpha(0.12).rgb().string();
  return /*#__PURE__*/React.createElement(_Surface.default, _extends({
    style: [{
      borderRadius: roundness,
      elevation,
      borderColor
    }, cardMode === 'outlined' ? styles.outlined : {}, style],
    theme: theme
  }, rest), /*#__PURE__*/React.createElement(_reactNative.TouchableWithoutFeedback, {
    delayPressIn: 0,
    disabled: !(onPress || onLongPress),
    onLongPress: onLongPress,
    onPress: onPress,
    onPressIn: onPress || onLongPress ? handlePressIn : undefined,
    onPressOut: onPress || onLongPress ? handlePressOut : undefined,
    testID: testID,
    accessible: accessible
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.innerContainer
  }, React.Children.map(children, (child, index) => /*#__PURE__*/React.isValidElement(child) ? /*#__PURE__*/React.cloneElement(child, {
    index,
    total,
    siblings
  }) : child))));
}; // @component ./CardContent.tsx


Card.Content = _CardContent.default; // @component ./CardActions.tsx

Card.Actions = _CardActions.default; // @component ./CardCover.tsx

Card.Cover = _CardCover2.default; // @component ./CardTitle.tsx

Card.Title = _CardTitle2.default;

const styles = _reactNative.StyleSheet.create({
  innerContainer: {
    flexGrow: 1,
    flexShrink: 1
  },
  outlined: {
    elevation: 0,
    borderWidth: 1
  }
});

var _default = (0, _theming.withTheme)(Card);

exports.default = _default;
//# sourceMappingURL=Card.js.map