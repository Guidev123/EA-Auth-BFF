interface ClaimDTO {
    value: string;
    type: string;
  }
  interface ApiResponse<T> {
    data: T; 
    message: string;
    errors: string[];
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

  interface RegisterUserParams{
    name: string;
    email: string;
    cpf: string;
    password: string;
    confirmPassword: string;
  }

  interface LoginUserParams{
    email: string;
    password: string;
  }