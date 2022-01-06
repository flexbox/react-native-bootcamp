import color from 'color';
import * as React from 'react';
import { View, StyleSheet, I18nManager } from 'react-native';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
import MaterialCommunityIcon from '../MaterialCommunityIcon';
import Text from '../Typography/Text';
import { withTheme } from '../../core/theming';
import { ListAccordionGroupContext } from './ListAccordionGroup';

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

  const titleColor = color(theme.colors.text).alpha(0.87).rgb().string();
  const descriptionColor = color(theme.colors.text).alpha(0.54).rgb().string();
  const expandedInternal = expandedProp !== undefined ? expandedProp : expanded;
  const groupContext = React.useContext(ListAccordionGroupContext);

  if (groupContext !== null && !id) {
    throw new Error('List.Accordion is used inside a List.AccordionGroup without specifying an id prop.');
  }

  const isExpanded = groupContext ? groupContext.expandedId === id : expandedInternal;
  const handlePress = groupContext && id !== undefined ? () => groupContext.onAccordionPress(id) : handlePressAction;
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(View, {
    style: {
      backgroundColor: theme.colors.background
    }
  }, /*#__PURE__*/React.createElement(TouchableRipple, {
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
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.row,
    pointerEvents: "none"
  }, left ? left({
    color: isExpanded ? theme.colors.primary : descriptionColor
  }) : null, /*#__PURE__*/React.createElement(View, {
    style: [styles.item, styles.content]
  }, /*#__PURE__*/React.createElement(Text, {
    selectable: false,
    numberOfLines: titleNumberOfLines,
    style: [styles.title, {
      color: isExpanded ? theme.colors.primary : titleColor
    }, titleStyle]
  }, title), description ? /*#__PURE__*/React.createElement(Text, {
    selectable: false,
    numberOfLines: descriptionNumberOfLines,
    style: [styles.description, {
      color: descriptionColor
    }, descriptionStyle]
  }, description) : null), /*#__PURE__*/React.createElement(View, {
    style: [styles.item, description ? styles.multiline : undefined]
  }, right ? right({
    isExpanded: isExpanded
  }) : /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
    name: isExpanded ? 'chevron-up' : 'chevron-down',
    color: titleColor,
    size: 24,
    direction: I18nManager.isRTL ? 'rtl' : 'ltr'
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
const styles = StyleSheet.create({
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
export default withTheme(ListAccordion);
//# sourceMappingURL=ListAccordion.js.map