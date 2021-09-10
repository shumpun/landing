import { useContext } from "react";
import { UserContext } from "../../../lib/context";
import { SignInButton, SignOutButton } from "./SignInComponents";

import Events from "./events";
import News from "./news";

export default function Admin(props) {
  const { isAdmin } = useContext(UserContext);

  return (
    <main>
      {isAdmin ? (
        <>
          <SignOutButton />
          <div>
            <h1>Admin page</h1>

            <h2>Add a new Event</h2>
            <Events />
            <br />
            <br />
            <br />
            <h2>Add a new News</h2>
            <News />
            <br />
          </div>
        </>
      ) : (
        <SignInButton />
      )}
    </main>
  );
}
