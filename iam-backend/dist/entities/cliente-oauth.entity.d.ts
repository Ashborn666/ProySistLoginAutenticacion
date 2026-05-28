import { UsuarioAutorizacion } from './usuario-autorizacion.entity';
import { TokenOauth } from './token-oauth.entity';
export declare class ClienteOauth {
    id: number;
    nombre: string;
    client_id: string;
    client_secret: string;
    redirect_uri: string;
    autorizaciones: UsuarioAutorizacion[];
    tokensOauth: TokenOauth[];
}
