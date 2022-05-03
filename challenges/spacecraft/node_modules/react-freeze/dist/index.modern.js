import React, { Suspense, useRef, Fragment } from 'react';

function Suspender(_ref) {
  var freeze = _ref.freeze,
      children = _ref.children;
  var promiseCache = useRef({}).current;

  if (freeze && !promiseCache.promise) {
    promiseCache.promise = new Promise(function (res) {
      promiseCache.resolve = res;
    });
    throw promiseCache.promise;
  } else if (freeze) {
    throw promiseCache.promise;
  } else if (promiseCache.promise) {
    promiseCache.resolve();
    promiseCache.promise = undefined;
  }

  return React.createElement(Fragment, null, children);
}

function Freeze(_ref2) {
  var freeze = _ref2.freeze,
      children = _ref2.children,
      _ref2$placeholder = _ref2.placeholder,
      placeholder = _ref2$placeholder === void 0 ? null : _ref2$placeholder;
  return React.createElement(Suspense, {
    fallback: placeholder
  }, React.createElement(Suspender, {
    freeze: freeze
  }, children));
}

export { Freeze };
//# sourceMappingURL=index.modern.js.map
