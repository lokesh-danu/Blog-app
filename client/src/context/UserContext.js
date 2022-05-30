import {createContext, useState} from 'react';
// import Reducer from './Reducer';
const Initial={
    user:null,
    isfetching:false,
    error:null,
};
export const UserContext =createContext();

export const UserProvider =( {children})=>{
  const [user, setUser] = useState(null);
    return (
        <UserContext.Provider
          value={[user,setUser]}
        >
          {children}
        </UserContext.Provider>
      );
}