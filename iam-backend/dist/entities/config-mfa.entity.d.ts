import { Usuario } from './usuario.entity';
export declare class ConfigMfa {
    id: number;
    usuario: Usuario;
    usuario_id: string;
    metodo: string;
    secret: string;
    activo: boolean;
}
