import { Provincia } from './provincia.entity';
import { Corregimiento } from './corregimiento.entity';
export declare class Distrito {
    id: number;
    provincia: Provincia;
    provincia_id: number;
    nombre: string;
    corregimientos: Corregimiento[];
}
