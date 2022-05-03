"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _color = _interopRequireDefault(require("color"));

var _IconButton = _interopRequireDefault(require("./IconButton"));

var _Surface = _interopRequireDefault(require("./Surface"));

var _theming = require("../core/theming");

var _MaterialCommunityIcon = _interopRequireDefault(require("./MaterialCommunityIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Searchbar is a simple input box where users can type search queries.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/searchbar.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Searchbar } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [searchQuery, setSearchQuery] = React.useState('');
 *
 *   const onChangeSearch = query => setSearchQuery(query);
 *
 *   return (
 *     <Searchbar
 *       placeholder="Search"
 *       onChangeText={onChangeSearch}
 *       value={searchQuery}
 *     />
 *   );
 * };
 *
 * export default MyComponent;

 * ```
 */
const Searchbar = /*#__PURE__*/React.forwardRef(({
  clearAccessibilityLabel = 'clear',
  clearIcon,
  icon,
  iconColor: customIconColor,
  inputStyle,
  onIconPress,
  placeholder,
  searchAccessibilityLabel = 'search',
  style,
  theme,
  value,
  ...rest
}, ref) => {
  const root = React.useRef(null);
  React.useImperativeHandle(ref, () => {
    const input = root.current;

    if (input) {
      return {
        focus: () => input.focus(),
        clear: () => input.clear(),
        setNativeProps: args => input.setNativeProps(args),
        isFocused: () => input.isFocused(),
        blur: () => input.blur()
      };
    }

    const noop = () => {
      throw new Error('TextInput is not available');
    };

    return {
      focus: noop,
      clear: noop,
      setNativeProps: noop,
      isFocused: noop,
      blur: noop
    };
  });

  const handleClearPress = () => {
    var _root$current, _rest$onChangeText;

    (_root$current = root.current) === null || _root$current === void 0 ? void 0 : _root$current.clear();
    (_rest$onChangeText = rest.onChangeText) === null || _rest$onChangeText === void 0 ? void 0 : _rest$onChangeText.call(rest, '');
  };

  const {
    colors,
    roundness,
    dark,
    fonts
  } = theme;
  const textColor = colors.text;
  const font = fonts.regular;
  const iconColor = customIconColor || (dark ? textColor : (0, _color.default)(textColor).alpha(0.54).rgb().string());
  const rippleColor = (0, _color.default)(textColor).alpha(0.32).rgb().string();
  return /*#__PURE__*/React.createElement(_Surface.default, {
    style: [{
      borderRadius: roundness,
      elevation: 4
    }, styles.container, style]
  }, /*#__PURE__*/React.createElement(_IconButton.default // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
  , {
    accessibilityTraits: "button",
    accessibilityComponentType: "button",
    accessibilityRole: "button",
    borderless: true,
    rippleColor: rippleColor,
    onPress: onIconPress,
    color: iconColor,
    icon: icon || (({
      size,
      color
    }) => /*#__PURE__*/React.createElement(_MaterialCommunityIcon.default, {
      name: "magnify",
      color: color,
      size: size,
      direction: _reactNative.I18nManager.isRTL ? 'rtl' : 'ltr'
    })),
    accessibilityLabel: searchAccessibilityLabel
  }), /*#__PURE__*/React.createElement(_reactNative.TextInput, _extends({
    style: [styles.input, {
      color: textColor,
      ...font,
      ..._reactNative.Platform.select({
        web: {
          outline: 'none'
        }
      })
    }, inputStyle],
    placeholder: placeholder || '',
    placeholderTextColor: colors.placeholder,
    selectionColor: colors.primary,
    underlineColorAndroid: "transparent",
    returnKeyType: "search",
    keyboardAppearance: dark ? 'dark' : 'light' // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
    ,
    accessibilityTraits: "search",
    accessibilityRole: "search",
    ref: root,
    value: value
  }, rest)), /*#__PURE__*/React.createElement(_IconButton.default, {
    borderless: true,
    disabled: !value,
    accessibilityLabel: clearAccessibilityLabel,
    color: value ? iconColor : 'rgba(255, 255, 255, 0)',
    rippleColor: rippleColor,
    onPress: handleClearPress,
    icon: clearIcon || (({
      size,
      color
    }) => /*#__PURE__*/React.createElement(_MaterialCommunityIcon.default, {
      name: "close",
      color: color,
      size: size,
      direction: _reactNative.I18nManager.isRTL ? 'rtl' : 'ltr'
    })) // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
    ,
    accessibilityTraits: "button",
    accessibilityComponentType: "button",
    accessibilityRole: "button"
  }));
});

const styles = _reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 8,
    alignSelf: 'stretch',
    textAlign: _reactNative.I18nManager.isRTL ? 'right' : 'left',
    minWidth: 0
  }
});

var _default = (0, _theming.withTheme)(Searchbar);

exports.default = _default;
//# sourceMappingURL=Searchbar.js.map