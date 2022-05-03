"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractPathFromURL;

var _escapeStringRegexp = _interopRequireDefault(require("escape-string-regexp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function extractPathFromURL(prefixes, url) {
  for (const prefix of prefixes) {
    var _prefix$match$, _prefix$match;

    const protocol = (_prefix$match$ = (_prefix$match = prefix.match(/^[^:]+:/)) === null || _prefix$match === void 0 ? void 0 : _prefix$match[0]) !== null && _prefix$match$ !== void 0 ? _prefix$match$ : '';
    const host = prefix.replace(new RegExp(`^${(0, _escapeStringRegexp.default)(protocol)}`), '').replace(/\/+/g, '/') // Replace multiple slash (//) with single ones
    .replace(/^\//, ''); // Remove extra leading slash

    const prefixRegex = new RegExp(`^${(0, _escapeStringRegexp.default)(protocol)}(/)*${host.split('.').map(it => it === '*' ? '[^/]+' : (0, _escapeStringRegexp.default)(it)).join('\\.')}`);
    const normalizedURL = url.replace(/\/+/g, '/');

    if (prefixRegex.test(normalizedURL)) {
      return normalizedURL.replace(prefixRegex, '');
    }
  }

  return undefined;
}
//# sourceMappingURL=extractPathFromURL.js.map