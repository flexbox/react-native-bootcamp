"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const scriptArguments = process.argv.splice(2);
if (scriptArguments.length === 0) {
    console.error('No specified mapping package.\n');
    process.exit(1);
}
const { [0]: packageNameArgument } = scriptArguments;
main();
function main() {
    const schemaPackagePath = path_1.default.resolve('packages', packageNameArgument);
    const schemaDefinitionsFilePath = `${schemaPackagePath}/${packageNameArgument}.d.ts`;
    const schema = require(`${schemaPackagePath}/mapping.json`);
    const rawSchemaDefinitions = createRawDefinitionsForSchema(schema);
    const writableSchemaDefinitions = createWritableSchemaDefinitionsFromRawSource(rawSchemaDefinitions);
    fs_1.writeFileSync(schemaDefinitionsFilePath, writableSchemaDefinitions);
}
/**
 * @returns object with control definitions
 * key - control name,
 * value `raw` definition of control parameters
 *
 * e.g { Button: { backgroundColor: 'string', ... } }
 */
function createRawDefinitionsForSchema(schema) {
    return Object.keys(schema.components).reduce((acc, controlName) => {
        const controlDefinitions = createRawDefinitionsForControl(schema, controlName);
        return Object.assign(Object.assign({}, acc), { [controlName]: controlDefinitions });
    }, {});
}
/**
 * @returns object with control definitions
 * key - parameter name,
 * value `raw` definition parameter
 *
 * e.g { backgroundColor: 'string', ... }
 */
function createRawDefinitionsForControl(schema, controlName) {
    const { [controlName]: componentMapping } = schema.components;
    return Object.keys(componentMapping.meta.parameters).reduce((acc, parameterKey) => {
        const { [parameterKey]: parameterMeta } = componentMapping.meta.parameters;
        return Object.assign(Object.assign({}, acc), { [parameterKey]: parameterMeta.type });
    }, {});
}
function createWritableSchemaDefinitionsFromRawSource(rawSource) {
    return Object.keys(rawSource).reduce((acc, controlName) => {
        const controlDefinitionsOutput = createWritableControlDefinitionsFromRawSource(rawSource, controlName);
        return acc.concat(controlDefinitionsOutput);
    }, '');
}
/**
 * @returns raw control definitions mapped to TypeScript interfaces
 *
 * e.g { Button: { backgroundColor: 'string', ... } }
 * -> `export interface ButtonParameters { backgroundColor: string; ... }`
 */
function createWritableControlDefinitionsFromRawSource(rawSource, controlName) {
    const { [controlName]: rawControlDefinitions } = rawSource;
    const jsonDefinitions = JSON.stringify(rawControlDefinitions, null, 2);
    const noQuotesDefinitions = jsonDefinitions.replace(/["']/g, '');
    const writableDefinitions = noQuotesDefinitions.replace(/,/g, ';');
    return `export interface ${controlName}Parameters ${writableDefinitions}`;
}
//# sourceMappingURL=generateParameterDefinitions.js.map