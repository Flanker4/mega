export interface AuthState {
  user?: User;
  isLoading: boolean;
}

export interface User {
  token: string;
  username: string;
  email: string;
}
