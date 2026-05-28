import { Pais } from './pais.entity';
import { Distrito } from './distrito.entity';
export declare class Provincia {
    id: number;
    pais: Pais;
    pais_id: number;
    nombre: string;
    distritos: Distrito[];
}
