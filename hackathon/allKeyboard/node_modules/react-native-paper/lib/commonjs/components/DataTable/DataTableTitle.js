"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataTableTitle = exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _color = _interopRequireDefault(require("color"));

var _MaterialCommunityIcon = _interopRequireDefault(require("../MaterialCommunityIcon"));

var _Text = _interopRequireDefault(require("../Typography/Text"));

var _theming = require("../../core/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * A component to display title in table header.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/data-table-header.png" />
 *   </figure>
 * </div>
 *
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DataTable } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *       <DataTable>
 *         <DataTable.Header>
 *           <DataTable.Title
 *             sortDirection='descending'
 *           >
 *             Dessert
 *           </DataTable.Title>
 *           <DataTable.Title numeric>Calories</DataTable.Title>
 *           <DataTable.Title numeric>Fat (g)</DataTable.Title>
 *         </DataTable.Header>
 *       </DataTable>
 * );
 *
 * export default MyComponent;
 * ```
 */
const DataTableTitle = ({
  numeric,
  children,
  onPress,
  sortDirection,
  theme,
  style,
  numberOfLines = 1,
  ...rest
}) => {
  const {
    current: spinAnim
  } = React.useRef(new _reactNative.Animated.Value(sortDirection === 'ascending' ? 0 : 1));
  React.useEffect(() => {
    _reactNative.Animated.timing(spinAnim, {
      toValue: sortDirection === 'ascending' ? 0 : 1,
      duration: 150,
      useNativeDriver: true
    }).start();
  }, [sortDirection, spinAnim]);
  const textColor = (0, _color.default)(theme.colors.text).alpha(0.6).rgb().string();
  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  });
  const icon = sortDirection ? /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    style: [styles.icon, {
      transform: [{
        rotate: spin
      }]
    }]
  }, /*#__PURE__*/React.createElement(_MaterialCommunityIcon.default, {
    name: "arrow-up",
    size: 16,
    color: theme.colors.text,
    direction: _reactNative.I18nManager.isRTL ? 'rtl' : 'ltr'
  })) : null;
  return /*#__PURE__*/React.createElement(_reactNative.TouchableWithoutFeedback, _extends({
    disabled: !onPress,
    onPress: onPress
  }, rest), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.container, numeric && styles.right, style]
  }, icon, /*#__PURE__*/React.createElement(_Text.default, {
    style: [styles.cell, sortDirection ? styles.sorted : {
      color: textColor
    }],
    numberOfLines: numberOfLines
  }, children)));
};

exports.DataTableTitle = DataTableTitle;
DataTableTitle.displayName = 'DataTable.Title';

const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    paddingVertical: 12
  },
  right: {
    justifyContent: 'flex-end'
  },
  cell: {
    height: 24,
    lineHeight: 24,
    fontSize: 12,
    fontWeight: '500',
    alignItems: 'center'
  },
  sorted: {
    marginLeft: 8
  },
  icon: {
    height: 24,
    justifyContent: 'center'
  }
});

var _default = (0, _theming.withTheme)(DataTableTitle); // @component-docs ignore-next-line


exports.default = _default;
//# sourceMappingURL=DataTableTitle.js.map