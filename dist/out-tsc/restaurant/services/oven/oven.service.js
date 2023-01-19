"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OvenService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
let OvenService = class OvenService {
    constructor() {
        this.currentCooking = 0;
        this.maxCooking = 1;
        this.cookingDurationPerOven = 10000;
    }
    cook(order) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            while (this.currentCooking >= this.maxCooking) {
                yield new Promise(resolve => setTimeout(resolve, 50));
            }
            this.currentCooking++;
            console.log(`Start cooking order: ${order.id} at:`, new Date().toISOString());
            yield new Promise((resolve) => setTimeout(resolve, this.cookingDurationPerOven));
            console.log(`Finished cooking order: ${order.id} at:`, new Date().toISOString());
            this.currentCooking--;
        });
    }
};
OvenService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], OvenService);
exports.OvenService = OvenService;
//# sourceMappingURL=oven.service.js.map