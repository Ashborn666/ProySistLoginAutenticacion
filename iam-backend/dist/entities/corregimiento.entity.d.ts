import { Distrito } from './distrito.entity';
export declare class Corregimiento {
    id: number;
    nombre: string;
    distrito_id: number;
    distrito: Distrito;
}
