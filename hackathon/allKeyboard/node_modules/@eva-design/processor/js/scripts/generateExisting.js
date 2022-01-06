"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const generate_1 = require("./generate");
const packages = process.argv.splice(2);
if (packages.length === 0) {
    console.error('No specified source mapping package name. Stopping\n');
    process.exit(1);
}
const mappingDir = path_1.default.resolve('packages');
packages.forEach((name) => {
    const source = path_1.default.resolve(mappingDir, name);
    generate_1.generateMappingPackage(source);
});
//# sourceMappingURL=generateExisting.js.map