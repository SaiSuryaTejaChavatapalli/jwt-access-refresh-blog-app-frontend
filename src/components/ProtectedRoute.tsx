import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "../axiosInstance";

type ProtectedRouteProps = { children: React.ReactNode };

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [auth, setAuth] = useState<null | boolean>(null);

  console.log("Auth", auth);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("auth/verify-token", {
          withCredentials: true,
        });
        setAuth(response.data.isAuthenticated);
      } catch {
        setAuth(false);
      }
    };
    checkAuth();
  }, []);

  if (auth === null) return <div>Loading...</div>;

  return auth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
