import { useContext } from "react";
import { Heading, Box } from "theme-ui";
import { UserContext } from "../../../lib/context";
import { SignInButton, SignOutButton } from "./SignInComponents";

import Events from "./events";
import News from "./news";
import Testimonials from "./testimonial";
import "typeface-dm-sans";

export default function Admin(props) {
  const { isAdmin } = useContext(UserContext);

  return (
    <Box sx={styles.main}>
      {isAdmin ? (
        <>
          <SignOutButton />
          <div>
            <Heading as="h2">Add a new Event</Heading>
            <Events />
            <Heading as="h2">Add a new News</Heading>
            <News />
            <Heading as="h2">Add a new Testimonial</Heading>
            <Testimonials />
          </div>
        </>
      ) : (
        <SignInButton />
      )}
    </Box>
  );
}

const styles = {
  main: {
    width: "800px",
    mx: "auto",
    fontFamily: "DM Sans",
    fontFamily: "DM Sans",

    h2: {
      fontFamily: "DM Sans",
      mx: "auto",
      my: "40px",
      textAlign: "center",
    },
  },
};
