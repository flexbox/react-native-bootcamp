import type TokenProcessor from "../TokenProcessor";
import type RootTransformer from "./RootTransformer";
import Transformer from "./Transformer";
export default class FlowTransformer extends Transformer {
    readonly rootTransformer: RootTransformer;
    readonly tokens: TokenProcessor;
    constructor(rootTransformer: RootTransformer, tokens: TokenProcessor);
    process(): boolean;
}
