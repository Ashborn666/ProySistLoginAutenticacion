import { Usuario } from './usuario.entity';
import { ClienteOauth } from './cliente-oauth.entity';
export declare class UsuarioAutorizacion {
    usuario_id: string;
    cliente_id: number;
    usuario: Usuario;
    cliente: ClienteOauth;
    fecha_autorizacion: Date;
}
