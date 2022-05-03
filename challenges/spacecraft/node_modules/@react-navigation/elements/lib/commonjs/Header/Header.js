"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeSafeAreaContext = require("react-native-safe-area-context");

var _getDefaultHeaderHeight = _interopRequireDefault(require("./getDefaultHeaderHeight"));

var _HeaderBackground = _interopRequireDefault(require("./HeaderBackground"));

var _HeaderShownContext = _interopRequireDefault(require("./HeaderShownContext"));

var _HeaderTitle = _interopRequireDefault(require("./HeaderTitle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const warnIfHeaderStylesDefined = styles => {
  Object.keys(styles).forEach(styleProp => {
    const value = styles[styleProp];

    if (styleProp === 'position' && value === 'absolute') {
      console.warn("position: 'absolute' is not supported on headerStyle. If you would like to render content under the header, use the 'headerTransparent' option.");
    } else if (value !== undefined) {
      console.warn(`${styleProp} was given a value of ${value}, this has no effect on headerStyle.`);
    }
  });
};

function Header(props) {
  const insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)();
  const frame = (0, _reactNativeSafeAreaContext.useSafeAreaFrame)();
  const isParentHeaderShown = React.useContext(_HeaderShownContext.default);
  const {
    layout = frame,
    modal = false,
    title,
    headerTitle: customTitle,
    headerTitleAlign = _reactNative.Platform.select({
      ios: 'center',
      default: 'left'
    }),
    headerLeft,
    headerLeftLabelVisible,
    headerTransparent,
    headerTintColor,
    headerBackground,
    headerRight,
    headerTitleAllowFontScaling: titleAllowFontScaling,
    headerTitleStyle: titleStyle,
    headerLeftContainerStyle: leftContainerStyle,
    headerRightContainerStyle: rightContainerStyle,
    headerTitleContainerStyle: titleContainerStyle,
    headerBackgroundContainerStyle: backgroundContainerStyle,
    headerStyle: customHeaderStyle,
    headerShadowVisible,
    headerPressColor,
    headerPressOpacity,
    headerStatusBarHeight = isParentHeaderShown ? 0 : insets.top
  } = props;
  const defaultHeight = (0, _getDefaultHeaderHeight.default)(layout, modal, headerStatusBarHeight);

  const {
    height = defaultHeight,
    minHeight,
    maxHeight,
    backgroundColor,
    borderBottomColor,
    borderBottomEndRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderBottomStartRadius,
    borderBottomWidth,
    borderColor,
    borderEndColor,
    borderEndWidth,
    borderLeftColor,
    borderLeftWidth,
    borderRadius,
    borderRightColor,
    borderRightWidth,
    borderStartColor,
    borderStartWidth,
    borderStyle,
    borderTopColor,
    borderTopEndRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderTopStartRadius,
    borderTopWidth,
    borderWidth,
    // @ts-expect-error: web support for shadow
    boxShadow,
    elevation,
    shadowColor,
    shadowOffset,
    shadowOpacity,
    shadowRadius,
    opacity,
    transform,
    ...unsafeStyles
  } = _reactNative.StyleSheet.flatten(customHeaderStyle || {});

  if (process.env.NODE_ENV !== 'production') {
    warnIfHeaderStylesDefined(unsafeStyles);
  }

  const safeStyles = {
    backgroundColor,
    borderBottomColor,
    borderBottomEndRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderBottomStartRadius,
    borderBottomWidth,
    borderColor,
    borderEndColor,
    borderEndWidth,
    borderLeftColor,
    borderLeftWidth,
    borderRadius,
    borderRightColor,
    borderRightWidth,
    borderStartColor,
    borderStartWidth,
    borderStyle,
    borderTopColor,
    borderTopEndRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderTopStartRadius,
    borderTopWidth,
    borderWidth,
    // @ts-expect-error: boxShadow is only for Web
    boxShadow,
    elevation,
    shadowColor,
    shadowOffset,
    shadowOpacity,
    shadowRadius,
    opacity,
    transform
  }; // Setting a property to undefined triggers default style
  // So we need to filter them out
  // Users can use `null` instead

  for (const styleProp in safeStyles) {
    // @ts-expect-error: typescript wrongly complains that styleProp cannot be used to index safeStyles
    if (safeStyles[styleProp] === undefined) {
      // @ts-expect-error
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete safeStyles[styleProp];
    }
  }

  const backgroundStyle = [safeStyles, headerShadowVisible === false && {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0
  }];
  const leftButton = headerLeft ? headerLeft({
    tintColor: headerTintColor,
    pressColor: headerPressColor,
    pressOpacity: headerPressOpacity,
    labelVisible: headerLeftLabelVisible
  }) : null;
  const rightButton = headerRight ? headerRight({
    tintColor: headerTintColor,
    pressColor: headerPressColor,
    pressOpacity: headerPressOpacity
  }) : null;
  const headerTitle = typeof customTitle !== 'function' ? props => /*#__PURE__*/React.createElement(_HeaderTitle.default, props) : customTitle;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    pointerEvents: "box-none",
    style: [_reactNative.StyleSheet.absoluteFill, {
      zIndex: 0
    }, backgroundContainerStyle]
  }, headerBackground ? headerBackground({
    style: backgroundStyle
  }) : headerTransparent ? null : /*#__PURE__*/React.createElement(_HeaderBackground.default, {
    style: backgroundStyle
  })), /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    pointerEvents: "box-none",
    style: [{
      height,
      minHeight,
      maxHeight,
      opacity,
      transform
    }]
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    pointerEvents: "none",
    style: {
      height: headerStatusBarHeight
    }
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    pointerEvents: "box-none",
    style: styles.content
  }, /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    pointerEvents: "box-none",
    style: [styles.left, headerTitleAlign === 'center' && styles.expand, {
      marginStart: insets.left
    }, leftContainerStyle]
  }, leftButton), /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    pointerEvents: "box-none",
    style: [styles.title, {
      // Avoid the title from going offscreen or overlapping buttons
      maxWidth: headerTitleAlign === 'center' ? layout.width - ((leftButton ? headerLeftLabelVisible !== false ? 80 : 32 : 16) + Math.max(insets.left, insets.right)) * 2 : layout.width - ((leftButton ? 72 : 16) + (rightButton ? 72 : 16) + insets.left - insets.right)
    }, titleContainerStyle]
  }, headerTitle({
    children: title,
    allowFontScaling: titleAllowFontScaling,
    tintColor: headerTintColor,
    style: titleStyle
  })), /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    pointerEvents: "box-none",
    style: [styles.right, styles.expand, {
      marginEnd: insets.right
    }, rightContainerStyle]
  }, rightButton))));
}

const styles = _reactNative.StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  title: {
    marginHorizontal: 16,
    justifyContent: 'center'
  },
  left: {
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  right: {
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  expand: {
    flexGrow: 1,
    flexBasis: 0
  }
});
//# sourceMappingURL=Header.js.map