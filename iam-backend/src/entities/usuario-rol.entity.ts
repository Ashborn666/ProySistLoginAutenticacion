import {
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';
import { Usuario } from './usuario.entity';
import { Rol } from './rol.entity';

/**
 * Entidad de tabla intermedia que relaciona usuarios con roles.
 * Tabla: usuario_roles
 * Clave primaria compuesta: (usuario_id, rol_id)
 */
@Entity('usuario_roles')
export class UsuarioRol {
  /** ID del usuario (parte de la PK compuesta) */
  @PrimaryColumn({ type: 'uuid' })
  usuario_id: string;

  /** ID del rol (parte de la PK compuesta) */
  @PrimaryColumn({ type: 'int' })
  rol_id: number;

  /** Relación con el usuario */
  @ManyToOne(() => Usuario, (usuario) => usuario.usuarioRoles, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  /** Relación con el rol */
  @ManyToOne(() => Rol, (rol) => rol.usuarioRoles, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'rol_id' })
  rol: Rol;
}
