import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Usuario } from './usuario.entity';
import { Dispositivo } from './dispositivo.entity';
import { LogAuditoria } from './log-auditoria.entity';

/**
 * Entidad que representa una sesión activa del usuario.
 * Tabla: sesiones
 */
@Entity('sesiones')
export class Sesion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /** Usuario al que pertenece la sesión */
  @ManyToOne(() => Usuario, (usuario) => usuario.sesiones, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column({ type: 'uuid' })
  usuario_id: string;

  /** Indica si la sesión sigue activa */
  @Column({ type: 'boolean', default: true })
  esta_activa: boolean;

  @Column({ type: 'int', nullable: true })
  dispositivo_id: number;

  /** Dispositivo desde el cual se creó la sesión */
  @ManyToOne(() => Dispositivo, { nullable: true })
  @JoinColumn({ name: 'dispositivo_id' })
  dispositivo: Dispositivo;

  /** Hash del token de sesión (para validación segura) */
  @Column({ type: 'varchar', length: 255, unique: true })
  token_hash: string;

  /** Dirección IP desde la que se conectó el usuario */
  @Column({ type: 'varchar', length: 45 })
  ip_direccion: string;

  /** Fecha de creación de la sesión */
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  creado_en: Date;

  /** Fecha del último acceso */
  @Column({ type: 'timestamp', default: () => 'now()' })
  ultimo_acceso_en: Date;

  /** Fecha de expiración de la sesión */
  @Column({ type: 'timestamp' })
  expira_en: Date;

  /** Logs de auditoría generados en esta sesión */
  @OneToMany(() => LogAuditoria, (log) => log.sesion)
  logs_auditoria: LogAuditoria[];
}
