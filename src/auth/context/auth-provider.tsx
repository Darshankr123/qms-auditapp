"use client";

import React, { useCallback, useEffect, useMemo, useReducer } from "react";
import { ActionMapType, AuthStateType, AuthUserType } from "../types";
import axios from "axios";
import { isValidToken, setSession } from "./utils";
import { AuthContext } from "./auth-context";
import { endpoints } from "@/utils/axios";

enum Types {
  INITIAL = "INITIAL",
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  LOGOUT = "LOGOUT",
}

type Payload = {
  [Types.INITIAL]: {
    user: AuthUserType;
  };
  [Types.LOGIN]: {
    user: AuthUserType;
  };
  [Types.REGISTER]: {
    user: AuthUserType;
  };
  [Types.LOGOUT]: undefined;
};

type ActionType = ActionMapType<Payload>[keyof ActionMapType<Payload>];

const initialState: AuthStateType = {
  user: null,
  loading: true,
};

const reducer = (state: AuthStateType, action: ActionType) => {
  if (action.type === Types.INITIAL) {
    return {
      loading: false,
      user: action.payload.user,
    };
  }
  if (action.type === Types.LOGIN) {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  if (action.type === Types.REGISTER) {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  if (action.type === Types.LOGOUT) {
    return {
      ...state,
      user: null,
    };
  }
  return state;
};

const STORAGE_KEY = "accessToken";

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    try {
      const accessToken = localStorage.getItem(STORAGE_KEY);
      const userId = localStorage.getItem("userId");

      if (accessToken && isValidToken(accessToken) && userId) {
        setSession(accessToken);

        const URL = `${endpoints.auth.me}/${userId}`;
        const response = await axios.get(URL);

        const current_user = response.data;

        dispatch({
          type: Types.INITIAL,
          payload: {
            user: current_user,
          },
        });
      } else {
        dispatch({
          type: Types.INITIAL,
          payload: {
            user: null,
          },
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: Types.INITIAL,
        payload: {
          user: null,
        },
      });
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  const login = useCallback(
    async (loginId: string, passCode: string) => {
      const data = {
        loginId,
        passCode,
      };

      const response = await axios.post(endpoints.auth.login, data);

      const user = response.data;
      setSession(user.accessToken);
      localStorage.setItem(STORAGE_KEY, user.accessToken);
      localStorage.setItem("userId", user.userId);
      initialize();
      dispatch({
        type: Types.LOGIN,
        payload: {
          user,
        },
      });
    },
    [initialize]
  );

  const register = useCallback(
    async (
      email: string,
      password: string,
      firstName: string,
      lastName: string
    ) => {
      const data = {
        email,
        password,
        firstName,
        lastName,
      };

      const response = await axios.post(endpoints.auth.register, data);

      const { accessToken, user } = response.data;

      localStorage.setItem(STORAGE_KEY, accessToken);
      localStorage.setItem("userId", user.userId);

      dispatch({
        type: Types.REGISTER,
        payload: {
          user,
        },
      });
    },
    []
  );

  const logout = useCallback(async () => {
    setSession(null);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem("userId");
    dispatch({
      type: Types.LOGOUT,
    });
  }, []);

  const checkAuthenticated = state.user ? "authenticated" : "unauthenticated";

  const status = state.loading ? "loading" : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user: state.user,
      method: "jwt",
      loading: status === "loading",
      authenticated: status === "authenticated",
      unauthenticated: status === "unauthenticated",

      login,
      register,
      logout,
    }),
    [login, logout, register, state.user, status]
  );

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
}
