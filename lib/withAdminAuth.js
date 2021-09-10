import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { UserContext } from "./context";

const withAdminAuth = (Component) => {
  const Auth = (props) => {
    const { isAdmin, loading } = useContext(UserContext);
    const router = useRouter();

    if (loading || !isAdmin) return null;

    return <Component {...props} />;
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAdminAuth;
