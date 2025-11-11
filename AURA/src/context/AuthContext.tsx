// src/context/AuthContext.tsx
import React, { createContext, useState, useEffect } from 'react';

interface User {
  id_usuario: number;
  nome: string;
  email: string;
  ultimo_login: string;
}

interface AuthContextData {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean; // <-- adicionamos aqui
  login: (data: { user: User; token: string }) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Recuperar token e user do localStorage ao inicializar
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (data: { user: User; token: string }) => {
    setUser(data.user);
    setToken(data.token);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoggedIn: !!user && !!token, // <-- aqui definimos se está logado
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
