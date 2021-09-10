import { auth, googleAuthProvider } from "../../../lib/firebase";
import { Button } from "theme-ui";

// Sign in with Google button
export function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <Button varient="secondary" sx={styles.button} onClick={signInWithGoogle}>
      <img
        src="https://github.com/fireship-io/next-firebase-course/blob/main/public/google.png?raw=true"
        width="30px"
      />{" "}
      Sign in with Google
    </Button>
  );
}

// Sign out button
export function SignOutButton() {
  return (
    <Button
      varient="secondary"
      sx={styles.button}
      onClick={() => auth.signOut()}
    >
      Sign Out
    </Button>
  );
}

const styles = {
  button: {
    fontSize: "15px",
    fw: "700",
    height: "48px",
    borderRadius: "3px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    py: "0",
    backgroundColor: "#000",
    color: "#fff",
    ml: "auto",
    FontFace: "inherit",
  },
};
