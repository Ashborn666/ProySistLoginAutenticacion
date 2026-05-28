import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Usuario } from './usuario.entity';
import { Sesion } from './sesion.entity';

/**
 * Entidad que representa un dispositivo registrado de un usuario.
 * Tabla: dispositivos
 */
@Entity('dispositivos')
export class Dispositivo {
  @PrimaryGeneratedColumn()
  id: number;

  /** Usuario propietario del dispositivo */
  @ManyToOne(() => Usuario, (usuario) => usuario.dispositivos, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column({ type: 'uuid' })
  usuario_id: string;

  /** Token único del dispositivo (ej: push notification token) */
  @Column({ type: 'varchar', length: 255, unique: true, nullable: true })
  token_dispositivo: string | null;

  /** User-Agent del navegador o aplicación */
  @Column({ type: 'varchar', length: 255, nullable: true })
  user_agent: string | null;

  /** Sistema operativo del dispositivo */
  @Column({ type: 'varchar', length: 50, nullable: true })
  so: string | null;

  /** Sesiones iniciadas desde este dispositivo */
  @OneToMany(() => Sesion, (sesion) => sesion.dispositivo)
  sesiones: Sesion[];
}
