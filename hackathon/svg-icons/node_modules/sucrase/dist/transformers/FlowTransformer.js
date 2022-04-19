"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _Transformer = require('./Transformer'); var _Transformer2 = _interopRequireDefault(_Transformer);

 class FlowTransformer extends _Transformer2.default {
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
} exports.default = FlowTransformer;
