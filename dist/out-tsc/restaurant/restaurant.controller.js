"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantsController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const restaurant_service_1 = require("./restaurant.service");
let RestaurantsController = class RestaurantsController {
    serveOrders(orders) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'Orders served successfully',
                data: yield this.restaurantsService.handleOrders(orders.orders),
            };
        });
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Inject)(restaurant_service_1.RestaurantsService)
], RestaurantsController.prototype, "restaurantsService", void 0);
(0, tslib_1.__decorate)([
    (0, common_1.Post)(),
    (0, tslib_1.__param)(0, (0, common_1.Body)())
], RestaurantsController.prototype, "serveOrders", null);
RestaurantsController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)('restaurant')
], RestaurantsController);
exports.RestaurantsController = RestaurantsController;
//# sourceMappingURL=restaurant.controller.js.map