import { Injectable } from "@nestjs/common";
import { AuthService } from "src/domain/services/auth-service/auth.service";
import { InvalidCredentialsError } from "../errors/invalid-credentials";

interface RegisterUserUseCaseParams{
    name: string;
    email: string;
    cpf: string;
    password: string;
    passwordConfirm: string;
}

interface ClaimDTO {
    value: string;
    type: string;
}
  
interface UserTokenDTO {
    id: string;
    email: string;
    claims: ClaimDTO[];
}
  
interface LoginResponseDTO {
    accessToken: string;
    userToken: UserTokenDTO;
    expiresIn: number;
}

interface RegisterUserUseCaseResponse {
    accessToken: string;
    userToken: UserTokenDTO;
    expiresIn: number;
}

@Injectable()
class RegisterUserUseCase{
    constructor(private readonly authService: AuthService){}

    async excecute(params: RegisterUserUseCaseParams): Promise<RegisterUserUseCaseResponse | null>{
        const {name, email, cpf, password, passwordConfirm} = params;

        const registerResponse = await this.authService.register({name, email, cpf, password, passwordConfirm});

        if(!registerResponse){
            throw new InvalidCredentialsError();
        }

        return{
            accessToken: registerResponse.accessToken,
            userToken: registerResponse.userToken,
            expiresIn: registerResponse.expiresIn
        }
    }
}

export{RegisterUserUseCase};