"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexPath {
    constructor(row, section) {
        this.row = row;
        this.section = section;
        this.equals = (other) => {
            if (!other) {
                return false;
            }
            return this.row === other.row && this.section === other.section;
        };
    }
    get groupIndex() {
        return this.section >= 0 && new IndexPath(this.row);
    }
    toString() {
        if (this.section >= 0) {
            return `${this.section + 1}.${this.row + 1}`;
        }
        return (this.row + 1).toString();
    }
}
exports.IndexPath = IndexPath;
//# sourceMappingURL=typings.js.map