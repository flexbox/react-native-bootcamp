"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mappingProcessor_1 = require("./mappingProcessor");
const mappingProcessor_spec_config_1 = require("./mappingProcessor.spec.config");
describe('@processor: service checks', () => {
    const processor = new mappingProcessor_1.MappingProcessor();
    it('* processes mapping properly', () => {
        const value = processor.process(mappingProcessor_spec_config_1.mapping);
        expect(value).toMatchSnapshot();
    });
});
//# sourceMappingURL=mappingProcessor.spec.js.map