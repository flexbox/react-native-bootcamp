"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DataTablePagination = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _color = _interopRequireDefault(require("color"));

var _IconButton = _interopRequireDefault(require("../IconButton"));

var _Text = _interopRequireDefault(require("../Typography/Text"));

var _theming = require("../../core/theming");

var _MaterialCommunityIcon = _interopRequireDefault(require("../MaterialCommunityIcon"));

var _Menu = _interopRequireDefault(require("../Menu/Menu"));

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const PaginationControls = _ref => {
  let {
    page,
    numberOfPages,
    onPageChange,
    showFastPaginationControls
  } = _ref;
  const {
    colors
  } = (0, _theming.useTheme)();
  return /*#__PURE__*/React.createElement(React.Fragment, null, showFastPaginationControls ? /*#__PURE__*/React.createElement(_IconButton.default, {
    icon: _ref2 => {
      let {
        size,
        color
      } = _ref2;
      return /*#__PURE__*/React.createElement(_MaterialCommunityIcon.default, {
        name: "page-first",
        color: color,
        size: size,
        direction: _reactNative.I18nManager.isRTL ? 'rtl' : 'ltr'
      });
    },
    color: colors.text,
    disabled: page === 0,
    onPress: () => onPageChange(0),
    accessibilityLabel: "page-first"
  }) : null, /*#__PURE__*/React.createElement(_IconButton.default, {
    icon: _ref3 => {
      let {
        size,
        color
      } = _ref3;
      return /*#__PURE__*/React.createElement(_MaterialCommunityIcon.default, {
        name: "chevron-left",
        color: color,
        size: size,
        direction: _reactNative.I18nManager.isRTL ? 'rtl' : 'ltr'
      });
    },
    color: colors.text,
    disabled: page === 0,
    onPress: () => onPageChange(page - 1),
    accessibilityLabel: "chevron-left"
  }), /*#__PURE__*/React.createElement(_IconButton.default, {
    icon: _ref4 => {
      let {
        size,
        color
      } = _ref4;
      return /*#__PURE__*/React.createElement(_MaterialCommunityIcon.default, {
        name: "chevron-right",
        color: color,
        size: size,
        direction: _reactNative.I18nManager.isRTL ? 'rtl' : 'ltr'
      });
    },
    color: colors.text,
    disabled: numberOfPages === 0 || page === numberOfPages - 1,
    onPress: () => onPageChange(page + 1),
    accessibilityLabel: "chevron-right"
  }), showFastPaginationControls ? /*#__PURE__*/React.createElement(_IconButton.default, {
    icon: _ref5 => {
      let {
        size,
        color
      } = _ref5;
      return /*#__PURE__*/React.createElement(_MaterialCommunityIcon.default, {
        name: "page-last",
        color: color,
        size: size,
        direction: _reactNative.I18nManager.isRTL ? 'rtl' : 'ltr'
      });
    },
    color: colors.text,
    disabled: numberOfPages === 0 || page === numberOfPages - 1,
    onPress: () => onPageChange(numberOfPages - 1),
    accessibilityLabel: "page-last"
  }) : null);
};

const PaginationDropdown = _ref6 => {
  let {
    numberOfItemsPerPageList,
    numberOfItemsPerPage,
    onItemsPerPageChange
  } = _ref6;
  const {
    colors
  } = (0, _theming.useTheme)();
  const [showSelect, toggleSelect] = React.useState(false);
  return /*#__PURE__*/React.createElement(_Menu.default, {
    visible: showSelect,
    onDismiss: () => toggleSelect(!showSelect),
    anchor: /*#__PURE__*/React.createElement(_Button.default, {
      mode: "outlined",
      onPress: () => toggleSelect(true),
      style: styles.button,
      icon: "menu-down",
      contentStyle: styles.contentStyle
    }, `${numberOfItemsPerPage}`)
  }, numberOfItemsPerPageList === null || numberOfItemsPerPageList === void 0 ? void 0 : numberOfItemsPerPageList.map(option => /*#__PURE__*/React.createElement(_Menu.default.Item, {
    key: option,
    titleStyle: option === numberOfItemsPerPage && {
      color: colors.primary
    },
    onPress: () => {
      onItemsPerPageChange === null || onItemsPerPageChange === void 0 ? void 0 : onItemsPerPageChange(option);
      toggleSelect(false);
    },
    title: option
  })));
};
/**
 * A component to show pagination for data table.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/data-table-pagination.png" />
 *   </figure>
 * </div>
 *
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { DataTable } from 'react-native-paper';
 *
 * const numberOfItemsPerPageList = [2, 3, 4];
 *
 * const items = [
 *   {
 *     key: 1,
 *     name: 'Page 1',
 *   },
 *   {
 *     key: 2,
 *     name: 'Page 2',
 *   },
 *   {
 *     key: 3,
 *     name: 'Page 3',
 *   },
 * ];
 *
 * const MyComponent = () => {
 *   const [page, setPage] = React.useState(0);
 *   const [numberOfItemsPerPage, onItemsPerPageChange] = React.useState(numberOfItemsPerPageList[0]);
 *   const from = page * numberOfItemsPerPage;
 *   const to = Math.min((page + 1) * numberOfItemsPerPage, items.length);
 *
 *   React.useEffect(() => {
 *      setPage(0);
 *   }, [numberOfItemsPerPage]);
 *
 *   return (
 *     <DataTable>
 *       <DataTable.Pagination
 *         page={page}
 *         numberOfPages={Math.ceil(items.length / numberOfItemsPerPage)}
 *         onPageChange={page => setPage(page)}
 *         label={`${from + 1}-${to} of ${items.length}`}
 *         showFastPaginationControls
 *         numberOfItemsPerPageList={numberOfItemsPerPageList}
 *         numberOfItemsPerPage={numberOfItemsPerPage}
 *         onItemsPerPageChange={onItemsPerPageChange}
 *         selectPageDropdownLabel={'Rows per page'}
 *       />
 *     </DataTable>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */


const DataTablePagination = _ref7 => {
  let {
    label,
    accessibilityLabel,
    page,
    numberOfPages,
    onPageChange,
    style,
    theme,
    showFastPaginationControls = false,
    numberOfItemsPerPageList,
    numberOfItemsPerPage,
    onItemsPerPageChange,
    selectPageDropdownLabel,
    selectPageDropdownAccessibilityLabel,
    ...rest
  } = _ref7;
  const labelColor = (0, _color.default)(theme.colors.text).alpha(0.6).rgb().string();
  return /*#__PURE__*/React.createElement(_reactNative.View, _extends({}, rest, {
    style: [styles.container, style],
    accessibilityLabel: "pagination-container"
  }), numberOfItemsPerPageList && numberOfItemsPerPage && onItemsPerPageChange && /*#__PURE__*/React.createElement(_reactNative.View, {
    accessibilityLabel: "Options Select",
    style: styles.optionsContainer
  }, /*#__PURE__*/React.createElement(_Text.default, {
    style: [styles.label, {
      color: labelColor
    }],
    numberOfLines: 3,
    accessibilityLabel: selectPageDropdownAccessibilityLabel || 'selectPageDropdownLabel'
  }, selectPageDropdownLabel), /*#__PURE__*/React.createElement(PaginationDropdown, {
    numberOfItemsPerPageList: numberOfItemsPerPageList,
    numberOfItemsPerPage: numberOfItemsPerPage,
    onItemsPerPageChange: onItemsPerPageChange
  })), /*#__PURE__*/React.createElement(_Text.default, {
    style: [styles.label, {
      color: labelColor
    }],
    numberOfLines: 3,
    accessibilityLabel: accessibilityLabel || 'label'
  }, label), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.iconsContainer
  }, /*#__PURE__*/React.createElement(PaginationControls, {
    showFastPaginationControls: showFastPaginationControls,
    onPageChange: onPageChange,
    page: page,
    numberOfPages: numberOfPages
  })));
};

exports.DataTablePagination = DataTablePagination;
DataTablePagination.displayName = 'DataTable.Pagination';

const styles = _reactNative.StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    flexWrap: 'wrap'
  },
  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6
  },
  label: {
    fontSize: 12,
    marginRight: 16
  },
  button: {
    textAlign: 'center',
    marginRight: 16
  },
  iconsContainer: {
    flexDirection: 'row'
  },
  contentStyle: {
    flexDirection: 'row-reverse'
  }
});

var _default = (0, _theming.withTheme)(DataTablePagination); // @component-docs ignore-next-line


exports.default = _default;
//# sourceMappingURL=DataTablePagination.js.map