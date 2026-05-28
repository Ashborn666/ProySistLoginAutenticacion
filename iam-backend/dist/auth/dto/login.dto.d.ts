export declare class DispositivoInfoDto {
    token_dispositivo?: string;
    user_agent?: string;
    so?: string;
}
export declare class LoginDto {
    email: string;
    password: string;
    dispositivo_info?: DispositivoInfoDto;
}
