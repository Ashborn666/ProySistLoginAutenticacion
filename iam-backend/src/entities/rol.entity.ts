import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { UsuarioRol } from './usuario-rol.entity';
import { RolPermiso } from './rol-permiso.entity';

/**
 * Entidad que representa un rol del sistema RBAC.
 * Tabla: roles
 */
@Entity('roles')
export class Rol {
  @PrimaryGeneratedColumn()
  id: number;

  /** Nombre único del rol (ej: admin, usuario, moderador) */
  @Column({ type: 'varchar', length: 50, unique: true })
  nombre: string;

  /** Descripción del rol (opcional) */
  @Column({ type: 'varchar', length: 255, nullable: true })
  descripcion: string | null;

  /** Relación con la tabla intermedia usuario_roles */
  @OneToMany(() => UsuarioRol, (usuarioRol) => usuarioRol.rol)
  usuarioRoles: UsuarioRol[];

  /** Relación con la tabla intermedia rol_permisos */
  @OneToMany(() => RolPermiso, (rolPermiso) => rolPermiso.rol)
  rolPermisos: RolPermiso[];
}
