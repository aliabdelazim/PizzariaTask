"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantsService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const pizza_service_1 = require("./services/pizza/pizza.service");
const typeorm_1 = require("@nestjs/typeorm");
const report_entity_1 = require("./entities/report.entity");
let RestaurantsService = class RestaurantsService {
    constructor(reportsRepository) {
        this.reportsRepository = reportsRepository;
    }
    handleOrders(orders) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const preparePromises = orders.map(order => this.pizzaService.prepare(order));
            let report = {
                startPrepTime: new Date().toISOString(),
                endPrepTime: '',
                numberOfOrder: orders.length
            };
            console.log('Start serving pizza at:', new Date().toISOString());
            yield Promise.all(preparePromises).then((res) => {
                console.log('Finished serving all pizzas at:', new Date().toISOString());
                report.endPrepTime = new Date().toISOString();
                this.createReport(report);
            }, (err) => {
                console.log('Failed serving pizza at:', new Date().toISOString());
            });
        });
    }
    createReport(data) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const report = this.reportsRepository.create(data);
            yield this.reportsRepository.save(data);
            return report;
        });
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Inject)(pizza_service_1.PizzaService)
], RestaurantsService.prototype, "pizzaService", void 0);
RestaurantsService = (0, tslib_1.__decorate)([
    (0, common_1.Injectable)(),
    (0, tslib_1.__param)(0, (0, typeorm_1.InjectRepository)(report_entity_1.ReportsEntity))
], RestaurantsService);
exports.RestaurantsService = RestaurantsService;
//# sourceMappingURL=restaurant.service.js.map