import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Usuario } from './usuario.entity';

/**
 * Entidad que representa una notificación enviada a un usuario.
 * Tabla: notificaciones
 */
@Entity('notificaciones')
export class Notificacion {
  @PrimaryGeneratedColumn()
  id: number;

  /** Usuario destinatario de la notificación */
  @ManyToOne(() => Usuario, (usuario) => usuario.notificaciones, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column({ type: 'uuid' })
  usuario_id: string;

  /** Contenido del mensaje de la notificación */
  @Column({ type: 'text' })
  mensaje: string;

  /** Canal de envío (ej: email, sms, push) */
  @Column({ type: 'varchar', length: 50 })
  canal: string;

  /** Indica si la notificación ha sido leída */
  @Column({ type: 'boolean', default: false })
  leido: boolean;

  /** Fecha de creación de la notificación */
  @CreateDateColumn({ type: 'timestamp' })
  creado_en: Date;
}
