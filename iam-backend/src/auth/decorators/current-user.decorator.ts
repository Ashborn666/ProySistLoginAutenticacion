import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * Decorador de parámetro que extrae el usuario actual del request.
 * El usuario es adjuntado por la estrategia JWT después de la autenticación.
 *
 * @example
 * @Get('perfil')
 * obtenerPerfil(@CurrentUser() user: { userId: string; email: string }) {
 *   return user;
 * }
 *
 * @example
 * @Get('email')
 * obtenerEmail(@CurrentUser('email') email: string) {
 *   return email;
 * }
 */
export const CurrentUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    // Si se especifica una propiedad, retornar solo esa propiedad
    return data ? user?.[data] : user;
  },
);
