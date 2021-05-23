import { createContext, useContext } from 'react';

const useAuth = () => useContext(createContext({}));

export default useAuth;
