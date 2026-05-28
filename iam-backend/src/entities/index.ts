/**
 * Barrel file que re-exporta todas las entidades del sistema IAM.
 * Importar desde aquí para acceso centralizado a las entidades.
 */

// Entidades geográficas
export { Pais } from './pais.entity';
export { Provincia } from './provincia.entity';
export { Distrito } from './distrito.entity';
export { Corregimiento } from './corregimiento.entity';

// Entidad principal de usuario
export { Usuario } from './usuario.entity';

// RBAC (Control de Acceso Basado en Roles)
export { Rol } from './rol.entity';
export { Permiso } from './permiso.entity';
export { UsuarioRol } from './usuario-rol.entity';
export { RolPermiso } from './rol-permiso.entity';

// Autenticación multifactor
export { ConfigMfa } from './config-mfa.entity';

// Dispositivos y sesiones
export { Dispositivo } from './dispositivo.entity';
export { Sesion } from './sesion.entity';

// Auditoría
export { LogAuditoria } from './log-auditoria.entity';

// OAuth
export { ClienteOauth } from './cliente-oauth.entity';
export { UsuarioAutorizacion } from './usuario-autorizacion.entity';
export { TokenOauth } from './token-oauth.entity';

// Notificaciones
export { Notificacion } from './notificacion.entity';
