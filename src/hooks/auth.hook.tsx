import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useContext
} from 'react';
import { history } from '../components/Router';
import { useIonToast } from '@ionic/react';
// Services
import { loginRequest } from '../services/API';
import { storage } from '../services/Storage';

export interface User {
  email: string;
  full_name: string;
  age?: number;
  accessToken?: string;
}
export interface AuthProviderProps {
  children?: any;
}

interface AuthContextType {
  // Especificamos la interface del context
  user?: User;
  loading: boolean;
  error?: any;
  login: (email: string, password: string) => void;
  signUp?: (email: string, name: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | any>(null);
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [present] = useIonToast();
  useEffect(() => {
    if (error) {
      setError(null);
    }
  }, [history?.location?.pathname, error, user]);
  useEffect(() => {
    // Refrescamos la sesión
    async function recallData() {
      // Inicializamos el storage
      await storage.create();
      const userTmp: any = await storage.get('user');

      if (userTmp !== '') {
        const parsedData = JSON.parse(userTmp);
        setUser(parsedData);
      }
    }
    recallData();
  }, []);
  function login(email: string, password: string) {
    setLoading(true);
    loginRequest(email, password)
      .then(async response => {
        setLoading(false);
        if (response.ok) {
          setUser(response.data);
          await storage.set('user', JSON.stringify(response.data));
          history.push('/home');
        } else {
          present('Email o contraseña incorrectos', 2000);
        }
      })
      .catch(error => {
        setLoading(false);
        setError(error);
        present('Hubo un error al iniciar sesión', 3000);
      });
  }
  async function logout() {
    await storage.clear();
    setUser(null);
    history.push('/login');
  }
  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      error,
      login,
      logout
    }),
    [user, loading, error]
  );

  // We only want to render the underlying app after we
  // assert for the presence of a current user.
  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
};
export default function useAuth() {
  return useContext(AuthContext);
}
