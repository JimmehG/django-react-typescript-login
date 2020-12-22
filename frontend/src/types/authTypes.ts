import { AnyEventObject, PayloadSender } from 'xstate';

export interface AuthData {
  token?: string;
  non_field_errors?: string[];
}

export interface AuthResult {}

export interface AuthUser {}

export interface AuthForm {
  username: string;
  password: string;
}

export interface AuthState {
  user: AuthUser;
  authResult?: AuthResult;
  expiresAt: Date | null;
  isAuthenticating: boolean;
  errorType?: string;
  error?: Error;
  config: {
    navigate: Function;
    authProvider?: AuthProviderClass;
    callbackDomain?: string;
  };
}

export interface AuthProviderClass {
  authorize(returnTo: AuthForm): void;
  signup(): void;
  logout(returnTo?: string): void;
  handleLoginCallback(
    dispatch: PayloadSender<AnyEventObject>,
  ): Promise<boolean>;
  checkSession(): Promise<{
    user: AuthUser;
    authResult: AuthResult;
  }>;
  userId(user: AuthUser): string | null;
  userRoles(user: AuthUser): string[] | null;
}

export interface useAuthInterface {
  (): {
    isAuthenticating: boolean;
    isAuthenticated: () => boolean;
    isAuthorized: (role: string | string[]) => boolean;
    user: AuthUser;
    userId?: string | null;
    authResult?: AuthResult;
    login: () => void;
    signup: () => void;
    logout: () => void;
    handleAuthentication: ({
      postLoginRoute,
    }: {
      postLoginRoute?: string;
    }) => void;
    dispatch: (eventName: string, eventData?: any) => void;
  };
}
