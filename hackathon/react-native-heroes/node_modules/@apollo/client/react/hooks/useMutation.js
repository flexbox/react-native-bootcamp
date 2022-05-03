import { __assign } from "tslib";
import { useCallback, useEffect, useRef, useState } from 'react';
import { mergeOptions, } from "../../core/index.js";
import { equal } from '@wry/equality';
import { DocumentType, verifyDocumentType } from "../parser/index.js";
import { ApolloError } from "../../errors/index.js";
import { useApolloClient } from "./useApolloClient.js";
export function useMutation(mutation, options) {
    var client = useApolloClient(options === null || options === void 0 ? void 0 : options.client);
    verifyDocumentType(mutation, DocumentType.Mutation);
    var _a = useState({
        called: false,
        loading: false,
        client: client,
    }), result = _a[0], setResult = _a[1];
    var ref = useRef({
        result: result,
        mutationId: 0,
        isMounted: true,
        client: client,
        mutation: mutation,
        options: options,
    });
    {
        Object.assign(ref.current, { client: client, options: options, mutation: mutation });
    }
    var execute = useCallback(function (executeOptions) {
        if (executeOptions === void 0) { executeOptions = {}; }
        var _a = ref.current, client = _a.client, options = _a.options, mutation = _a.mutation;
        var baseOptions = __assign(__assign({}, options), { mutation: mutation });
        if (!ref.current.result.loading && !baseOptions.ignoreResults) {
            setResult(ref.current.result = {
                loading: true,
                error: void 0,
                data: void 0,
                called: true,
                client: client,
            });
        }
        var mutationId = ++ref.current.mutationId;
        var clientOptions = mergeOptions(baseOptions, executeOptions);
        return client.mutate(clientOptions).then(function (response) {
            var _a, _b;
            var data = response.data, errors = response.errors;
            var error = errors && errors.length > 0
                ? new ApolloError({ graphQLErrors: errors })
                : void 0;
            if (mutationId === ref.current.mutationId &&
                !clientOptions.ignoreResults) {
                var result_1 = {
                    called: true,
                    loading: false,
                    data: data,
                    error: error,
                    client: client,
                };
                if (ref.current.isMounted && !equal(ref.current.result, result_1)) {
                    setResult(ref.current.result = result_1);
                }
            }
            (_a = baseOptions.onCompleted) === null || _a === void 0 ? void 0 : _a.call(baseOptions, response.data);
            (_b = executeOptions.onCompleted) === null || _b === void 0 ? void 0 : _b.call(executeOptions, response.data);
            return response;
        }).catch(function (error) {
            var _a, _b;
            if (mutationId === ref.current.mutationId &&
                ref.current.isMounted) {
                var result_2 = {
                    loading: false,
                    error: error,
                    data: void 0,
                    called: true,
                    client: client,
                };
                if (!equal(ref.current.result, result_2)) {
                    setResult(ref.current.result = result_2);
                }
            }
            if (baseOptions.onError || clientOptions.onError) {
                (_a = baseOptions.onError) === null || _a === void 0 ? void 0 : _a.call(baseOptions, error);
                (_b = executeOptions.onError) === null || _b === void 0 ? void 0 : _b.call(executeOptions, error);
                return { data: void 0, errors: error };
            }
            throw error;
        });
    }, []);
    var reset = useCallback(function () {
        setResult({ called: false, loading: false, client: client });
    }, []);
    useEffect(function () { return function () {
        ref.current.isMounted = false;
    }; }, []);
    return [execute, __assign({ reset: reset }, result)];
}
//# sourceMappingURL=useMutation.js.map