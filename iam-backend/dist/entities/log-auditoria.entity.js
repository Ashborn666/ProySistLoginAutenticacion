"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogAuditoria = void 0;
const typeorm_1 = require("typeorm");
const sesion_entity_1 = require("./sesion.entity");
let LogAuditoria = class LogAuditoria {
    id;
    sesion;
    sesion_id;
    accion;
    descripcion;
    creado_en;
};
exports.LogAuditoria = LogAuditoria;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", Number)
], LogAuditoria.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sesion_entity_1.Sesion, (sesion) => sesion.logs_auditoria, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'sesion_id' }),
    __metadata("design:type", sesion_entity_1.Sesion)
], LogAuditoria.prototype, "sesion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], LogAuditoria.prototype, "sesion_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], LogAuditoria.prototype, "accion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", Object)
], LogAuditoria.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], LogAuditoria.prototype, "creado_en", void 0);
exports.LogAuditoria = LogAuditoria = __decorate([
    (0, typeorm_1.Entity)('logs_auditoria')
], LogAuditoria);
//# sourceMappingURL=log-auditoria.entity.js.map