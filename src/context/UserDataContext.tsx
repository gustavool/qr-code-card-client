import { createContext, Dispatch, SetStateAction, useState } from "react";

export interface IUserData {
  id?: string;
  name: string;
  about: string;
  linkedin: string;
  github: string;
}

export interface IUserDataContext {
  user: IUserData;
  setUser: Dispatch<SetStateAction<IUserData>>;
}

const initialState = {
  user: {
    name: "",
    about: "",
    linkedin: "",
    github: "",
  },
  setUser: (user: IUserData) => {},
} as IUserDataContext;

export const UserDataContext = createContext(initialState);

type UserDataProviderProps = {
  children: React.ReactNode;
};

export default function UserDataProvider({ children }: UserDataProviderProps) {
  const [user, setUser] = useState<IUserData>({
    name: "",
    about: "",
    linkedin: "",
    github: "",
  });

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  );
}
