import { Usuario } from './usuario.entity';
import { Dispositivo } from './dispositivo.entity';
import { LogAuditoria } from './log-auditoria.entity';
export declare class Sesion {
    id: string;
    usuario: Usuario;
    usuario_id: string;
    esta_activa: boolean;
    dispositivo_id: number;
    dispositivo: Dispositivo;
    token_hash: string;
    ip_direccion: string;
    creado_en: Date;
    ultimo_acceso_en: Date;
    expira_en: Date;
    logs_auditoria: LogAuditoria[];
}
