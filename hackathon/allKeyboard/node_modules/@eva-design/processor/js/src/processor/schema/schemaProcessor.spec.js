"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schemaProcessor_1 = require("./schemaProcessor");
const schemaProcessor_spec_config_1 = require("./schemaProcessor.spec.config");
const processor = new schemaProcessor_1.SchemaProcessor();
describe('@processor: service checks', () => {
    it('* processes meta properly', () => {
        const value = processor.process(schemaProcessor_spec_config_1.schema);
        expect(value).toMatchSnapshot();
    });
});
describe('@processor: e2e', () => {
    it('* theme style count computed properly', () => {
        const value = calculateThemeStyleCount(schemaProcessor_spec_config_1.schema);
        expect(value).toBe(288);
    });
    it('* component style count computed properly', () => {
        const value = calculateComponentStyleCount(schemaProcessor_spec_config_1.schema.components.Button);
        expect(value).toBe(288);
    });
    it('* generates all possible styles', () => {
        const styles = processor.process(schemaProcessor_spec_config_1.schema);
        const estimatedCount = calculateThemeStyleCount(schemaProcessor_spec_config_1.schema);
        const generatedCount = Object.keys(styles).reduce((acc, component) => {
            const { styles: componentStyles } = styles[component];
            return acc + Object.keys(componentStyles).length;
        }, 0);
        expect(generatedCount).toEqual(estimatedCount);
    });
});
function calculateThemeStyleCount(mappingSchema) {
    return Object.keys(mappingSchema.components).reduce((acc, component) => {
        const componentMapping = mappingSchema.components[component];
        const componentStyleCount = calculateComponentStyleCount(componentMapping);
        return acc + componentStyleCount;
    }, 0);
}
function calculateComponentStyleCount(component) {
    const { appearances, variants, states } = createComponentTestMeta(component);
    const stateCombinations = Math.pow(2, states.length) - 1;
    const variantGroupCounts = variants.map((group) => {
        return group.length;
    });
    const plainVariants = variantGroupCounts.reduce((acc, groupCount) => {
        return acc + groupCount;
    }, 0);
    const combinedVariants = variantGroupCounts.reduce((acc, groupCount) => {
        return acc * groupCount;
    });
    const accVariants = plainVariants + combinedVariants;
    const stateVariants = accVariants * stateCombinations;
    return appearances.length * (accVariants + stateVariants + stateCombinations + 1);
}
function createComponentTestMeta(component) {
    const { appearances, variantGroups, states } = component.meta;
    return {
        appearances: Object.keys(appearances),
        variants: Object.keys(variantGroups).map(group => Object.keys(variantGroups[group])),
        states: Object.keys(states),
    };
}
//# sourceMappingURL=schemaProcessor.spec.js.map