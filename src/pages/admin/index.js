import React from "react";
import Admin from "sections/admin/admin";
import { UserContext } from "../../../lib/context";
import { useUserData } from "../../../lib/hooks";

export default function AdminLogin() {
  const { isAdmin } = useUserData();

  return (
    <UserContext.Provider value={{ isAdmin }}>
      <Admin />
    </UserContext.Provider>
  );
}
