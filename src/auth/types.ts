import { PopupLoginOptions, RedirectLoginOptions } from "@auth0/auth0-react";

export type ActionMapType<M extends { [index: string]: any }> = {
  [key in keyof M]: M[key] extends undefined
    ? {
        type: key;
      }
    : {
        type: key;
        payload: M[key];
      };
};

export type AuthUserType = null | Record<string, any>;

export type AuthStateType = {
  status?: string;
  loading: boolean;
  user: AuthUserType;
};

type CanRemove = {
  login?: (email: string, password: string) => Promise<void>;
  register?: (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => Promise<void>;

  loginWithPopUp?: (options?: PopupLoginOptions) => Promise<void>;
  loginWithRedirect?: (options?: RedirectLoginOptions) => Promise<void>;

  confirmRegister?: (email: string, code: string) => Promise<void>;
  forgotPassword?: (loginId: string) => Promise<void>;
  resendCodeRegister?: (email: string) => Promise<void>;
  newPassword?: (
    email: string,
    code: string,
    password: string
  ) => Promise<void>;
};

export type JWTContextType = CanRemove & {
  user: AuthUserType;
  method: string;
  loading: boolean;
  authenticated: boolean;
  unauthenticated: boolean;
  login: (loginId: string, passCode: string) => Promise<void>;
  register: (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => Promise<void>;
  logout: () => Promise<void>;
};
