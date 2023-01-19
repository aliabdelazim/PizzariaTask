"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    getHello() {
        return this.appService.getHello();
    }
};
(0, tslib_1.__decorate)([
    (0, common_1.Inject)(app_service_1.AppService)
], AppController.prototype, "appService", void 0);
(0, tslib_1.__decorate)([
    (0, common_1.Get)()
], AppController.prototype, "getHello", null);
AppController = (0, tslib_1.__decorate)([
    (0, common_1.Controller)()
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map