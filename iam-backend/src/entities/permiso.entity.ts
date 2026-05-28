import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RolPermiso } from './rol-permiso.entity';

/**
 * Entidad que representa un permiso del sistema RBAC.
 * Tabla: permisos
 */
@Entity('permisos')
export class Permiso {
  @PrimaryGeneratedColumn()
  id: number;

  /** Nombre único del permiso (ej: crear_usuario, eliminar_rol) */
  @Column({ type: 'varchar', length: 50, unique: true })
  nombre: string;

  /** Descripción del permiso (opcional) */
  @Column({ type: 'varchar', length: 255, nullable: true })
  descripcion: string | null;

  /** Relación con la tabla intermedia rol_permisos */
  @OneToMany(() => RolPermiso, (rolPermiso) => rolPermiso.permiso)
  rolPermisos: RolPermiso[];
}
