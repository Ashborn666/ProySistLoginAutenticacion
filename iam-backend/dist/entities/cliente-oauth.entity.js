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
exports.ClienteOauth = void 0;
const typeorm_1 = require("typeorm");
const usuario_autorizacion_entity_1 = require("./usuario-autorizacion.entity");
const token_oauth_entity_1 = require("./token-oauth.entity");
let ClienteOauth = class ClienteOauth {
    id;
    nombre;
    client_id;
    client_secret;
    redirect_uri;
    autorizaciones;
    tokensOauth;
};
exports.ClienteOauth = ClienteOauth;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ClienteOauth.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], ClienteOauth.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, unique: true }),
    __metadata("design:type", String)
], ClienteOauth.prototype, "client_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ClienteOauth.prototype, "client_secret", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ClienteOauth.prototype, "redirect_uri", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => usuario_autorizacion_entity_1.UsuarioAutorizacion, (autorizacion) => autorizacion.cliente),
    __metadata("design:type", Array)
], ClienteOauth.prototype, "autorizaciones", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => token_oauth_entity_1.TokenOauth, (tokenOauth) => tokenOauth.cliente),
    __metadata("design:type", Array)
], ClienteOauth.prototype, "tokensOauth", void 0);
exports.ClienteOauth = ClienteOauth = __decorate([
    (0, typeorm_1.Entity)('clientes_oauth')
], ClienteOauth);
//# sourceMappingURL=cliente-oauth.entity.js.map