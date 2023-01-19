"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const dough_service_1 = require("../dough/dough.service");
const toppings_service_1 = require("../toppings/toppings.service");
const oven_service_1 = require("../oven/oven.service");
const serve_service_1 = require("../serve/serve.service");
let PizzaService = class PizzaService {
    prepare(order) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            yield this.doughService.prepare(order);
            yield this.toppingsService.prepare(order);
            yield this.ovenService.cook(order);
            yield this.serveService.serve(order);
        });
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Inject)(dough_service_1.DoughService)
], PizzaService.prototype, "doughService", void 0);
(0, tslib_1.__decorate)([
    (0, common_1.Inject)(toppings_service_1.ToppingsService)
], PizzaService.prototype, "toppingsService", void 0);
(0, tslib_1.__decorate)([
    (0, common_1.Inject)(oven_service_1.OvenService)
], PizzaService.prototype, "ovenService", void 0);
(0, tslib_1.__decorate)([
    (0, common_1.Inject)(serve_service_1.ServeService)
], PizzaService.prototype, "serveService", void 0);
PizzaService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)()
], PizzaService);
exports.PizzaService = PizzaService;
//# sourceMappingURL=pizza.service.js.map