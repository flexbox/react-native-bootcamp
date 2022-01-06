import * as React from 'react';
import { AccessibilityInfo, Appearance } from 'react-native';
import { ThemeProvider } from './theming';
import { Provider as SettingsProvider } from './settings';
import MaterialCommunityIcon from '../components/MaterialCommunityIcon';
import PortalHost from '../components/Portal/PortalHost';
import DefaultTheme from '../styles/DefaultTheme';
import DarkTheme from '../styles/DarkTheme';

const Provider = ({ ...props
}) => {
  const colorSchemeName = !props.theme && (Appearance === null || Appearance === void 0 ? void 0 : Appearance.getColorScheme()) || 'light';
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
      subscription = AccessibilityInfo.addEventListener('reduceMotionChanged', setReduceMotionEnabled);
    }

    return () => {
      if (!props.theme) {
        var _subscription;

        if ((_subscription = subscription) !== null && _subscription !== void 0 && _subscription.remove) {
          subscription.remove();
        } else {
          AccessibilityInfo.removeEventListener('reduceMotionChanged', setReduceMotionEnabled);
        }
      }
    };
  }, [props.theme]);
  React.useEffect(() => {
    let appearanceSubscription;

    if (!props.theme) {
      appearanceSubscription = Appearance === null || Appearance === void 0 ? void 0 : Appearance.addChangeListener(handleAppearanceChange);
    }

    return () => {
      if (!props.theme) {
        if (appearanceSubscription) {
          appearanceSubscription.remove();
        } else {
          Appearance === null || Appearance === void 0 ? void 0 : Appearance.removeChangeListener(handleAppearanceChange);
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
      const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;
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
  return /*#__PURE__*/React.createElement(PortalHost, null, /*#__PURE__*/React.createElement(SettingsProvider, {
    value: settings || {
      icon: MaterialCommunityIcon
    }
  }, /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: getTheme()
  }, children)));
};

export default Provider;
//# sourceMappingURL=Provider.js.map