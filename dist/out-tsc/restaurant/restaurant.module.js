"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantsModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const restaurant_service_1 = require("./restaurant.service");
const restaurant_controller_1 = require("./restaurant.controller");
const report_entity_1 = require("./entities/report.entity");
const dough_service_1 = require("./services/dough/dough.service");
const oven_service_1 = require("./services/oven/oven.service");
const pizza_service_1 = require("./services/pizza/pizza.service");
const serve_service_1 = require("./services/serve/serve.service");
const toppings_service_1 = require("./services/toppings/toppings.service");
let RestaurantsModule = class RestaurantsModule {
};
RestaurantsModule = (0, tslib_1.__decorate)([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([report_entity_1.ReportsEntity])],
        controllers: [restaurant_controller_1.RestaurantsController],
        providers: [restaurant_service_1.RestaurantsService, dough_service_1.DoughService, oven_service_1.OvenService, pizza_service_1.PizzaService, serve_service_1.ServeService, toppings_service_1.ToppingsService],
    })
], RestaurantsModule);
exports.RestaurantsModule = RestaurantsModule;
//# sourceMappingURL=restaurant.module.js.map