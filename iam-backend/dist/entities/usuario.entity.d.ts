import { Corregimiento } from './corregimiento.entity';
import { UsuarioRol } from './usuario-rol.entity';
import { Dispositivo } from './dispositivo.entity';
import { Sesion } from './sesion.entity';
import { ConfigMfa } from './config-mfa.entity';
import { Notificacion } from './notificacion.entity';
import { UsuarioAutorizacion } from './usuario-autorizacion.entity';
import { TokenOauth } from './token-oauth.entity';
export declare class Usuario {
    id: string;
    nombre: string;
    email: string;
    password_hash: string;
    telefono: string | null;
    bio: string | null;
    corregimiento: Corregimiento | null;
    corregimiento_id: number | null;
    creado_en: Date;
    usuarioRoles: UsuarioRol[];
    dispositivos: Dispositivo[];
    sesiones: Sesion[];
    configuracionesMfa: ConfigMfa[];
    notificaciones: Notificacion[];
    autorizaciones: UsuarioAutorizacion[];
    tokensOauth: TokenOauth[];
}
