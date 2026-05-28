import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioRol } from '../../entities/usuario-rol.entity';
import { ROLES_KEY } from '../decorators/roles.decorator';

interface RequestWithUser {
  user?: {
    userId: string;
    email: string;
  };
}

/**
 * Guard que verifica si el usuario tiene los roles requeridos.
 * Consulta la base de datos para verificar los roles del usuario autenticado.
 */
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    @InjectRepository(UsuarioRol)
    private readonly usuarioRolRepository: Repository<UsuarioRol>,
  ) {}

  /**
   * Determina si el usuario tiene acceso basándose en los roles requeridos.
   * @param context - Contexto de ejecución de la solicitud
   * @returns true si el usuario tiene al menos uno de los roles requeridos
   */
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const rolesRequeridos = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    // Si no se requieren roles, permitir acceso
    if (!rolesRequeridos || rolesRequeridos.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest<RequestWithUser>();
    const user = request.user;

    if (!user || !user.userId) {
      return false;
    }

    // Consultar los roles del usuario en la base de datos
    const usuarioRoles = await this.usuarioRolRepository.find({
      where: { usuario_id: user.userId },
      relations: { rol: true },
    });

    const nombresRoles = usuarioRoles.map((ur) => ur.rol.nombre);

    // Verificar si el usuario tiene al menos uno de los roles requeridos
    return rolesRequeridos.some((rol) => nombresRoles.includes(rol));
  }
}
