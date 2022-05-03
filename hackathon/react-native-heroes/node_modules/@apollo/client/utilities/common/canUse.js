export var canUseWeakMap = typeof WeakMap === 'function' && !(typeof navigator === 'object' &&
    navigator.product === 'ReactNative');
export var canUseWeakSet = typeof WeakSet === 'function';
export var canUseSymbol = typeof Symbol === 'function' &&
    typeof Symbol.for === 'function';
//# sourceMappingURL=canUse.js.map