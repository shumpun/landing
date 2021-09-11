import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "./firebase";

export function useUserData() {
  const [user, loading] = useAuthState(auth);
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    if (user?.email === "foundationshumpun@gmail.com") {
      setAdmin(true);
    } else setAdmin(false);
  }, [user]);

  return { user, isAdmin: true, loading };
}
