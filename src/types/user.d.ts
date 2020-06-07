export interface User {
  accessToken: string;
  galleryUser: {
    email: string;
    firstName: string;
    lastName: string;
  };
}

export interface UserCredentials {
  email: string;
  password: string;
}

export interface UserSignUpInfo {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface UserSignUpResponse {
  email: string;
  firstName: string;
  lastName: string;
}
