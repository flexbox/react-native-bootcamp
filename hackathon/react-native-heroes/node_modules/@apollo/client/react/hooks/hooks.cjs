'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var globals = require('../../utilities/globals');
var react = require('react');
var context = require('../context');
var tslib = require('tslib');
var equality = require('@wry/equality');
var core = require('../../core');
var errors = require('../../errors');
var parser = require('../parser');

function useApolloClient(override) {
    var context$1 = react.useContext(context.getApolloContext());
    var client = override || context$1.client;
    __DEV__ ? globals.invariant(!!client, 'Could not find "client" in the context or passed in as an option. ' +
        'Wrap the root component in an <ApolloProvider>, or pass an ApolloClient ' +
        'instance in via options.') : globals.invariant(!!client, 29);
    return client;
}

function useQuery(query, options) {
    var _a;
    var context$1 = react.useContext(context.getApolloContext());
    var client = useApolloClient(options === null || options === void 0 ? void 0 : options.client);
    var defaultWatchQueryOptions = client.defaultOptions.watchQuery;
    parser.verifyDocumentType(query, parser.DocumentType.Query);
    var _b = react.useState(function () {
        var watchQueryOptions = createWatchQueryOptions(query, options, defaultWatchQueryOptions);
        var obsQuery = null;
        if (context$1.renderPromises) {
            obsQuery = context$1.renderPromises.getSSRObservable(watchQueryOptions);
        }
        if (!obsQuery) {
            obsQuery = client.watchQuery(watchQueryOptions);
            if (context$1.renderPromises) {
                context$1.renderPromises.registerSSRObservable(obsQuery, watchQueryOptions);
            }
        }
        if (context$1.renderPromises &&
            (options === null || options === void 0 ? void 0 : options.ssr) !== false &&
            !(options === null || options === void 0 ? void 0 : options.skip) &&
            obsQuery.getCurrentResult().loading) {
            context$1.renderPromises.addQueryPromise({
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
    var _c = react.useState(function () {
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
    var ref = react.useRef({
        client: client,
        query: query,
        options: options,
        result: result,
        previousData: void 0,
        watchQueryOptions: createWatchQueryOptions(query, options, defaultWatchQueryOptions),
    });
    react.useEffect(function () {
        var _a, _b;
        var watchQueryOptions = createWatchQueryOptions(query, options, defaultWatchQueryOptions);
        var nextResult;
        if (ref.current.client !== client || !equality.equal(ref.current.query, query)) {
            var obsQuery_1 = client.watchQuery(watchQueryOptions);
            setObsQuery(obsQuery_1);
            nextResult = obsQuery_1.getCurrentResult();
        }
        else if (!equality.equal(ref.current.watchQueryOptions, watchQueryOptions)) {
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
    react.useEffect(function () {
        if (context$1.renderPromises) {
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
                equality.equal(previousResult.data, result.data)) {
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
                !equality.equal(error, previousResult.error)) {
                setResult(ref.current.result = {
                    data: previousResult.data,
                    error: error,
                    loading: false,
                    networkStatus: core.NetworkStatus.error,
                });
                (_b = (_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onError) === null || _b === void 0 ? void 0 : _b.call(_a, error);
            }
        }
        return function () { return subscription.unsubscribe(); };
    }, [obsQuery, context$1.renderPromises, client.disableNetworkFetches]);
    var partial;
    (_a = result, partial = _a.partial, result = tslib.__rest(_a, ["partial"]));
    {
        if (partial &&
            (options === null || options === void 0 ? void 0 : options.partialRefetch) &&
            !result.loading &&
            (!result.data || Object.keys(result.data).length === 0) &&
            obsQuery.options.fetchPolicy !== 'cache-only') {
            result = tslib.__assign(tslib.__assign({}, result), { loading: true, networkStatus: core.NetworkStatus.refetch });
            obsQuery.refetch();
        }
        if (context$1.renderPromises &&
            (options === null || options === void 0 ? void 0 : options.ssr) !== false &&
            !(options === null || options === void 0 ? void 0 : options.skip) &&
            result.loading) {
            obsQuery.setOptions(createWatchQueryOptions(query, options, defaultWatchQueryOptions)).catch(function () { });
        }
        Object.assign(ref.current, { options: options });
    }
    if ((context$1.renderPromises || client.disableNetworkFetches) &&
        (options === null || options === void 0 ? void 0 : options.ssr) === false) {
        result = ref.current.result = {
            loading: true,
            data: void 0,
            error: void 0,
            networkStatus: core.NetworkStatus.loading,
        };
    }
    else if ((options === null || options === void 0 ? void 0 : options.skip) || (options === null || options === void 0 ? void 0 : options.fetchPolicy) === 'standby') {
        result = {
            loading: false,
            data: void 0,
            error: void 0,
            networkStatus: core.NetworkStatus.ready,
        };
    }
    if (result.errors && result.errors.length) {
        result = tslib.__assign(tslib.__assign({}, result), { error: result.error || new errors.ApolloError({ graphQLErrors: result.errors }) });
    }
    var obsQueryFields = react.useMemo(function () { return ({
        refetch: obsQuery.refetch.bind(obsQuery),
        fetchMore: obsQuery.fetchMore.bind(obsQuery),
        updateQuery: obsQuery.updateQuery.bind(obsQuery),
        startPolling: obsQuery.startPolling.bind(obsQuery),
        stopPolling: obsQuery.stopPolling.bind(obsQuery),
        subscribeToMore: obsQuery.subscribeToMore.bind(obsQuery),
    }); }, [obsQuery]);
    return tslib.__assign(tslib.__assign(tslib.__assign({}, obsQueryFields), { variables: createWatchQueryOptions(query, options, defaultWatchQueryOptions).variables, client: client, called: true, previousData: ref.current.previousData }), result);
}
function createWatchQueryOptions(query, options, defaultOptions) {
    var _a;
    if (options === void 0) { options = {}; }
    var skip = options.skip; options.ssr; options.onCompleted; options.onError; options.displayName; var otherOptions = tslib.__rest(options, ["skip", "ssr", "onCompleted", "onError", "displayName"]);
    var watchQueryOptions = tslib.__assign({ query: query }, otherOptions);
    if (defaultOptions) {
        watchQueryOptions = core.mergeOptions(defaultOptions, watchQueryOptions);
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

var EAGER_METHODS = [
    'refetch',
    'fetchMore',
    'updateQuery',
    'startPolling',
    'subscribeToMore',
];
function useLazyQuery(query, options) {
    var _a = react.useState({
        called: false,
    }), execution = _a[0], setExecution = _a[1];
    var result = useQuery(query, tslib.__assign(tslib.__assign(tslib.__assign({}, options), execution.options), { fetchPolicy: execution.called ? options === null || options === void 0 ? void 0 : options.fetchPolicy : 'standby', skip: undefined }));
    if (!execution.called) {
        result = tslib.__assign(tslib.__assign({}, result), { loading: false, data: void 0, error: void 0, called: false });
    }
    var eagerMethods = react.useMemo(function () {
        var eagerMethods = {};
        var _loop_1 = function (key) {
            var method = result[key];
            eagerMethods[key] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                setExecution(function (execution) { return (tslib.__assign(tslib.__assign({}, execution), { called: true })); });
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
    var execute = react.useCallback(function (executeOptions) {
        setExecution({ called: true, options: executeOptions });
        var promise = result.refetch(executeOptions === null || executeOptions === void 0 ? void 0 : executeOptions.variables).then(function (result1) {
            var result2 = tslib.__assign(tslib.__assign({}, result), { data: result1.data, error: result1.error, called: true, loading: false });
            Object.assign(result2, eagerMethods);
            return result2;
        });
        promise.catch(function () { });
        return promise;
    }, []);
    return [execute, result];
}

function useMutation(mutation, options) {
    var client = useApolloClient(options === null || options === void 0 ? void 0 : options.client);
    parser.verifyDocumentType(mutation, parser.DocumentType.Mutation);
    var _a = react.useState({
        called: false,
        loading: false,
        client: client,
    }), result = _a[0], setResult = _a[1];
    var ref = react.useRef({
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
    var execute = react.useCallback(function (executeOptions) {
        if (executeOptions === void 0) { executeOptions = {}; }
        var _a = ref.current, client = _a.client, options = _a.options, mutation = _a.mutation;
        var baseOptions = tslib.__assign(tslib.__assign({}, options), { mutation: mutation });
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
        var clientOptions = core.mergeOptions(baseOptions, executeOptions);
        return client.mutate(clientOptions).then(function (response) {
            var _a, _b;
            var data = response.data, errors$1 = response.errors;
            var error = errors$1 && errors$1.length > 0
                ? new errors.ApolloError({ graphQLErrors: errors$1 })
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
                if (ref.current.isMounted && !equality.equal(ref.current.result, result_1)) {
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
                if (!equality.equal(ref.current.result, result_2)) {
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
    var reset = react.useCallback(function () {
        setResult({ called: false, loading: false, client: client });
    }, []);
    react.useEffect(function () { return function () {
        ref.current.isMounted = false;
    }; }, []);
    return [execute, tslib.__assign({ reset: reset }, result)];
}

function useSubscription(subscription, options) {
    var client = useApolloClient(options === null || options === void 0 ? void 0 : options.client);
    parser.verifyDocumentType(subscription, parser.DocumentType.Subscription);
    var _a = react.useState({
        loading: !(options === null || options === void 0 ? void 0 : options.skip),
        error: void 0,
        data: void 0,
        variables: options === null || options === void 0 ? void 0 : options.variables,
    }), result = _a[0], setResult = _a[1];
    var _b = react.useState(function () {
        if (options === null || options === void 0 ? void 0 : options.skip) {
            return null;
        }
        return client.subscribe({
            query: subscription,
            variables: options === null || options === void 0 ? void 0 : options.variables,
            fetchPolicy: options === null || options === void 0 ? void 0 : options.fetchPolicy,
            context: options === null || options === void 0 ? void 0 : options.context,
        });
    }), observable = _b[0], setObservable = _b[1];
    var ref = react.useRef({ client: client, subscription: subscription, options: options });
    react.useEffect(function () {
        var _a, _b, _c, _d;
        var shouldResubscribe = options === null || options === void 0 ? void 0 : options.shouldResubscribe;
        if (typeof shouldResubscribe === 'function') {
            shouldResubscribe = !!shouldResubscribe(options);
        }
        if (options === null || options === void 0 ? void 0 : options.skip) {
            if (!(options === null || options === void 0 ? void 0 : options.skip) !== !((_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.skip)) {
                setResult({
                    loading: false,
                    data: void 0,
                    error: void 0,
                    variables: options === null || options === void 0 ? void 0 : options.variables,
                });
                setObservable(null);
            }
        }
        else if (shouldResubscribe !== false && (client !== ref.current.client ||
            subscription !== ref.current.subscription ||
            (options === null || options === void 0 ? void 0 : options.fetchPolicy) !== ((_b = ref.current.options) === null || _b === void 0 ? void 0 : _b.fetchPolicy) ||
            !(options === null || options === void 0 ? void 0 : options.skip) !== !((_c = ref.current.options) === null || _c === void 0 ? void 0 : _c.skip) ||
            !equality.equal(options === null || options === void 0 ? void 0 : options.variables, (_d = ref.current.options) === null || _d === void 0 ? void 0 : _d.variables))) {
            setResult({
                loading: true,
                data: void 0,
                error: void 0,
                variables: options === null || options === void 0 ? void 0 : options.variables,
            });
            setObservable(client.subscribe({
                query: subscription,
                variables: options === null || options === void 0 ? void 0 : options.variables,
                fetchPolicy: options === null || options === void 0 ? void 0 : options.fetchPolicy,
                context: options === null || options === void 0 ? void 0 : options.context,
            }));
        }
        Object.assign(ref.current, { client: client, subscription: subscription, options: options });
    }, [client, subscription, options]);
    react.useEffect(function () {
        if (!observable) {
            return;
        }
        var subscription = observable.subscribe({
            next: function (fetchResult) {
                var _a, _b;
                var result = {
                    loading: false,
                    data: fetchResult.data,
                    error: void 0,
                    variables: options === null || options === void 0 ? void 0 : options.variables,
                };
                setResult(result);
                (_b = (_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onSubscriptionData) === null || _b === void 0 ? void 0 : _b.call(_a, {
                    client: client,
                    subscriptionData: result
                });
            },
            error: function (error) {
                setResult({
                    loading: false,
                    data: void 0,
                    error: error,
                    variables: options === null || options === void 0 ? void 0 : options.variables,
                });
            },
            complete: function () {
                var _a, _b;
                (_b = (_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onSubscriptionComplete) === null || _b === void 0 ? void 0 : _b.call(_a);
            },
        });
        return function () {
            subscription.unsubscribe();
        };
    }, [observable]);
    return result;
}

function useReactiveVar(rv) {
    var value = rv();
    var setValue = react.useState(value)[1];
    react.useEffect(function () {
        var probablySameValue = rv();
        if (value !== probablySameValue) {
            setValue(probablySameValue);
        }
        else {
            return rv.onNextChange(setValue);
        }
    }, [value]);
    return value;
}

exports.useApolloClient = useApolloClient;
exports.useLazyQuery = useLazyQuery;
exports.useMutation = useMutation;
exports.useQuery = useQuery;
exports.useReactiveVar = useReactiveVar;
exports.useSubscription = useSubscription;
//# sourceMappingURL=hooks.cjs.map
