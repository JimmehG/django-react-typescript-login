import {
  AuthProviderClass,
  AuthForm,
  AuthData,
  AuthUser,
} from 'types/authTypes';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export class BasicAuth implements AuthProviderClass {
  authorize({ username, password }: AuthForm): void {
    axios
      .post<AuthData>(
        `${API_URL}/auth/token/login`,
        { username, password },
        { withCredentials: true },
      )
      .then(response => {
        if (response.data.non_field_errors) {
          setErrors({ password: 'Incorrect' });
        } else if (response.data.token) {
          localStorage.setItem('auth_token', response.data.token);
        }
      });
  }
  signup(): void {
    throw new Error('Method not implemented.');
  }
  logout(returnTo?: string): void {
    throw new Error('Method not implemented.');
  }
  handleLoginCallback(dispatch: any): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  checkSession(): Promise<{ user: any; authResult: any }> {
    throw new Error('Method not implemented.');
  }
  userId(user: AuthUser): string | null {
    throw new Error('Method not implemented.');
  }
  userRoles(user: AuthUser): string[] | null {
    throw new Error('Method not implemented.');
  }
}
