'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var globals = require('../../utilities/globals');

exports.DocumentType = void 0;
(function (DocumentType) {
    DocumentType[DocumentType["Query"] = 0] = "Query";
    DocumentType[DocumentType["Mutation"] = 1] = "Mutation";
    DocumentType[DocumentType["Subscription"] = 2] = "Subscription";
})(exports.DocumentType || (exports.DocumentType = {}));
var cache = new Map();
function operationName(type) {
    var name;
    switch (type) {
        case exports.DocumentType.Query:
            name = 'Query';
            break;
        case exports.DocumentType.Mutation:
            name = 'Mutation';
            break;
        case exports.DocumentType.Subscription:
            name = 'Subscription';
            break;
    }
    return name;
}
function parser(document) {
    var cached = cache.get(document);
    if (cached)
        return cached;
    var variables, type, name;
    __DEV__ ? globals.invariant(!!document && !!document.kind, "Argument of ".concat(document, " passed to parser was not a valid GraphQL ") +
        "DocumentNode. You may need to use 'graphql-tag' or another method " +
        "to convert your operation into a document") : globals.invariant(!!document && !!document.kind, 30);
    var fragments = document.definitions.filter(function (x) { return x.kind === 'FragmentDefinition'; });
    var queries = document.definitions.filter(function (x) {
        return x.kind === 'OperationDefinition' && x.operation === 'query';
    });
    var mutations = document.definitions.filter(function (x) {
        return x.kind === 'OperationDefinition' && x.operation === 'mutation';
    });
    var subscriptions = document.definitions.filter(function (x) {
        return x.kind === 'OperationDefinition' && x.operation === 'subscription';
    });
    __DEV__ ? globals.invariant(!fragments.length ||
        (queries.length || mutations.length || subscriptions.length), "Passing only a fragment to 'graphql' is not yet supported. " +
        "You must include a query, subscription or mutation as well") : globals.invariant(!fragments.length ||
        (queries.length || mutations.length || subscriptions.length), 31);
    __DEV__ ? globals.invariant(queries.length + mutations.length + subscriptions.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " +
        "".concat(document, " had ").concat(queries.length, " queries, ").concat(subscriptions.length, " ") +
        "subscriptions and ".concat(mutations.length, " mutations. ") +
        "You can use 'compose' to join multiple operation types to a component") : globals.invariant(queries.length + mutations.length + subscriptions.length <= 1, 32);
    type = queries.length ? exports.DocumentType.Query : exports.DocumentType.Mutation;
    if (!queries.length && !mutations.length)
        type = exports.DocumentType.Subscription;
    var definitions = queries.length
        ? queries
        : mutations.length
            ? mutations
            : subscriptions;
    __DEV__ ? globals.invariant(definitions.length === 1, "react-apollo only supports one definition per HOC. ".concat(document, " had ") +
        "".concat(definitions.length, " definitions. ") +
        "You can use 'compose' to join multiple operation types to a component") : globals.invariant(definitions.length === 1, 33);
    var definition = definitions[0];
    variables = definition.variableDefinitions || [];
    if (definition.name && definition.name.kind === 'Name') {
        name = definition.name.value;
    }
    else {
        name = 'data';
    }
    var payload = { name: name, type: type, variables: variables };
    cache.set(document, payload);
    return payload;
}
function verifyDocumentType(document, type) {
    var operation = parser(document);
    var requiredOperationName = operationName(type);
    var usedOperationName = operationName(operation.type);
    __DEV__ ? globals.invariant(operation.type === type, "Running a ".concat(requiredOperationName, " requires a graphql ") +
        "".concat(requiredOperationName, ", but a ").concat(usedOperationName, " was used instead.")) : globals.invariant(operation.type === type, 34);
}

exports.operationName = operationName;
exports.parser = parser;
exports.verifyDocumentType = verifyDocumentType;
//# sourceMappingURL=parser.cjs.map
