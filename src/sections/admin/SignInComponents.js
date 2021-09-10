import { auth, googleAuthProvider } from "../../../lib/firebase";

// Sign in with Google button
export function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img
        src="https://github.com/fireship-io/next-firebase-course/blob/main/public/google.png?raw=true"
        width="30px"
      />{" "}
      Sign in with Google
    </button>
  );
}

// Sign out button
export function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}
