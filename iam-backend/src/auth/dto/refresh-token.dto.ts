import { IsNotEmpty, IsString } from 'class-validator';

/**
 * DTO para solicitar la renovación del token de acceso.
 */
export class RefreshTokenDto {
  @IsString()
  @IsNotEmpty({ message: 'El refresh token es obligatorio' })
  refresh_token: string;
}
