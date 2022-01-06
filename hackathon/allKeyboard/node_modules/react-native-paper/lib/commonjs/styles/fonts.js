"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureFonts;

var _reactNative = require("react-native");

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: '400'
    },
    medium: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: '500'
    },
    light: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: '300'
    },
    thin: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: '100'
    }
  },
  ios: {
    regular: {
      fontFamily: 'System',
      fontWeight: '400'
    },
    medium: {
      fontFamily: 'System',
      fontWeight: '500'
    },
    light: {
      fontFamily: 'System',
      fontWeight: '300'
    },
    thin: {
      fontFamily: 'System',
      fontWeight: '100'
    }
  },
  default: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal'
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal'
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal'
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal'
    }
  }
};

function configureFonts(config) {
  const fonts = _reactNative.Platform.select({ ...fontConfig,
    ...config
  });

  return fonts;
}
//# sourceMappingURL=fonts.js.map