import { Provincia } from './provincia.entity';
export declare class Pais {
    id: number;
    nombre: string;
    codigo_iso: string;
    provincias: Provincia[];
}
