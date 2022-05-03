function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { StyleSheet, Animated, TouchableWithoutFeedback, View } from 'react-native';
import color from 'color';
import { white, black } from '../../styles/colors';
import CardContent from './CardContent';
import CardActions from './CardActions'; // eslint-disable-next-line @typescript-eslint/no-unused-vars

import CardCover from './CardCover'; // eslint-disable-next-line @typescript-eslint/no-unused-vars

import CardTitle from './CardTitle';
import Surface from '../Surface';
import { withTheme } from '../../core/theming';

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
const Card = _ref => {
  let {
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
  } = _ref;
  // Default animated value
  const {
    current: elevation
  } = React.useRef(new Animated.Value(cardElevation)); // Dark adaptive animated value, used in case of toggling the theme,
  // it prevents animating the background with native drivers inside Surface

  const {
    current: elevationDarkAdaptive
  } = React.useRef(new Animated.Value(cardElevation));
  const {
    animation,
    dark,
    mode,
    roundness
  } = theme;
  const prevDarkRef = React.useRef(dark);
  React.useEffect(() => {
    prevDarkRef.current = dark;
  });
  const prevDark = prevDarkRef.current;
  const isAdaptiveMode = mode === 'adaptive';
  const animationDuration = 150 * animation.scale;
  React.useEffect(() => {
    /**
     * Resets animations values if updating to dark adaptive mode,
     * otherwise, any card that is in the middle of animation while
     * toggling the theme will stay at that animated value until
     * the next press-in
     */
    if (dark && isAdaptiveMode && !prevDark) {
      elevation.setValue(cardElevation);
      elevationDarkAdaptive.setValue(cardElevation);
    }
  }, [prevDark, dark, isAdaptiveMode, cardElevation, elevation, elevationDarkAdaptive]);

  const runElevationAnimation = pressType => {
    const isPressTypeIn = pressType === 'in';

    if (dark && isAdaptiveMode) {
      Animated.timing(elevationDarkAdaptive, {
        toValue: isPressTypeIn ? 8 : cardElevation,
        duration: animationDuration,
        useNativeDriver: false
      }).start();
    } else {
      Animated.timing(elevation, {
        toValue: isPressTypeIn ? 8 : cardElevation,
        duration: animationDuration,
        useNativeDriver: true
      }).start();
    }
  };

  const handlePressIn = () => {
    runElevationAnimation('in');
  };

  const handlePressOut = () => {
    runElevationAnimation('out');
  };

  const total = React.Children.count(children);
  const siblings = React.Children.map(children, child => /*#__PURE__*/React.isValidElement(child) && child.type ? child.type.displayName : null);
  const borderColor = color(dark ? white : black).alpha(0.12).rgb().string();
  const computedElevation = dark && isAdaptiveMode ? elevationDarkAdaptive : elevation;
  return /*#__PURE__*/React.createElement(Surface, _extends({
    style: [{
      borderRadius: roundness,
      elevation: computedElevation,
      borderColor
    }, cardMode === 'outlined' ? styles.outlined : {}, style],
    theme: theme
  }, rest), /*#__PURE__*/React.createElement(TouchableWithoutFeedback, {
    delayPressIn: 0,
    disabled: !(onPress || onLongPress),
    onLongPress: onLongPress,
    onPress: onPress,
    onPressIn: onPress || onLongPress ? handlePressIn : undefined,
    onPressOut: onPress || onLongPress ? handlePressOut : undefined,
    testID: testID,
    accessible: accessible
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.innerContainer
  }, React.Children.map(children, (child, index) => /*#__PURE__*/React.isValidElement(child) ? /*#__PURE__*/React.cloneElement(child, {
    index,
    total,
    siblings
  }) : child))));
}; // @component ./CardContent.tsx


Card.Content = CardContent; // @component ./CardActions.tsx

Card.Actions = CardActions; // @component ./CardCover.tsx

Card.Cover = CardCover; // @component ./CardTitle.tsx

Card.Title = CardTitle;
const styles = StyleSheet.create({
  innerContainer: {
    flexGrow: 1,
    flexShrink: 1
  },
  outlined: {
    elevation: 0,
    borderWidth: 1
  }
});
export default withTheme(Card);
//# sourceMappingURL=Card.js.map