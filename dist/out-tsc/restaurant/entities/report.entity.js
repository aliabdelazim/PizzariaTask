"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsEntity = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let ReportsEntity = class ReportsEntity {
};
(0, tslib_1.__decorate)([
    (0, typeorm_1.PrimaryGeneratedColumn)()
], ReportsEntity.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)('text', { nullable: true })
], ReportsEntity.prototype, "startPrepTime", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)('text', { nullable: true })
], ReportsEntity.prototype, "endPrepTime", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)('numeric', { nullable: true })
], ReportsEntity.prototype, "numberOfOrder", void 0);
ReportsEntity = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)('report')
], ReportsEntity);
exports.ReportsEntity = ReportsEntity;
//# sourceMappingURL=report.entity.js.map