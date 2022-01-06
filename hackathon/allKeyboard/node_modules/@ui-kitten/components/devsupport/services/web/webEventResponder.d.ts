export interface WebEventResponderCallbacks {
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
}
export declare class WebEventResponderInstance {
    readonly eventHandlers: WebEventResponderCallbacks;
    constructor(props: WebEventResponderCallbacks);
}
declare class WebEventResponderStatic {
    static create(config: WebEventResponderCallbacks): WebEventResponderInstance;
}
export declare const WebEventResponder: typeof WebEventResponderStatic;
export {};
