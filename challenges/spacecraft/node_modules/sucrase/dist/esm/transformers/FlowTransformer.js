

import Transformer from "./Transformer";

export default class FlowTransformer extends Transformer {
  constructor( rootTransformer,  tokens) {
    super();this.rootTransformer = rootTransformer;this.tokens = tokens;;
  }

  process() {
    return (
      this.rootTransformer.processPossibleArrowParamEnd() ||
      this.rootTransformer.processPossibleAsyncArrowWithTypeParams() ||
      this.rootTransformer.processPossibleTypeRange()
    );
  }
}
