import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Corregimiento } from './corregimiento.entity';
import { UsuarioRol } from './usuario-rol.entity';
import { Dispositivo } from './dispositivo.entity';
import { Sesion } from './sesion.entity';
import { ConfigMfa } from './config-mfa.entity';
import { Notificacion } from './notificacion.entity';
import { UsuarioAutorizacion } from './usuario-autorizacion.entity';
import { TokenOauth } from './token-oauth.entity';

/**
 * Entidad principal de usuario del sistema IAM.
 * Tabla: usuarios
 */
@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /** Nombre completo del usuario */
  @Column({ type: 'varchar', length: 150 })
  nombre: string;

  /** Correo electrónico único del usuario */
  @Column({ type: 'varchar', length: 150, unique: true })
  email: string;

  /** Hash de la contraseña (bcrypt) */
  @Column({ type: 'varchar', length: 255 })
  password_hash: string;

  /** Número de teléfono (opcional) */
  @Column({ type: 'varchar', length: 20, nullable: true })
  telefono: string | null;

  /** Biografía del usuario (opcional) */
  @Column({ type: 'text', nullable: true })
  bio: string | null;

  /** Corregimiento de residencia del usuario (opcional) */
  @ManyToOne(() => Corregimiento, (corregimiento) => corregimiento.usuarios, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'corregimiento_id' })
  corregimiento: Corregimiento | null;

  @Column({ type: 'int', nullable: true })
  corregimiento_id: number | null;

  /** Fecha de creación del registro */
  @CreateDateColumn({ type: 'timestamp' })
  creado_en: Date;

  /** Roles asignados al usuario */
  @OneToMany(() => UsuarioRol, (usuarioRol) => usuarioRol.usuario)
  usuarioRoles: UsuarioRol[];

  /** Dispositivos registrados del usuario */
  @OneToMany(() => Dispositivo, (dispositivo) => dispositivo.usuario)
  dispositivos: Dispositivo[];

  /** Sesiones del usuario */
  @OneToMany(() => Sesion, (sesion) => sesion.usuario)
  sesiones: Sesion[];

  /** Configuraciones MFA del usuario */
  @OneToMany(() => ConfigMfa, (configMfa) => configMfa.usuario)
  configuracionesMfa: ConfigMfa[];

  /** Notificaciones del usuario */
  @OneToMany(() => Notificacion, (notificacion) => notificacion.usuario)
  notificaciones: Notificacion[];

  /** Autorizaciones OAuth del usuario */
  @OneToMany(() => UsuarioAutorizacion, (autorizacion) => autorizacion.usuario)
  autorizaciones: UsuarioAutorizacion[];

  /** Tokens OAuth del usuario */
  @OneToMany(() => TokenOauth, (tokenOauth) => tokenOauth.usuario)
  tokensOauth: TokenOauth[];
}
