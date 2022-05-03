import { __assign, __rest } from "tslib";
import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { equal } from '@wry/equality';
import { mergeOptions } from "../../core/index.js";
import { getApolloContext } from "../context/index.js";
import { ApolloError } from "../../errors/index.js";
import { NetworkStatus, } from "../../core/index.js";
import { DocumentType, verifyDocumentType } from "../parser/index.js";
import { useApolloClient } from "./useApolloClient.js";
export function useQuery(query, options) {
    var _a;
    var context = useContext(getApolloContext());
    var client = useApolloClient(options === null || options === void 0 ? void 0 : options.client);
    var defaultWatchQueryOptions = client.defaultOptions.watchQuery;
    verifyDocumentType(query, DocumentType.Query);
    var _b = useState(function () {
        var watchQueryOptions = createWatchQueryOptions(query, options, defaultWatchQueryOptions);
        var obsQuery = null;
        if (context.renderPromises) {
            obsQuery = context.renderPromises.getSSRObservable(watchQueryOptions);
        }
        if (!obsQuery) {
            obsQuery = client.watchQuery(watchQueryOptions);
            if (context.renderPromises) {
                context.renderPromises.registerSSRObservable(obsQuery, watchQueryOptions);
            }
        }
        if (context.renderPromises &&
            (options === null || options === void 0 ? void 0 : options.ssr) !== false &&
            !(options === null || options === void 0 ? void 0 : options.skip) &&
            obsQuery.getCurrentResult().loading) {
            context.renderPromises.addQueryPromise({
                getOptions: function () { return createWatchQueryOptions(query, options, defaultWatchQueryOptions); },
                fetchData: function () { return new Promise(function (resolve) {
                    var sub = obsQuery.subscribe({
                        next: function (result) {
                            if (!result.loading) {
                                resolve();
                                sub.unsubscribe();
                            }
                        },
                        error: function () {
                            resolve();
                            sub.unsubscribe();
                        },
                        complete: function () {
                            resolve();
                        },
                    });
                }); },
            }, function () { return null; });
        }
        return obsQuery;
    }), obsQuery = _b[0], setObsQuery = _b[1];
    var _c = useState(function () {
        var _a, _b;
        var result = obsQuery.getCurrentResult();
        if (!result.loading && options) {
            if (result.error) {
                (_a = options.onError) === null || _a === void 0 ? void 0 : _a.call(options, result.error);
            }
            else if (result.data) {
                (_b = options.onCompleted) === null || _b === void 0 ? void 0 : _b.call(options, result.data);
            }
        }
        return result;
    }), result = _c[0], setResult = _c[1];
    var ref = useRef({
        client: client,
        query: query,
        options: options,
        result: result,
        previousData: void 0,
        watchQueryOptions: createWatchQueryOptions(query, options, defaultWatchQueryOptions),
    });
    useEffect(function () {
        var _a, _b;
        var watchQueryOptions = createWatchQueryOptions(query, options, defaultWatchQueryOptions);
        var nextResult;
        if (ref.current.client !== client || !equal(ref.current.query, query)) {
            var obsQuery_1 = client.watchQuery(watchQueryOptions);
            setObsQuery(obsQuery_1);
            nextResult = obsQuery_1.getCurrentResult();
        }
        else if (!equal(ref.current.watchQueryOptions, watchQueryOptions)) {
            obsQuery.setOptions(watchQueryOptions).catch(function () { });
            nextResult = obsQuery.getCurrentResult();
            ref.current.watchQueryOptions = watchQueryOptions;
        }
        if (nextResult) {
            var previousResult = ref.current.result;
            if (previousResult.data) {
                ref.current.previousData = previousResult.data;
            }
            setResult(ref.current.result = nextResult);
            if (!nextResult.loading && options) {
                if (nextResult.error) {
                    (_a = options.onError) === null || _a === void 0 ? void 0 : _a.call(options, nextResult.error);
                }
                else if (nextResult.data) {
                    (_b = options.onCompleted) === null || _b === void 0 ? void 0 : _b.call(options, nextResult.data);
                }
            }
        }
        Object.assign(ref.current, { client: client, query: query });
    }, [obsQuery, client, query, options]);
    useEffect(function () {
        if (context.renderPromises) {
            return;
        }
        var subscription = obsQuery.subscribe(onNext, onError);
        function onNext() {
            var _a, _b;
            var previousResult = ref.current.result;
            var result = obsQuery.getCurrentResult();
            if (previousResult &&
                previousResult.loading === result.loading &&
                previousResult.networkStatus === result.networkStatus &&
                equal(previousResult.data, result.data)) {
                return;
            }
            if (previousResult.data) {
                ref.current.previousData = previousResult.data;
            }
            setResult(ref.current.result = result);
            if (!result.loading) {
                (_b = (_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onCompleted) === null || _b === void 0 ? void 0 : _b.call(_a, result.data);
            }
        }
        function onError(error) {
            var _a, _b;
            var last = obsQuery["last"];
            subscription.unsubscribe();
            try {
                obsQuery.resetLastResults();
                subscription = obsQuery.subscribe(onNext, onError);
            }
            finally {
                obsQuery["last"] = last;
            }
            if (!error.hasOwnProperty('graphQLErrors')) {
                throw error;
            }
            var previousResult = ref.current.result;
            if ((previousResult && previousResult.loading) ||
                !equal(error, previousResult.error)) {
                setResult(ref.current.result = {
                    data: previousResult.data,
                    error: error,
                    loading: false,
                    networkStatus: NetworkStatus.error,
                });
                (_b = (_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onError) === null || _b === void 0 ? void 0 : _b.call(_a, error);
            }
        }
        return function () { return subscription.unsubscribe(); };
    }, [obsQuery, context.renderPromises, client.disableNetworkFetches]);
    var partial;
    (_a = result, partial = _a.partial, result = __rest(_a, ["partial"]));
    {
        if (partial &&
            (options === null || options === void 0 ? void 0 : options.partialRefetch) &&
            !result.loading &&
            (!result.data || Object.keys(result.data).length === 0) &&
            obsQuery.options.fetchPolicy !== 'cache-only') {
            result = __assign(__assign({}, result), { loading: true, networkStatus: NetworkStatus.refetch });
            obsQuery.refetch();
        }
        if (context.renderPromises &&
            (options === null || options === void 0 ? void 0 : options.ssr) !== false &&
            !(options === null || options === void 0 ? void 0 : options.skip) &&
            result.loading) {
            obsQuery.setOptions(createWatchQueryOptions(query, options, defaultWatchQueryOptions)).catch(function () { });
        }
        Object.assign(ref.current, { options: options });
    }
    if ((context.renderPromises || client.disableNetworkFetches) &&
        (options === null || options === void 0 ? void 0 : options.ssr) === false) {
        result = ref.current.result = {
            loading: true,
            data: void 0,
            error: void 0,
            networkStatus: NetworkStatus.loading,
        };
    }
    else if ((options === null || options === void 0 ? void 0 : options.skip) || (options === null || options === void 0 ? void 0 : options.fetchPolicy) === 'standby') {
        result = {
            loading: false,
            data: void 0,
            error: void 0,
            networkStatus: NetworkStatus.ready,
        };
    }
    if (result.errors && result.errors.length) {
        result = __assign(__assign({}, result), { error: result.error || new ApolloError({ graphQLErrors: result.errors }) });
    }
    var obsQueryFields = useMemo(function () { return ({
        refetch: obsQuery.refetch.bind(obsQuery),
        fetchMore: obsQuery.fetchMore.bind(obsQuery),
        updateQuery: obsQuery.updateQuery.bind(obsQuery),
        startPolling: obsQuery.startPolling.bind(obsQuery),
        stopPolling: obsQuery.stopPolling.bind(obsQuery),
        subscribeToMore: obsQuery.subscribeToMore.bind(obsQuery),
    }); }, [obsQuery]);
    return __assign(__assign(__assign({}, obsQueryFields), { variables: createWatchQueryOptions(query, options, defaultWatchQueryOptions).variables, client: client, called: true, previousData: ref.current.previousData }), result);
}
function createWatchQueryOptions(query, options, defaultOptions) {
    var _a;
    if (options === void 0) { options = {}; }
    var skip = options.skip, ssr = options.ssr, onCompleted = options.onCompleted, onError = options.onError, displayName = options.displayName, otherOptions = __rest(options, ["skip", "ssr", "onCompleted", "onError", "displayName"]);
    var watchQueryOptions = __assign({ query: query }, otherOptions);
    if (defaultOptions) {
        watchQueryOptions = mergeOptions(defaultOptions, watchQueryOptions);
    }
    if (skip) {
        watchQueryOptions.fetchPolicy = 'standby';
    }
    else if (((_a = watchQueryOptions.context) === null || _a === void 0 ? void 0 : _a.renderPromises) &&
        (watchQueryOptions.fetchPolicy === 'network-only' ||
            watchQueryOptions.fetchPolicy === 'cache-and-network')) {
        watchQueryOptions.fetchPolicy = 'cache-first';
    }
    else if (!watchQueryOptions.fetchPolicy) {
        watchQueryOptions.fetchPolicy = 'cache-first';
    }
    if (!watchQueryOptions.variables) {
        watchQueryOptions.variables = {};
    }
    return watchQueryOptions;
}
//# sourceMappingURL=useQuery.js.map