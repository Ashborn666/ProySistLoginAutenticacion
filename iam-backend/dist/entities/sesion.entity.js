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
exports.Sesion = void 0;
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("./usuario.entity");
const dispositivo_entity_1 = require("./dispositivo.entity");
const log_auditoria_entity_1 = require("./log-auditoria.entity");
let Sesion = class Sesion {
    id;
    usuario;
    usuario_id;
    esta_activa;
    dispositivo_id;
    dispositivo;
    token_hash;
    ip_direccion;
    creado_en;
    ultimo_acceso_en;
    expira_en;
    logs_auditoria;
};
exports.Sesion = Sesion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Sesion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, (usuario) => usuario.sesiones, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'usuario_id' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Sesion.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], Sesion.prototype, "usuario_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Sesion.prototype, "esta_activa", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Sesion.prototype, "dispositivo_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => dispositivo_entity_1.Dispositivo, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'dispositivo_id' }),
    __metadata("design:type", dispositivo_entity_1.Dispositivo)
], Sesion.prototype, "dispositivo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, unique: true }),
    __metadata("design:type", String)
], Sesion.prototype, "token_hash", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45 }),
    __metadata("design:type", String)
], Sesion.prototype, "ip_direccion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Sesion.prototype, "creado_en", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'now()' }),
    __metadata("design:type", Date)
], Sesion.prototype, "ultimo_acceso_en", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Sesion.prototype, "expira_en", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => log_auditoria_entity_1.LogAuditoria, (log) => log.sesion),
    __metadata("design:type", Array)
], Sesion.prototype, "logs_auditoria", void 0);
exports.Sesion = Sesion = __decorate([
    (0, typeorm_1.Entity)('sesiones')
], Sesion);
//# sourceMappingURL=sesion.entity.js.map