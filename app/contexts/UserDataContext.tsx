import { createContext, useContext, useState, type ReactNode } from "react";

import type { IUserData } from "~/types";

interface UserDataContextType {
  userData: IUserData | null;
  setUserData: (data: IUserData) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const UserDataContext = createContext<UserDataContextType | undefined>(
  undefined
);

export function UserDataProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<IUserData | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <UserDataContext.Provider
      value={{ userData, setUserData, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserData() {
  const context = useContext(UserDataContext);

  if (context === undefined) {
    throw new Error("useUserData must be used within a UserDataProvider");
  }

  return context;
}
