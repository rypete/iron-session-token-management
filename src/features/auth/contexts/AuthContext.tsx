import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

interface IAuthContext {
  login: () => void;
  logout: () => void;
  loggedIn: boolean;
  loading: boolean;
}

const AuthContext = React.createContext<IAuthContext | undefined>(undefined);

export const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationFn: () => axios.get("/api/auth/login"),
    onSuccess: () => {
      queryClient.invalidateQueries(["auth"]);
    },
  });

  const logoutMutation = useMutation({
    mutationFn: () => axios.get("/api/auth/logout"),
    onSuccess: () => {
      queryClient.invalidateQueries(["auth"]);
    },
  });

  const auth = useQuery({
    queryKey: ["auth"],
    queryFn: () =>
      axios.get<boolean>("/api/auth/validate").then((res) => res.data),
  });

  return (
    <AuthContext.Provider
      value={{
        login: () => loginMutation.mutate(),
        logout: () => logoutMutation.mutate(),
        loggedIn: auth.data || false,
        loading: auth.isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
