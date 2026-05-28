import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Pais } from './pais.entity';
import { Distrito } from './distrito.entity';

/**
 * Entidad que representa una provincia dentro de un país.
 * Tabla: provincias
 */
@Entity('provincias')
export class Provincia {
  @PrimaryGeneratedColumn()
  id: number;

  /** País al que pertenece la provincia */
  @ManyToOne(() => Pais, (pais) => pais.provincias, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'pais_id' })
  pais: Pais;

  @Column({ type: 'int' })
  pais_id: number;

  /** Nombre de la provincia */
  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  /** Distritos que pertenecen a esta provincia */
  @OneToMany(() => Distrito, (distrito) => distrito.provincia)
  distritos: Distrito[];
}
