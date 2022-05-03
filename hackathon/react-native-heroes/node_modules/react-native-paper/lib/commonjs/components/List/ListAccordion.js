"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _color = _interopRequireDefault(require("color"));

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _TouchableRipple = _interopRequireDefault(require("../TouchableRipple/TouchableRipple"));

var _MaterialCommunityIcon = _interopRequireDefault(require("../MaterialCommunityIcon"));

var _Text = _interopRequireDefault(require("../Typography/Text"));

var _theming = require("../../core/theming");

var _ListAccordionGroup = require("./ListAccordionGroup");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A component used to display an expandable list item.
 *
 * <div class="screenshots">
 *   <img class="medium" src="screenshots/list-accordion-1.png" />
 *   <img class="medium" src="screenshots/list-accordion-2.png" />
 *   <img class="medium" src="screenshots/list-accordion-3.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [expanded, setExpanded] = React.useState(true);
 *
 *   const handlePress = () => setExpanded(!expanded);
 *
 *   return (
 *     <List.Section title="Accordions">
 *       <List.Accordion
 *         title="Uncontrolled Accordion"
 *         left={props => <List.Icon {...props} icon="folder" />}>
 *         <List.Item title="First item" />
 *         <List.Item title="Second item" />
 *       </List.Accordion>
 *
 *       <List.Accordion
 *         title="Controlled Accordion"
 *         left={props => <List.Icon {...props} icon="folder" />}
 *         expanded={expanded}
 *         onPress={handlePress}>
 *         <List.Item title="First item" />
 *         <List.Item title="Second item" />
 *       </List.Accordion>
 *     </List.Section>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */
const ListAccordion = ({
  left,
  right,
  title,
  description,
  children,
  theme,
  titleStyle,
  descriptionStyle,
  titleNumberOfLines = 1,
  descriptionNumberOfLines = 2,
  style,
  id,
  testID,
  onPress,
  onLongPress,
  expanded: expandedProp,
  accessibilityLabel
}) => {
  const [expanded, setExpanded] = React.useState(expandedProp || false);

  const handlePressAction = () => {
    onPress === null || onPress === void 0 ? void 0 : onPress();

    if (expandedProp === undefined) {
      // Only update state of the `expanded` prop was not passed
      // If it was passed, the component will act as a controlled component
      setExpanded(expanded => !expanded);
    }
  };

  const titleColor = (0, _color.default)(theme.colors.text).alpha(0.87).rgb().string();
  const descriptionColor = (0, _color.default)(theme.colors.text).alpha(0.54).rgb().string();
  const expandedInternal = expandedProp !== undefined ? expandedProp : expanded;
  const groupContext = React.useContext(_ListAccordionGroup.ListAccordionGroupContext);

  if (groupContext !== null && !id) {
    throw new Error('List.Accordion is used inside a List.AccordionGroup without specifying an id prop.');
  }

  const isExpanded = groupContext ? groupContext.expandedId === id : expandedInternal;
  const handlePress = groupContext && id !== undefined ? () => groupContext.onAccordionPress(id) : handlePressAction;
  return /*#__PURE__*/React.createElement(_reactNative.View, null, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: {
      backgroundColor: theme.colors.background
    }
  }, /*#__PURE__*/React.createElement(_TouchableRipple.default, {
    style: [styles.container, style],
    onPress: handlePress,
    onLongPress: onLongPress // @ts-expect-error We keep old a11y props for backwards compat with old RN versions
    ,
    accessibilityTraits: "button",
    accessibilityComponentType: "button",
    accessibilityRole: "button",
    accessibilityState: {
      expanded: isExpanded
    },
    accessibilityLabel: accessibilityLabel,
    testID: testID,
    delayPressIn: 0,
    borderless: true
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: styles.row,
    pointerEvents: "none"
  }, left ? left({
    color: isExpanded ? theme.colors.primary : descriptionColor
  }) : null, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.item, styles.content]
  }, /*#__PURE__*/React.createElement(_Text.default, {
    selectable: false,
    numberOfLines: titleNumberOfLines,
    style: [styles.title, {
      color: isExpanded ? theme.colors.primary : titleColor
    }, titleStyle]
  }, title), description ? /*#__PURE__*/React.createElement(_Text.default, {
    selectable: false,
    numberOfLines: descriptionNumberOfLines,
    style: [styles.description, {
      color: descriptionColor
    }, descriptionStyle]
  }, description) : null), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.item, description ? styles.multiline : undefined]
  }, right ? right({
    isExpanded: isExpanded
  }) : /*#__PURE__*/React.createElement(_MaterialCommunityIcon.default, {
    name: isExpanded ? 'chevron-up' : 'chevron-down',
    color: titleColor,
    size: 24,
    direction: _reactNative.I18nManager.isRTL ? 'rtl' : 'ltr'
  }))))), isExpanded ? React.Children.map(children, child => {
    if (left && /*#__PURE__*/React.isValidElement(child) && !child.props.left && !child.props.right) {
      return /*#__PURE__*/React.cloneElement(child, {
        style: [styles.child, child.props.style]
      });
    }

    return child;
  }) : null);
};

ListAccordion.displayName = 'List.Accordion';

const styles = _reactNative.StyleSheet.create({
  container: {
    padding: 8
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  multiline: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 16
  },
  description: {
    fontSize: 14
  },
  item: {
    margin: 8
  },
  child: {
    paddingLeft: 64
  },
  content: {
    flex: 1,
    justifyContent: 'center'
  }
});

var _default = (0, _theming.withTheme)(ListAccordion);

exports.default = _default;
//# sourceMappingURL=ListAccordion.js.map