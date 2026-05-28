import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Usuario } from './usuario.entity';
import { ClienteOauth } from './cliente-oauth.entity';

/**
 * Entidad que almacena los tokens OAuth emitidos.
 * Tabla: tokens_oauth
 */
@Entity('tokens_oauth')
export class TokenOauth {
  @PrimaryGeneratedColumn()
  id: number;

  /** Usuario al que pertenece el token */
  @ManyToOne(() => Usuario, (usuario) => usuario.tokensOauth, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column({ type: 'uuid' })
  usuario_id: string;

  /** Cliente OAuth para el cual se emitió el token */
  @ManyToOne(() => ClienteOauth, (cliente) => cliente.tokensOauth, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'cliente_id' })
  cliente: ClienteOauth;

  @Column({ type: 'int' })
  cliente_id: number;

  /** Token OAuth único */
  @Column({ type: 'varchar', length: 255, unique: true })
  token: string;

  /** Fecha de expiración del token */
  @Column({ type: 'timestamp' })
  expira_en: Date;
}
