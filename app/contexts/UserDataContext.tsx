import { createContext, useContext, useState, type ReactNode } from "react";

import type { UserData } from "~/types";

interface UserDataContextType {
  userData: UserData | null;
  setUserData: (data: UserData) => void;
}

const UserDataContext = createContext<UserDataContextType | undefined>(
  undefined
);

export function UserDataProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<UserData | null>(null);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
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
