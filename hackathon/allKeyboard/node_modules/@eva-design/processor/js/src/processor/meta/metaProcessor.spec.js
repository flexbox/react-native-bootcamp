"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const metaProcessor_1 = require("./metaProcessor");
const metaProcessor_spec_config_1 = require("./metaProcessor.spec.config");
const processor = new metaProcessor_1.MetaProcessor();
describe('@processor: service checks', () => {
    it('* processes meta properly', () => {
        const value = processor.process({
            mapping: metaProcessor_spec_config_1.mapping,
            meta: metaProcessor_spec_config_1.meta,
            theme: metaProcessor_spec_config_1.theme,
        });
        expect(value).toMatchSnapshot();
    });
});
//# sourceMappingURL=metaProcessor.spec.js.map