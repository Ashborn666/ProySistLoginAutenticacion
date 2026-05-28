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
exports.UsuarioAutorizacion = void 0;
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("./usuario.entity");
const cliente_oauth_entity_1 = require("./cliente-oauth.entity");
let UsuarioAutorizacion = class UsuarioAutorizacion {
    usuario_id;
    cliente_id;
    usuario;
    cliente;
    fecha_autorizacion;
};
exports.UsuarioAutorizacion = UsuarioAutorizacion;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'uuid' }),
    __metadata("design:type", String)
], UsuarioAutorizacion.prototype, "usuario_id", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'int' }),
    __metadata("design:type", Number)
], UsuarioAutorizacion.prototype, "cliente_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, (usuario) => usuario.autorizaciones, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'usuario_id' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], UsuarioAutorizacion.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cliente_oauth_entity_1.ClienteOauth, (cliente) => cliente.autorizaciones, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'cliente_id' }),
    __metadata("design:type", cliente_oauth_entity_1.ClienteOauth)
], UsuarioAutorizacion.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], UsuarioAutorizacion.prototype, "fecha_autorizacion", void 0);
exports.UsuarioAutorizacion = UsuarioAutorizacion = __decorate([
    (0, typeorm_1.Entity)('usuario_autorizaciones')
], UsuarioAutorizacion);
//# sourceMappingURL=usuario-autorizacion.entity.js.map