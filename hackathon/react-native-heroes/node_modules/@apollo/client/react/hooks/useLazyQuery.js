import { __assign } from "tslib";
import { useCallback, useMemo, useState } from 'react';
import { useQuery } from "./useQuery.js";
var EAGER_METHODS = [
    'refetch',
    'fetchMore',
    'updateQuery',
    'startPolling',
    'subscribeToMore',
];
export function useLazyQuery(query, options) {
    var _a = useState({
        called: false,
    }), execution = _a[0], setExecution = _a[1];
    var result = useQuery(query, __assign(__assign(__assign({}, options), execution.options), { fetchPolicy: execution.called ? options === null || options === void 0 ? void 0 : options.fetchPolicy : 'standby', skip: undefined }));
    if (!execution.called) {
        result = __assign(__assign({}, result), { loading: false, data: void 0, error: void 0, called: false });
    }
    var eagerMethods = useMemo(function () {
        var eagerMethods = {};
        var _loop_1 = function (key) {
            var method = result[key];
            eagerMethods[key] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                setExecution(function (execution) { return (__assign(__assign({}, execution), { called: true })); });
                return method.apply(void 0, args);
            };
        };
        for (var _i = 0, EAGER_METHODS_1 = EAGER_METHODS; _i < EAGER_METHODS_1.length; _i++) {
            var key = EAGER_METHODS_1[_i];
            _loop_1(key);
        }
        return eagerMethods;
    }, []);
    result.error = result.error || void 0;
    Object.assign(result, eagerMethods);
    var execute = useCallback(function (executeOptions) {
        setExecution({ called: true, options: executeOptions });
        var promise = result.refetch(executeOptions === null || executeOptions === void 0 ? void 0 : executeOptions.variables).then(function (result1) {
            var result2 = __assign(__assign({}, result), { data: result1.data, error: result1.error, called: true, loading: false });
            Object.assign(result2, eagerMethods);
            return result2;
        });
        promise.catch(function () { });
        return promise;
    }, []);
    return [execute, result];
}
//# sourceMappingURL=useLazyQuery.js.map