import { isReference, isField, DeepMerger, resultKeyNameFromField, shouldInclude, isNonNullObject, compact, } from "../../utilities/index.js";
export var hasOwn = Object.prototype.hasOwnProperty;
export function defaultDataIdFromObject(_a, context) {
    var __typename = _a.__typename, id = _a.id, _id = _a._id;
    if (typeof __typename === "string") {
        if (context) {
            context.keyObject =
                id !== void 0 ? { id: id } :
                    _id !== void 0 ? { _id: _id } :
                        void 0;
        }
        if (id === void 0)
            id = _id;
        if (id !== void 0) {
            return "".concat(__typename, ":").concat((typeof id === "number" ||
                typeof id === "string") ? id : JSON.stringify(id));
        }
    }
}
var defaultConfig = {
    dataIdFromObject: defaultDataIdFromObject,
    addTypename: true,
    resultCaching: true,
    canonizeResults: false,
};
export function normalizeConfig(config) {
    return compact(defaultConfig, config);
}
export function shouldCanonizeResults(config) {
    var value = config.canonizeResults;
    return value === void 0 ? defaultConfig.canonizeResults : value;
}
export function getTypenameFromStoreObject(store, objectOrReference) {
    return isReference(objectOrReference)
        ? store.get(objectOrReference.__ref, "__typename")
        : objectOrReference && objectOrReference.__typename;
}
export var TypeOrFieldNameRegExp = /^[_a-z][_0-9a-z]*/i;
export function fieldNameFromStoreName(storeFieldName) {
    var match = storeFieldName.match(TypeOrFieldNameRegExp);
    return match ? match[0] : storeFieldName;
}
export function selectionSetMatchesResult(selectionSet, result, variables) {
    if (isNonNullObject(result)) {
        return isArray(result)
            ? result.every(function (item) { return selectionSetMatchesResult(selectionSet, item, variables); })
            : selectionSet.selections.every(function (field) {
                if (isField(field) && shouldInclude(field, variables)) {
                    var key = resultKeyNameFromField(field);
                    return hasOwn.call(result, key) &&
                        (!field.selectionSet ||
                            selectionSetMatchesResult(field.selectionSet, result[key], variables));
                }
                return true;
            });
    }
    return false;
}
export function storeValueIsStoreObject(value) {
    return isNonNullObject(value) &&
        !isReference(value) &&
        !isArray(value);
}
export function makeProcessedFieldsMerger() {
    return new DeepMerger;
}
export var isArray = function (a) { return Array.isArray(a); };
//# sourceMappingURL=helpers.js.map