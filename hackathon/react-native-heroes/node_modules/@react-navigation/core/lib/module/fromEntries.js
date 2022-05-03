// Object.fromEntries is not available in older iOS versions
export default function fromEntries(entries) {
  return entries.reduce((acc, _ref) => {
    let [k, v] = _ref;

    if (acc.hasOwnProperty(k)) {
      throw new Error(`A value for key '${k}' already exists in the object.`);
    }

    acc[k] = v;
    return acc;
  }, {});
}
//# sourceMappingURL=fromEntries.js.map