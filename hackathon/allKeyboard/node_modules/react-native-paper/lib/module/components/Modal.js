import * as React from 'react';
import { Animated, BackHandler, Easing, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import Surface from './Surface';
import { useTheme } from '../core/theming';
import useAnimatedValue from '../utils/useAnimatedValue';
const DEFAULT_DURATION = 220;
const TOP_INSET = getStatusBarHeight(true);
const BOTTOM_INSET = getBottomSpace();
/**
 * The Modal component is a simple way to present content above an enclosing view.
 * To render the `Modal` above other components, you'll need to wrap it with the [`Portal`](portal.html) component.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/modal.gif" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(false);
 *
 *   const showModal = () => setVisible(true);
 *   const hideModal = () => setVisible(false);
 *   const containerStyle = {backgroundColor: 'white', padding: 20};
 *
 *   return (
 *     <Provider>
 *       <Portal>
 *         <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
 *           <Text>Example Modal.  Click outside this area to dismiss.</Text>
 *         </Modal>
 *       </Portal>
 *       <Button style={{marginTop: 30}} onPress={showModal}>
 *         Show
 *       </Button>
 *     </Provider>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */

export default function Modal({
  dismissable = true,
  visible = false,
  overlayAccessibilityLabel = 'Close modal',
  onDismiss,
  children,
  contentContainerStyle,
  style
}) {
  const visibleRef = React.useRef(visible);
  React.useEffect(() => {
    visibleRef.current = visible;
  });
  const {
    colors,
    animation
  } = useTheme();
  const opacity = useAnimatedValue(visible ? 1 : 0);
  const [rendered, setRendered] = React.useState(visible);

  if (visible && !rendered) {
    setRendered(true);
  }

  const handleBack = () => {
    if (dismissable) {
      hideModal();
    }

    return true;
  };

  const subscription = React.useRef(undefined);

  const showModal = () => {
    var _subscription$current;

    if ((_subscription$current = subscription.current) !== null && _subscription$current !== void 0 && _subscription$current.remove) {
      subscription.current.remove();
    } else {
      BackHandler.removeEventListener('hardwareBackPress', handleBack);
    }

    subscription.current = BackHandler.addEventListener('hardwareBackPress', handleBack);
    const {
      scale
    } = animation;
    Animated.timing(opacity, {
      toValue: 1,
      duration: scale * DEFAULT_DURATION,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true
    }).start();
  };

  const hideModal = () => {
    var _subscription$current2;

    if ((_subscription$current2 = subscription.current) !== null && _subscription$current2 !== void 0 && _subscription$current2.remove) {
      var _subscription$current3;

      (_subscription$current3 = subscription.current) === null || _subscription$current3 === void 0 ? void 0 : _subscription$current3.remove();
    } else {
      BackHandler.removeEventListener('hardwareBackPress', handleBack);
    }

    const {
      scale
    } = animation;
    Animated.timing(opacity, {
      toValue: 0,
      duration: scale * DEFAULT_DURATION,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true
    }).start(({
      finished
    }) => {
      if (!finished) {
        return;
      }

      if (visible && onDismiss) {
        onDismiss();
      }

      if (visibleRef.current) {
        showModal();
      } else {
        setRendered(false);
      }
    });
  };

  const prevVisible = React.useRef(null);
  React.useEffect(() => {
    if (prevVisible.current !== visible) {
      if (visible) {
        showModal();
      } else {
        hideModal();
      }
    }

    prevVisible.current = visible;
  });
  if (!rendered) return null;
  return /*#__PURE__*/React.createElement(Animated.View, {
    pointerEvents: visible ? 'auto' : 'none',
    accessibilityViewIsModal: true,
    accessibilityLiveRegion: "polite",
    style: StyleSheet.absoluteFill,
    onAccessibilityEscape: hideModal
  }, /*#__PURE__*/React.createElement(TouchableWithoutFeedback, {
    accessibilityLabel: overlayAccessibilityLabel,
    accessibilityRole: "button",
    disabled: !dismissable,
    onPress: dismissable ? hideModal : undefined,
    importantForAccessibility: "no"
  }, /*#__PURE__*/React.createElement(Animated.View, {
    style: [styles.backdrop, {
      backgroundColor: colors.backdrop,
      opacity
    }]
  })), /*#__PURE__*/React.createElement(View, {
    style: [styles.wrapper, {
      marginTop: TOP_INSET,
      marginBottom: BOTTOM_INSET
    }, style],
    pointerEvents: "box-none"
  }, /*#__PURE__*/React.createElement(Surface, {
    style: [{
      opacity
    }, styles.content, contentContainerStyle]
  }, children)));
}
const styles = StyleSheet.create({
  backdrop: {
    flex: 1
  },
  wrapper: { ...StyleSheet.absoluteFillObject,
    justifyContent: 'center'
  },
  content: {
    backgroundColor: 'transparent',
    justifyContent: 'center'
  }
});
//# sourceMappingURL=Modal.js.map