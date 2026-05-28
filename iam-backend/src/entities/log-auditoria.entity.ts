import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Sesion } from './sesion.entity';

/**
 * Entidad que registra las acciones de auditoría del sistema.
 * Tabla: logs_auditoria
 */
@Entity('logs_auditoria')
export class LogAuditoria {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  /** Sesión en la que se generó el log */
  @ManyToOne(() => Sesion, (sesion) => sesion.logsAuditoria, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'sesion_id' })
  sesion: Sesion;

  @Column({ type: 'uuid' })
  sesion_id: string;

  /** Acción realizada (ej: login, logout, actualizar_perfil) */
  @Column({ type: 'varchar', length: 100 })
  accion: string;

  /** Descripción detallada de la acción (opcional) */
  @Column({ type: 'text', nullable: true })
  descripcion: string | null;

  /** Fecha de creación del registro de auditoría */
  @CreateDateColumn({ type: 'timestamp' })
  creado_en: Date;
}
