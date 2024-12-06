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
        const { name, email, cpf, password, confirmPassword } = params;
    
        const url = `http://localhost:5242/api/v1/authentication`;
        const body = {
            name,
            email,
            cpf,
            password,
            confirmPassword,
        };
    
        try {
            const response = await this.httpService.axiosRef.post<ApiResponse<LoginResponseDTO>>(url, body, {
                headers: { 'Content-Type': 'application/json' },
            });
            const responseData = response.data.data;
            return {
                accessToken: responseData.accessToken,
                userToken: responseData.userToken,
                expiresIn: responseData.expiresIn,
            };
        } catch (error) {
            if (error.response && error.response.status === 400) {
                console.error('Erro 400:', error.response.data);
                return null;
            }
            throw error;
        }
    }
    
    login(params: LoginUserParams): Promise<LoginResponseDTO | null> {
        throw new Error("Method not implemented.");
    }
}

export {IdentityAuthService};