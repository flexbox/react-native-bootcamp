function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { withTheme } from '../../core/theming';
import { grey200 } from '../../styles/colors';

/**
 * A component to show a cover image inside a Card.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/card-cover.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Card } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 *
 * @extends Image props https://reactnative.dev/docs/image#props
 */
const CardCover = _ref => {
  let {
    index,
    total,
    style,
    theme,
    ...rest
  } = _ref;
  const {
    roundness
  } = theme;
  let coverStyle;

  if (index === 0) {
    if (total === 1) {
      coverStyle = {
        borderRadius: roundness
      };
    } else {
      coverStyle = {
        borderTopLeftRadius: roundness,
        borderTopRightRadius: roundness
      };
    }
  } else if (typeof total === 'number' && index === total - 1) {
    coverStyle = {
      borderBottomLeftRadius: roundness
    };
  }

  return /*#__PURE__*/React.createElement(View, {
    style: [styles.container, coverStyle, style]
  }, /*#__PURE__*/React.createElement(Image, _extends({}, rest, {
    style: [styles.image, coverStyle]
  })));
};

CardCover.displayName = 'Card.Cover';
const styles = StyleSheet.create({
  container: {
    height: 195,
    backgroundColor: grey200,
    overflow: 'hidden'
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
    padding: 16,
    justifyContent: 'flex-end'
  }
});
export default withTheme(CardCover); // @component-docs ignore-next-line

export { CardCover };
//# sourceMappingURL=CardCover.js.map