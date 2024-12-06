import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from 'src/domain/services/auth-service/auth.service';
import { IdentityAuthService } from './adapters/identity-auth.service';
import { RegisterUserUseCase } from 'src/domain/use-cases/register-user';

@Module({
    imports: [HttpModule],
    controllers: [AuthController],
    providers: [
        {
            provide: AuthService,
            useClass: IdentityAuthService
        },
        RegisterUserUseCase
    ]
})
class AuthModule {}

export { AuthModule };
