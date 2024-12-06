import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { AuthService } from "src/domain/services/auth-service/auth.service";

@Injectable()
class IdentityAuthService implements AuthService{
    private identityAdminBaseUrl?: string;

    constructor(private httpService: HttpService) {
        this.identityAdminBaseUrl = process.env.IDENTITY_BASE_URL;
    }

    async register(params: RegisterUserParams): Promise<LoginResponseDTO | null> {
        const {name, email, cpf, password, passwordConfirm} = params;

        const url = `https://localhost:44305/api/v1/authentication`;
        const body = new URLSearchParams({
            name: name,
            email: email,
            cpf: cpf,
            password: password,
            passwordConfirm: passwordConfirm
        });

        try{
            const response = await this.httpService.axiosRef.post<LoginResponseDTO>(url, body);

            return {
                accessToken: response.data.accessToken,
                userToken: response.data.userToken,
                expiresIn: response.data.expiresIn
            }
        }
        catch(error){
            if(error.response.status === 400){
                return null;
            }
        }
    }
    login(params: LoginUserParams): Promise<LoginResponseDTO | null> {
        throw new Error("Method not implemented.");
    }
}

export {IdentityAuthService};