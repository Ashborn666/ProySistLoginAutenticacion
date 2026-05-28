import { Usuario } from './usuario.entity';
import { ClienteOauth } from './cliente-oauth.entity';
export declare class TokenOauth {
    id: number;
    usuario: Usuario;
    usuario_id: string;
    cliente: ClienteOauth;
    cliente_id: number;
    token: string;
    expira_en: Date;
}
