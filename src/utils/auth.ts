import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'user_data';

export interface User {
  email: string;
  name: string;
}

export const login = async (email: string, password: string): Promise<User | null> => {
  // Simulate API call - in real app, call your backend
  if (email === 'test@example.com' && password === 'password') {
    const user: User = { email, name: 'Test User' };
    await AsyncStorage.setItem(TOKEN_KEY, 'fake_token');
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
    return user;
  }
  return null;
};

export const register = async (email: string, password: string, name: string): Promise<User | null> => {
  // Simulate registration
  const user: User = { email, name };
  await AsyncStorage.setItem(TOKEN_KEY, 'fake_token');
  await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
  return user;
};

export const logout = async (): Promise<void> => {
  await AsyncStorage.removeItem(TOKEN_KEY);
  await AsyncStorage.removeItem(USER_KEY);
};

export const getCurrentUser = async (): Promise<User | null> => {
  const userData = await AsyncStorage.getItem(USER_KEY);
  return userData ? JSON.parse(userData) : null;
};

export const isAuthenticated = async (): Promise<boolean> => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  return !!token;
};