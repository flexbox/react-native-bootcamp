"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Assets: true,
  Background: true,
  getDefaultHeaderHeight: true,
  getHeaderTitle: true,
  Header: true,
  HeaderBackButton: true,
  HeaderBackContext: true,
  HeaderBackground: true,
  HeaderHeightContext: true,
  HeaderShownContext: true,
  HeaderTitle: true,
  useHeaderHeight: true,
  MissingIcon: true,
  PlatformPressable: true,
  ResourceSavingView: true,
  SafeAreaProviderCompat: true,
  Screen: true
};
exports.Assets = void 0;
Object.defineProperty(exports, "Background", {
  enumerable: true,
  get: function () {
    return _Background.default;
  }
});
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function () {
    return _Header.default;
  }
});
Object.defineProperty(exports, "HeaderBackButton", {
  enumerable: true,
  get: function () {
    return _HeaderBackButton.default;
  }
});
Object.defineProperty(exports, "HeaderBackContext", {
  enumerable: true,
  get: function () {
    return _HeaderBackContext.default;
  }
});
Object.defineProperty(exports, "HeaderBackground", {
  enumerable: true,
  get: function () {
    return _HeaderBackground.default;
  }
});
Object.defineProperty(exports, "HeaderHeightContext", {
  enumerable: true,
  get: function () {
    return _HeaderHeightContext.default;
  }
});
Object.defineProperty(exports, "HeaderShownContext", {
  enumerable: true,
  get: function () {
    return _HeaderShownContext.default;
  }
});
Object.defineProperty(exports, "HeaderTitle", {
  enumerable: true,
  get: function () {
    return _HeaderTitle.default;
  }
});
Object.defineProperty(exports, "MissingIcon", {
  enumerable: true,
  get: function () {
    return _MissingIcon.default;
  }
});
Object.defineProperty(exports, "PlatformPressable", {
  enumerable: true,
  get: function () {
    return _PlatformPressable.default;
  }
});
Object.defineProperty(exports, "ResourceSavingView", {
  enumerable: true,
  get: function () {
    return _ResourceSavingView.default;
  }
});
Object.defineProperty(exports, "SafeAreaProviderCompat", {
  enumerable: true,
  get: function () {
    return _SafeAreaProviderCompat.default;
  }
});
Object.defineProperty(exports, "Screen", {
  enumerable: true,
  get: function () {
    return _Screen.default;
  }
});
Object.defineProperty(exports, "getDefaultHeaderHeight", {
  enumerable: true,
  get: function () {
    return _getDefaultHeaderHeight.default;
  }
});
Object.defineProperty(exports, "getHeaderTitle", {
  enumerable: true,
  get: function () {
    return _getHeaderTitle.default;
  }
});
Object.defineProperty(exports, "useHeaderHeight", {
  enumerable: true,
  get: function () {
    return _useHeaderHeight.default;
  }
});

var _Background = _interopRequireDefault(require("./Background"));

var _getDefaultHeaderHeight = _interopRequireDefault(require("./Header/getDefaultHeaderHeight"));

var _getHeaderTitle = _interopRequireDefault(require("./Header/getHeaderTitle"));

var _Header = _interopRequireDefault(require("./Header/Header"));

var _HeaderBackButton = _interopRequireDefault(require("./Header/HeaderBackButton"));

var _HeaderBackContext = _interopRequireDefault(require("./Header/HeaderBackContext"));

var _HeaderBackground = _interopRequireDefault(require("./Header/HeaderBackground"));

var _HeaderHeightContext = _interopRequireDefault(require("./Header/HeaderHeightContext"));

var _HeaderShownContext = _interopRequireDefault(require("./Header/HeaderShownContext"));

var _HeaderTitle = _interopRequireDefault(require("./Header/HeaderTitle"));

var _useHeaderHeight = _interopRequireDefault(require("./Header/useHeaderHeight"));

var _MissingIcon = _interopRequireDefault(require("./MissingIcon"));

var _PlatformPressable = _interopRequireDefault(require("./PlatformPressable"));

var _ResourceSavingView = _interopRequireDefault(require("./ResourceSavingView"));

var _SafeAreaProviderCompat = _interopRequireDefault(require("./SafeAreaProviderCompat"));

var _Screen = _interopRequireDefault(require("./Screen"));

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Assets = [// eslint-disable-next-line import/no-commonjs
require('./assets/back-icon.png'), // eslint-disable-next-line import/no-commonjs
require('./assets/back-icon-mask.png')];
exports.Assets = Assets;
//# sourceMappingURL=index.js.map