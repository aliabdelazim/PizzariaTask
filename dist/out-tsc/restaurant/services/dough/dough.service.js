"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoughService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
let DoughService = class DoughService {
    constructor() {
        this.currentPreparing = 0;
        this.maxPreparing = 2;
        this.preparingDurationPerChef = 7000;
    }
    prepare(order) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            while (this.currentPreparing >= this.maxPreparing) {
                yield new Promise(resolve => setTimeout(resolve, 50));
            }
            this.currentPreparing++;
            console.log(`Start preparing order: ${order.id} dough at:`, new Date().toISOString());
            yield new Promise((resolve) => setTimeout(resolve, this.preparingDurationPerChef));
            console.log(`Finished preparing order: ${order.id} dough at:`, new Date().toISOString());
            this.currentPreparing--;
        });
    }
};
DoughService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], DoughService);
exports.DoughService = DoughService;
//# sourceMappingURL=dough.service.js.map