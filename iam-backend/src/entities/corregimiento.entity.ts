import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Distrito } from './distrito.entity';

/**
 * Entidad que representa un corregimiento (nivel más bajo de la jerarquía geográfica).
 * Tabla: corregimientos
 */
@Entity('corregimientos')
export class Corregimiento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @Column({ type: 'int', nullable: true })
  distrito_id: number;

  @ManyToOne(() => Distrito, { nullable: true })
  @JoinColumn({ name: 'distrito_id' })
  distrito: Distrito;
}
