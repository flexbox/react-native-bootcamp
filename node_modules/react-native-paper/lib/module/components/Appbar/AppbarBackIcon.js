import * as React from 'react';
import { Platform, I18nManager, View, Image, StyleSheet } from 'react-native';
import MaterialCommunityIcon from '../MaterialCommunityIcon';

const AppbarBackIcon = ({
  size,
  color
}) => {
  const iosIconSize = size - 3;
  return Platform.OS === 'ios' ? /*#__PURE__*/React.createElement(View, {
    style: [styles.wrapper, {
      width: size,
      height: size,
      transform: [{
        scaleX: I18nManager.isRTL ? -1 : 1
      }]
    }]
  }, /*#__PURE__*/React.createElement(Image, {
    source: require('../../assets/back-chevron.png'),
    style: [styles.icon, {
      tintColor: color,
      width: iosIconSize,
      height: iosIconSize
    }]
  })) : /*#__PURE__*/React.createElement(MaterialCommunityIcon, {
    name: "arrow-left",
    color: color,
    size: size,
    direction: I18nManager.isRTL ? 'rtl' : 'ltr'
  });
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    resizeMode: 'contain'
  }
});
export default AppbarBackIcon; // @component-docs ignore-next-line

export { AppbarBackIcon };
//# sourceMappingURL=AppbarBackIcon.js.map