import {
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
  CreateDateColumn,
} from 'typeorm';
import { Usuario } from './usuario.entity';
import { ClienteOauth } from './cliente-oauth.entity';

/**
 * Entidad de tabla intermedia que registra las autorizaciones OAuth de usuarios.
 * Tabla: usuario_autorizaciones
 * Clave primaria compuesta: (usuario_id, cliente_id)
 */
@Entity('usuario_autorizaciones')
export class UsuarioAutorizacion {
  /** ID del usuario (parte de la PK compuesta) */
  @PrimaryColumn({ type: 'uuid' })
  usuario_id: string;

  /** ID del cliente OAuth (parte de la PK compuesta) */
  @PrimaryColumn({ type: 'int' })
  cliente_id: number;

  /** Relación con el usuario */
  @ManyToOne(() => Usuario, (usuario) => usuario.autorizaciones, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  /** Relación con el cliente OAuth */
  @ManyToOne(() => ClienteOauth, (cliente) => cliente.autorizaciones, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'cliente_id' })
  cliente: ClienteOauth;

  /** Fecha en la que el usuario autorizó al cliente */
  @CreateDateColumn({ type: 'timestamp' })
  fecha_autorizacion: Date;
}
