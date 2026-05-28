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
exports.Rol = void 0;
const typeorm_1 = require("typeorm");
const usuario_rol_entity_1 = require("./usuario-rol.entity");
const rol_permiso_entity_1 = require("./rol-permiso.entity");
let Rol = class Rol {
    id;
    nombre;
    descripcion;
    usuarioRoles;
    rolPermisos;
};
exports.Rol = Rol;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Rol.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, unique: true }),
    __metadata("design:type", String)
], Rol.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", Object)
], Rol.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => usuario_rol_entity_1.UsuarioRol, (usuarioRol) => usuarioRol.rol),
    __metadata("design:type", Array)
], Rol.prototype, "usuarioRoles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rol_permiso_entity_1.RolPermiso, (rolPermiso) => rolPermiso.rol),
    __metadata("design:type", Array)
], Rol.prototype, "rolPermisos", void 0);
exports.Rol = Rol = __decorate([
    (0, typeorm_1.Entity)('roles')
], Rol);
//# sourceMappingURL=rol.entity.js.map