import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

/**
 * DTO con información del dispositivo desde el cual se inicia sesión.
 */
export class DispositivoInfoDto {
  @IsOptional()
  @IsString()
  token_dispositivo?: string;

  @IsOptional()
  @IsString()
  user_agent?: string;

  @IsOptional()
  @IsString()
  so?: string;
}

/**
 * DTO para el inicio de sesión.
 * Incluye credenciales y opcionalmente información del dispositivo.
 */
export class LoginDto {
  @IsEmail({}, { message: 'Debe ser un email válido' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'La contraseña es obligatoria' })
  password: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => DispositivoInfoDto)
  dispositivo_info?: DispositivoInfoDto;
}
