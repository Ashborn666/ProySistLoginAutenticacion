import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Repository } from 'typeorm';
import { UsuarioRol } from '../../entities/usuario-rol.entity';
export declare class RolesGuard implements CanActivate {
    private readonly reflector;
    private readonly usuarioRolRepository;
    constructor(reflector: Reflector, usuarioRolRepository: Repository<UsuarioRol>);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
