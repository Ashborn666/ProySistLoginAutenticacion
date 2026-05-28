import { IsEmail, IsNotEmpty, IsString, MinLength, IsOptional, IsInt } from 'class-validator';

/**
 * DTO para el registro de un nuevo usuario.
 * Valida los campos requeridos y opcionales del formulario de registro.
 */
export class RegisterDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;

  @IsEmail({}, { message: 'Debe ser un email válido' })
  email: string;

  @IsString()
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  password: string;

  @IsOptional()
  @IsString()
  telefono?: string;

  @IsOptional()
  @IsInt()
  corregimiento_id?: number;
}
