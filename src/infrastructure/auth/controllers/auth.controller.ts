import { Body, Controller, Post, Res } from "@nestjs/common";
import { RegisterBodyDTO } from "../dtos/register-body";
import { RegisterUserUseCase } from "src/domain/use-cases/register-user/register-user";
import { InvalidCredentialsError } from "src/domain/use-cases/errors/invalid-credentials";
import { Response } from 'express';

@Controller('auth')
class AuthController{
    constructor(private registerUserUseCase: RegisterUserUseCase){
    }

    @Post('register')
    async register(@Body() body: RegisterBodyDTO, @Res({passthrough: true}) response: Response): Promise<{ accessToken: string; userToken: UserTokenDTO; expiresIn: number; message?: undefined; } | { message: string; accessToken?: undefined; userToken?: undefined; expiresIn?: undefined; }>{
        const {name, email, cpf, password, passwordConfirm} = body;

        try{
            const useCaseResponse = await this.registerUserUseCase.execute({
                name,
                email,
                cpf,
                password,
                passwordConfirm
            });

            return {
                accessToken: useCaseResponse.accessToken,
                userToken: useCaseResponse.userToken,
                expiresIn: useCaseResponse.expiresIn
            }
        }
        catch(error){
            if(error instanceof InvalidCredentialsError){
                response.status(401);

                return{
                    message: error.message
                }
            }

            throw new Error();
        }
    }
}

export {AuthController};