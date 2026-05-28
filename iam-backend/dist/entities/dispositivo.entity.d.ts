import { Usuario } from './usuario.entity';
import { Sesion } from './sesion.entity';
export declare class Dispositivo {
    id: number;
    usuario: Usuario;
    usuario_id: string;
    token_dispositivo: string | null;
    user_agent: string | null;
    so: string | null;
    sesiones: Sesion[];
}
