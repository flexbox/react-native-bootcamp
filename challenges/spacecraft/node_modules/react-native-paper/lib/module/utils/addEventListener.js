export function addEventListener(Module) {
  var _Module$addEventListe;

  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  const [eventName, handler] = rest;
  let removed = false;
  const subscription = (_Module$addEventListe = Module.addEventListener(eventName, handler)) !== null && _Module$addEventListe !== void 0 ? _Module$addEventListe : {
    remove: () => {
      if (removed) {
        return;
      }

      Module.removeEventListener(eventName, handler);
      removed = true;
    }
  };
  return subscription;
}
export function addListener(Module) {
  var _Module$addListener;

  for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    rest[_key2 - 1] = arguments[_key2];
  }

  const [eventName, handler] = rest;
  let removed = false;
  const subscription = (_Module$addListener = Module.addListener(eventName, handler)) !== null && _Module$addListener !== void 0 ? _Module$addListener : {
    remove: () => {
      if (removed) {
        return;
      }

      Module.removeEventListener(eventName, handler);
      removed = true;
    }
  };
  return subscription;
}
//# sourceMappingURL=addEventListener.js.map