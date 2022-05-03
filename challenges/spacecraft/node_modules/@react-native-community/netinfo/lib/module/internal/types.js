/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
export let NetInfoStateType;

(function (NetInfoStateType) {
  NetInfoStateType["unknown"] = "unknown";
  NetInfoStateType["none"] = "none";
  NetInfoStateType["cellular"] = "cellular";
  NetInfoStateType["wifi"] = "wifi";
  NetInfoStateType["bluetooth"] = "bluetooth";
  NetInfoStateType["ethernet"] = "ethernet";
  NetInfoStateType["wimax"] = "wimax";
  NetInfoStateType["vpn"] = "vpn";
  NetInfoStateType["other"] = "other";
})(NetInfoStateType || (NetInfoStateType = {}));

export let NetInfoCellularGeneration;

(function (NetInfoCellularGeneration) {
  NetInfoCellularGeneration["2g"] = "2g";
  NetInfoCellularGeneration["3g"] = "3g";
  NetInfoCellularGeneration["4g"] = "4g";
  NetInfoCellularGeneration["5g"] = "5g";
})(NetInfoCellularGeneration || (NetInfoCellularGeneration = {}));
//# sourceMappingURL=types.js.map