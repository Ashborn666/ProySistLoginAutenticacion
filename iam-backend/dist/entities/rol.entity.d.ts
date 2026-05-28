import { UsuarioRol } from './usuario-rol.entity';
import { RolPermiso } from './rol-permiso.entity';
export declare class Rol {
    id: number;
    nombre: string;
    descripcion: string | null;
    usuarioRoles: UsuarioRol[];
    rolPermisos: RolPermiso[];
}
