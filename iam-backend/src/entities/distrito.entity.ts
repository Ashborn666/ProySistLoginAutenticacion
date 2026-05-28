import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Provincia } from './provincia.entity';
import { Corregimiento } from './corregimiento.entity';

/**
 * Entidad que representa un distrito dentro de una provincia.
 * Tabla: distritos
 */
@Entity('distritos')
export class Distrito {
  @PrimaryGeneratedColumn()
  id: number;

  /** Provincia a la que pertenece el distrito */
  @ManyToOne(() => Provincia, (provincia) => provincia.distritos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'provincia_id' })
  provincia: Provincia;

  @Column({ type: 'int' })
  provincia_id: number;

  /** Nombre del distrito */
  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  /** Corregimientos que pertenecen a este distrito */
  @OneToMany(() => Corregimiento, (corregimiento) => corregimiento.distrito)
  corregimientos: Corregimiento[];
}
