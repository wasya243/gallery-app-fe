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
