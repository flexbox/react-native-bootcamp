"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _theming = require("./theming");

var _settings = require("./settings");

var _MaterialCommunityIcon = _interopRequireDefault(require("../components/MaterialCommunityIcon"));

var _PortalHost = _interopRequireDefault(require("../components/Portal/PortalHost"));

var _DefaultTheme = _interopRequireDefault(require("../styles/DefaultTheme"));

var _DarkTheme = _interopRequireDefault(require("../styles/DarkTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Provider = ({ ...props
}) => {
  const colorSchemeName = !props.theme && (_reactNative.Appearance === null || _reactNative.Appearance === void 0 ? void 0 : _reactNative.Appearance.getColorScheme()) || 'light';
  const [reduceMotionEnabled, setReduceMotionEnabled] = React.useState(false);
  const [colorScheme, setColorScheme] = React.useState(colorSchemeName);

  const handleAppearanceChange = preferences => {
    const {
      colorScheme
    } = preferences;
    setColorScheme(colorScheme);
  };

  React.useEffect(() => {
    let subscription;

    if (!props.theme) {
      subscription = _reactNative.AccessibilityInfo.addEventListener('reduceMotionChanged', setReduceMotionEnabled);
    }

    return () => {
      if (!props.theme) {
        var _subscription;

        if ((_subscription = subscription) !== null && _subscription !== void 0 && _subscription.remove) {
          subscription.remove();
        } else {
          _reactNative.AccessibilityInfo.removeEventListener('reduceMotionChanged', setReduceMotionEnabled);
        }
      }
    };
  }, [props.theme]);
  React.useEffect(() => {
    let appearanceSubscription;

    if (!props.theme) {
      appearanceSubscription = _reactNative.Appearance === null || _reactNative.Appearance === void 0 ? void 0 : _reactNative.Appearance.addChangeListener(handleAppearanceChange);
    }

    return () => {
      if (!props.theme) {
        if (appearanceSubscription) {
          appearanceSubscription.remove();
        } else {
          _reactNative.Appearance === null || _reactNative.Appearance === void 0 ? void 0 : _reactNative.Appearance.removeChangeListener(handleAppearanceChange);
        }
      }
    };
  }, [props.theme]);

  const getTheme = () => {
    const {
      theme: providedTheme
    } = props;

    if (providedTheme) {
      return providedTheme;
    } else {
      const theme = colorScheme === 'dark' ? _DarkTheme.default : _DefaultTheme.default;
      return { ...theme,
        animation: { ...theme.animation,
          scale: reduceMotionEnabled ? 0 : 1
        }
      };
    }
  };

  const {
    children,
    settings
  } = props;
  return /*#__PURE__*/React.createElement(_PortalHost.default, null, /*#__PURE__*/React.createElement(_settings.Provider, {
    value: settings || {
      icon: _MaterialCommunityIcon.default
    }
  }, /*#__PURE__*/React.createElement(_theming.ThemeProvider, {
    theme: getTheme()
  }, children)));
};

var _default = Provider;
exports.default = _default;
//# sourceMappingURL=Provider.js.map