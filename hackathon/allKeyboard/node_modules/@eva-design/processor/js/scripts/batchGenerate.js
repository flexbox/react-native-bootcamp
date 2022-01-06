"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generate_1 = require("./generate");
const packages = process.argv.splice(2);
if (packages.length === 0) {
    console.error('No specified mapping package.\n');
    process.exit(1);
}
packages.forEach(generate_1.generateMappingPackage);
//# sourceMappingURL=batchGenerate.js.map