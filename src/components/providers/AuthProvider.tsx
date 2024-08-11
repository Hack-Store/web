import { useEffect, useState, createContext, ReactNode } from "react";

import auth from "@/lib/firebase/auth";
import { User } from "firebase/auth";

const AuthContext = createContext({});

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setUser({ ...user });
        setUserLoggedIn(true);
      }

      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, userLoggedIn, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
