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
exports.Usuario = void 0;
const typeorm_1 = require("typeorm");
const corregimiento_entity_1 = require("./corregimiento.entity");
const usuario_rol_entity_1 = require("./usuario-rol.entity");
const dispositivo_entity_1 = require("./dispositivo.entity");
const sesion_entity_1 = require("./sesion.entity");
const config_mfa_entity_1 = require("./config-mfa.entity");
const notificacion_entity_1 = require("./notificacion.entity");
const usuario_autorizacion_entity_1 = require("./usuario-autorizacion.entity");
const token_oauth_entity_1 = require("./token-oauth.entity");
let Usuario = class Usuario {
    id;
    nombre;
    email;
    password_hash;
    telefono;
    bio;
    corregimiento;
    corregimiento_id;
    creado_en;
    usuarioRoles;
    dispositivos;
    sesiones;
    configuracionesMfa;
    notificaciones;
    autorizaciones;
    tokensOauth;
};
exports.Usuario = Usuario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Usuario.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150 }),
    __metadata("design:type", String)
], Usuario.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150, unique: true }),
    __metadata("design:type", String)
], Usuario.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Usuario.prototype, "password_hash", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", Object)
], Usuario.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", Object)
], Usuario.prototype, "bio", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => corregimiento_entity_1.Corregimiento, {
        nullable: true,
        onDelete: 'SET NULL',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'corregimiento_id' }),
    __metadata("design:type", Object)
], Usuario.prototype, "corregimiento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Object)
], Usuario.prototype, "corregimiento_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Usuario.prototype, "creado_en", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => usuario_rol_entity_1.UsuarioRol, (usuarioRol) => usuarioRol.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "usuarioRoles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => dispositivo_entity_1.Dispositivo, (dispositivo) => dispositivo.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "dispositivos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => sesion_entity_1.Sesion, (sesion) => sesion.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "sesiones", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => config_mfa_entity_1.ConfigMfa, (configMfa) => configMfa.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "configuracionesMfa", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => notificacion_entity_1.Notificacion, (notificacion) => notificacion.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "notificaciones", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => usuario_autorizacion_entity_1.UsuarioAutorizacion, (autorizacion) => autorizacion.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "autorizaciones", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => token_oauth_entity_1.TokenOauth, (tokenOauth) => tokenOauth.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "tokensOauth", void 0);
exports.Usuario = Usuario = __decorate([
    (0, typeorm_1.Entity)('usuarios')
], Usuario);
//# sourceMappingURL=usuario.entity.js.map