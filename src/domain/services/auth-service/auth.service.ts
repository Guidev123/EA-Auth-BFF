import { Injectable } from '@nestjs/common';

@Injectable()
abstract class AuthService {
    abstract register(params: RegisterUserParams): Promise<LoginResponseDTO | null>
    abstract login(params: LoginUserParams): Promise<LoginResponseDTO | null>
}

export {AuthService}