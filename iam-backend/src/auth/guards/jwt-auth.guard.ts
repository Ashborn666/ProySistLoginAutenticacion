import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Guard de autenticación JWT.
 * Protege las rutas que requieren un token JWT válido.
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
