import { getMarkupFromTree } from "./getDataFromTree.js";
export function renderToStringWithData(component) {
    return getMarkupFromTree({
        tree: component,
        renderFunction: require('react-dom/server').renderToString
    });
}
//# sourceMappingURL=renderToStringWithData.js.map