"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findPodfilePath;

function _fs() {
  const data = _interopRequireDefault(require("fs"));

  _fs = function () {
    return data;
  };

  return data;
}

function _glob() {
  const data = _interopRequireDefault(require("glob"));

  _glob = function () {
    return data;
  };

  return data;
}

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
function findPodfilePath(folder, projectFolder) {
  const podFilePath = _path().default.join(projectFolder, '..', 'Podfile');

  if (_fs().default.existsSync(podFilePath)) {
    return podFilePath;
  }

  const podfiles = _glob().default.sync('**/Podfile', {
    cwd: folder,
    ignore: 'node_modules/**'
  });

  if (podfiles.length > 0) {
    return _path().default.join(folder, podfiles[0]);
  }

  return null;
}

//# sourceMappingURL=findPodfilePath.js.map