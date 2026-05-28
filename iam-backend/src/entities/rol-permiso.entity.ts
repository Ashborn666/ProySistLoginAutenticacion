import {
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';
import { Rol } from './rol.entity';
import { Permiso } from './permiso.entity';

/**
 * Entidad de tabla intermedia que relaciona roles con permisos.
 * Tabla: rol_permisos
 * Clave primaria compuesta: (rol_id, permiso_id)
 */
@Entity('rol_permisos')
export class RolPermiso {
  /** ID del rol (parte de la PK compuesta) */
  @PrimaryColumn({ type: 'int' })
  rol_id: number;

  /** ID del permiso (parte de la PK compuesta) */
  @PrimaryColumn({ type: 'int' })
  permiso_id: number;

  /** Relación con el rol */
  @ManyToOne(() => Rol, (rol) => rol.rolPermisos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'rol_id' })
  rol: Rol;

  /** Relación con el permiso */
  @ManyToOne(() => Permiso, (permiso) => permiso.rolPermisos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'permiso_id' })
  permiso: Permiso;
}
