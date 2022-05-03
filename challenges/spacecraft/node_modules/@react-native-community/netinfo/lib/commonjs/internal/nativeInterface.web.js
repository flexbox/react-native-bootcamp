"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

var _nativeModule = _interopRequireDefault(require("./nativeModule"));

var _privateTypes = require("./privateTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
const nativeEventEmitter = new _reactNative.NativeEventEmitter(); // Listen to connectivity events

_nativeModule.default.addListener(_privateTypes.DEVICE_CONNECTIVITY_EVENT, event => {
  nativeEventEmitter.emit(_privateTypes.DEVICE_CONNECTIVITY_EVENT, event);
});

var _default = { ..._nativeModule.default,
  eventEmitter: nativeEventEmitter
};
exports.default = _default;
//# sourceMappingURL=nativeInterface.web.js.map