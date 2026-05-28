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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const usuario_rol_entity_1 = require("../../entities/usuario-rol.entity");
const roles_decorator_1 = require("../decorators/roles.decorator");
let RolesGuard = class RolesGuard {
    reflector;
    usuarioRolRepository;
    constructor(reflector, usuarioRolRepository) {
        this.reflector = reflector;
        this.usuarioRolRepository = usuarioRolRepository;
    }
    async canActivate(context) {
        const rolesRequeridos = this.reflector.getAllAndOverride(roles_decorator_1.ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!rolesRequeridos || rolesRequeridos.length === 0) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        if (!user || !user.userId) {
            return false;
        }
        const usuarioRoles = await this.usuarioRolRepository.find({
            where: { usuario_id: user.userId },
            relations: { rol: true },
        });
        const nombresRoles = usuarioRoles.map((ur) => ur.rol.nombre);
        return rolesRequeridos.some((rol) => nombresRoles.includes(rol));
    }
};
exports.RolesGuard = RolesGuard;
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(usuario_rol_entity_1.UsuarioRol)),
    __metadata("design:paramtypes", [core_1.Reflector,
        typeorm_2.Repository])
], RolesGuard);
//# sourceMappingURL=roles.guard.js.map