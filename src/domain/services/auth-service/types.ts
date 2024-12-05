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

  interface RegisterUserParams{
    name: string;
    email: string;
    cpf: string;
    password: string;
    passwordConfirm: string;
  }

  interface LoginUserParams{
    email: string;
    password: string;
  }