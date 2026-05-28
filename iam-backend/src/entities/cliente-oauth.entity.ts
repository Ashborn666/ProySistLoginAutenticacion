import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { UsuarioAutorizacion } from './usuario-autorizacion.entity';
import { TokenOauth } from './token-oauth.entity';

/**
 * Entidad que representa un cliente OAuth registrado en el sistema.
 * Tabla: clientes_oauth
 */
@Entity('clientes_oauth')
export class ClienteOauth {
  @PrimaryGeneratedColumn()
  id: number;

  /** Nombre descriptivo del cliente OAuth */
  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  /** Identificador único del cliente OAuth */
  @Column({ type: 'varchar', length: 100, unique: true })
  client_id: string;

  /** Secreto del cliente OAuth (almacenado de forma segura) */
  @Column({ type: 'varchar', length: 255 })
  client_secret: string;

  /** URI de redirección autorizada */
  @Column({ type: 'varchar', length: 255 })
  redirect_uri: string;

  /** Autorizaciones de usuarios para este cliente */
  @OneToMany(() => UsuarioAutorizacion, (autorizacion) => autorizacion.cliente)
  autorizaciones: UsuarioAutorizacion[];

  /** Tokens OAuth emitidos para este cliente */
  @OneToMany(() => TokenOauth, (tokenOauth) => tokenOauth.cliente)
  tokensOauth: TokenOauth[];
}
