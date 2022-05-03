import { __assign, __spreadArray } from "tslib";
import { print } from 'graphql';
;
var defaultHttpOptions = {
    includeQuery: true,
    includeExtensions: false,
};
var defaultHeaders = {
    accept: '*/*',
    'content-type': 'application/json',
};
var defaultOptions = {
    method: 'POST',
};
export var fallbackHttpConfig = {
    http: defaultHttpOptions,
    headers: defaultHeaders,
    options: defaultOptions,
};
export var defaultPrinter = function (ast, printer) { return printer(ast); };
export function selectHttpOptionsAndBody(operation, fallbackConfig) {
    var configs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        configs[_i - 2] = arguments[_i];
    }
    configs.unshift(fallbackConfig);
    return selectHttpOptionsAndBodyInternal.apply(void 0, __spreadArray([operation,
        defaultPrinter], configs, false));
}
export function selectHttpOptionsAndBodyInternal(operation, printer) {
    var configs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        configs[_i - 2] = arguments[_i];
    }
    var options = {};
    var http = {};
    configs.forEach(function (config) {
        options = __assign(__assign(__assign({}, options), config.options), { headers: __assign(__assign({}, options.headers), headersToLowerCase(config.headers)) });
        if (config.credentials) {
            options.credentials = config.credentials;
        }
        http = __assign(__assign({}, http), config.http);
    });
    var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
    var body = { operationName: operationName, variables: variables };
    if (http.includeExtensions)
        body.extensions = extensions;
    if (http.includeQuery)
        body.query = printer(query, print);
    return {
        options: options,
        body: body,
    };
}
;
function headersToLowerCase(headers) {
    if (headers) {
        var normalized_1 = Object.create(null);
        Object.keys(Object(headers)).forEach(function (name) {
            normalized_1[name.toLowerCase()] = headers[name];
        });
        return normalized_1;
    }
    return headers;
}
//# sourceMappingURL=selectHttpOptionsAndBody.js.map