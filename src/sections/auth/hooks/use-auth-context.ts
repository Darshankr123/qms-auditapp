import { AuthContext } from "@/auth/context/auth-context";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error("useAuthContext constext must be inside AuthProvider");

  return context;
};
