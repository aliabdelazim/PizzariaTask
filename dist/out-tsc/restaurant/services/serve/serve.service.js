"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServeService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
let ServeService = class ServeService {
    constructor() {
        this.currentServing = 0;
        this.maxServing = 2;
        this.servingDurationPerWaiter = 5000;
    }
    serve(order) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            while (this.currentServing >= this.maxServing) {
                yield new Promise(resolve => setTimeout(resolve, 50));
            }
            this.currentServing++;
            console.log(`Start serve order: ${order.id} at:`, new Date().toISOString());
            yield new Promise((resolve) => setTimeout(resolve, this.servingDurationPerWaiter));
            console.log(`Finished serve order: ${order.id} at:`, new Date().toISOString());
            this.currentServing--;
        });
    }
};
ServeService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], ServeService);
exports.ServeService = ServeService;
//# sourceMappingURL=serve.service.js.map