import { Sesion } from './sesion.entity';
export declare class LogAuditoria {
    id: number;
    sesion: Sesion;
    sesion_id: string;
    accion: string;
    descripcion: string | null;
    creado_en: Date;
}
