import { Usuario } from './usuario.entity';
export declare class Notificacion {
    id: number;
    usuario: Usuario;
    usuario_id: string;
    mensaje: string;
    canal: string;
    leido: boolean;
    creado_en: Date;
}
