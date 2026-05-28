import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

/**
 * Interfaz del payload decodificado del JWT.
 */
export interface JwtPayload {
  sub: string;
  email: string;
  iat?: number;
  exp?: number;
}

/**
 * Estrategia Passport para autenticación con JWT.
 * Extrae el token del header Authorization Bearer y lo valida
 * usando el secreto configurado en JWT_SECRET.
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:
        configService.get<string>('JWT_SECRET') ||
        'tu_clave_secreta_super_segura_cambiame_en_produccion',
    });
  }

  /**
   * Método de validación invocado después de decodificar el JWT.
   * Retorna el objeto que se adjuntará a request.user.
   * @param payload - Payload decodificado del token
   * @returns Objeto con userId y email del usuario autenticado
   */
  validate(payload: JwtPayload): { userId: string; email: string } {
    return { userId: payload.sub, email: payload.email };
  }
}
