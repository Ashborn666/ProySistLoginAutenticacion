import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Usuario } from './usuario.entity';

/**
 * Entidad que almacena la configuración MFA de un usuario.
 * Tabla: config_mfa
 */
@Entity('config_mfa')
export class ConfigMfa {
  @PrimaryGeneratedColumn()
  id: number;

  /** Usuario al que pertenece esta configuración MFA */
  @ManyToOne(() => Usuario, (usuario) => usuario.configuracionesMfa, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column({ type: 'uuid' })
  usuario_id: string;

  /** Método de autenticación multifactor (ej: totp, sms, email) */
  @Column({ type: 'varchar', length: 50 })
  metodo: string;

  /** Secreto o clave para el método MFA */
  @Column({ type: 'varchar', length: 255 })
  secret: string;

  /** Indica si la configuración MFA está activa */
  @Column({ type: 'boolean', default: false })
  activo: boolean;
}
