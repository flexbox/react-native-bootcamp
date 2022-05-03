function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { StyleSheet, View, I18nManager } from 'react-native';
import color from 'color';
import IconButton from '../IconButton';
import Text from '../Typography/Text';
import { withTheme, useTheme } from '../../core/theming';
import MaterialCommunityIcon from '../MaterialCommunityIcon';
import Menu from '../Menu/Menu';
import Button from '../Button';

const PaginationControls = _ref => {
  let {
    page,
    numberOfPages,
    onPageChange,
    showFastPaginationControls
  } = _ref;
  const {
    colors
  } = useTheme();
  return /*#__PURE__*/React.createElement(React.Fragment, null, showFastPaginationControls ? /*#__PURE__*/React.createElement(IconButton, {
    icon: _ref2 => {
      let {
        size,
        color
      } = _ref2;
      return /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
        name: "page-first",
        color: color,
        size: size,
        direction: I18nManager.isRTL ? 'rtl' : 'ltr'
      });
    },
    color: colors.text,
    disabled: page === 0,
    onPress: () => onPageChange(0),
    accessibilityLabel: "page-first"
  }) : null, /*#__PURE__*/React.createElement(IconButton, {
    icon: _ref3 => {
      let {
        size,
        color
      } = _ref3;
      return /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
        name: "chevron-left",
        color: color,
        size: size,
        direction: I18nManager.isRTL ? 'rtl' : 'ltr'
      });
    },
    color: colors.text,
    disabled: page === 0,
    onPress: () => onPageChange(page - 1),
    accessibilityLabel: "chevron-left"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: _ref4 => {
      let {
        size,
        color
      } = _ref4;
      return /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
        name: "chevron-right",
        color: color,
        size: size,
        direction: I18nManager.isRTL ? 'rtl' : 'ltr'
      });
    },
    color: colors.text,
    disabled: numberOfPages === 0 || page === numberOfPages - 1,
    onPress: () => onPageChange(page + 1),
    accessibilityLabel: "chevron-right"
  }), showFastPaginationControls ? /*#__PURE__*/React.createElement(IconButton, {
    icon: _ref5 => {
      let {
        size,
        color
      } = _ref5;
      return /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
        name: "page-last",
        color: color,
        size: size,
        direction: I18nManager.isRTL ? 'rtl' : 'ltr'
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
  } = useTheme();
  const [showSelect, toggleSelect] = React.useState(false);
  return /*#__PURE__*/React.createElement(Menu, {
    visible: showSelect,
    onDismiss: () => toggleSelect(!showSelect),
    anchor: /*#__PURE__*/React.createElement(Button, {
      mode: "outlined",
      onPress: () => toggleSelect(true),
      style: styles.button,
      icon: "menu-down",
      contentStyle: styles.contentStyle
    }, `${numberOfItemsPerPage}`)
  }, numberOfItemsPerPageList === null || numberOfItemsPerPageList === void 0 ? void 0 : numberOfItemsPerPageList.map(option => /*#__PURE__*/React.createElement(Menu.Item, {
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
  const labelColor = color(theme.colors.text).alpha(0.6).rgb().string();
  return /*#__PURE__*/React.createElement(View, _extends({}, rest, {
    style: [styles.container, style],
    accessibilityLabel: "pagination-container"
  }), numberOfItemsPerPageList && numberOfItemsPerPage && onItemsPerPageChange && /*#__PURE__*/React.createElement(View, {
    accessibilityLabel: "Options Select",
    style: styles.optionsContainer
  }, /*#__PURE__*/React.createElement(Text, {
    style: [styles.label, {
      color: labelColor
    }],
    numberOfLines: 3,
    accessibilityLabel: selectPageDropdownAccessibilityLabel || 'selectPageDropdownLabel'
  }, selectPageDropdownLabel), /*#__PURE__*/React.createElement(PaginationDropdown, {
    numberOfItemsPerPageList: numberOfItemsPerPageList,
    numberOfItemsPerPage: numberOfItemsPerPage,
    onItemsPerPageChange: onItemsPerPageChange
  })), /*#__PURE__*/React.createElement(Text, {
    style: [styles.label, {
      color: labelColor
    }],
    numberOfLines: 3,
    accessibilityLabel: accessibilityLabel || 'label'
  }, label), /*#__PURE__*/React.createElement(View, {
    style: styles.iconsContainer
  }, /*#__PURE__*/React.createElement(PaginationControls, {
    showFastPaginationControls: showFastPaginationControls,
    onPageChange: onPageChange,
    page: page,
    numberOfPages: numberOfPages
  })));
};

DataTablePagination.displayName = 'DataTable.Pagination';
const styles = StyleSheet.create({
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
export default withTheme(DataTablePagination); // @component-docs ignore-next-line

export { DataTablePagination };
//# sourceMappingURL=DataTablePagination.js.map