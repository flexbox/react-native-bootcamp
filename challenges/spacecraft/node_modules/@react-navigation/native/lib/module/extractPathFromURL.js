import escapeStringRegexp from 'escape-string-regexp';
export default function extractPathFromURL(prefixes, url) {
  for (const prefix of prefixes) {
    var _prefix$match$, _prefix$match;

    const protocol = (_prefix$match$ = (_prefix$match = prefix.match(/^[^:]+:/)) === null || _prefix$match === void 0 ? void 0 : _prefix$match[0]) !== null && _prefix$match$ !== void 0 ? _prefix$match$ : '';
    const host = prefix.replace(new RegExp(`^${escapeStringRegexp(protocol)}`), '').replace(/\/+/g, '/') // Replace multiple slash (//) with single ones
    .replace(/^\//, ''); // Remove extra leading slash

    const prefixRegex = new RegExp(`^${escapeStringRegexp(protocol)}(/)*${host.split('.').map(it => it === '*' ? '[^/]+' : escapeStringRegexp(it)).join('\\.')}`);
    const normalizedURL = url.replace(/\/+/g, '/');

    if (prefixRegex.test(normalizedURL)) {
      return normalizedURL.replace(prefixRegex, '');
    }
  }

  return undefined;
}
//# sourceMappingURL=extractPathFromURL.js.map