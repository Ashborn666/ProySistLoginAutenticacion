import { RolPermiso } from './rol-permiso.entity';
export declare class Permiso {
    id: number;
    nombre: string;
    descripcion: string | null;
    rolPermisos: RolPermiso[];
}
