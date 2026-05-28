import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Provincia } from './provincia.entity';

/**
 * Entidad que representa un país en el sistema.
 * Tabla: paises
 */
@Entity('paises')
export class Pais {
  @PrimaryGeneratedColumn()
  id: number;

  /** Nombre del país */
  @Column({ type: 'varchar', length: 100, unique: true })
  nombre: string;

  /** Código ISO del país (ej: PAN, USA) */
  @Column({ type: 'varchar', length: 3, unique: true })
  codigo_iso: string;

  /** Provincias que pertenecen a este país */
  @OneToMany(() => Provincia, (provincia) => provincia.pais)
  provincias: Provincia[];
}
