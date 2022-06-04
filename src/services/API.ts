import { create } from 'apisauce';

const API = create({
  baseURL:
    process.env.REACT_APP_API_URL ||
    'https://api-proyecto-final-movil.herokuapp.com'
});

export const loginRequest = async (email: string, password: string) =>
  await API.post('/auth', {
    email,
    password,
    strategy: 'local'
  });

export const signUpRequest = async (body: any) =>
  await API.post('/users', body);
