import { SetMetadata } from '@nestjs/common';

/** Clave de metadatos para los roles requeridos */
export const ROLES_KEY = 'roles';

/**
 * Decorador que establece los roles requeridos para acceder a una ruta.
 * Usar en combinación con RolesGuard.
 * @param roles - Lista de nombres de roles permitidos
 * @example @Roles('ADMIN', 'MODERATOR')
 */
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
