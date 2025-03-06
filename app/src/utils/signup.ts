import { firebaseAuth } from "@/lib/firebase";
import { SignUpInformation } from "@/pages/SignUpPage";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app"; // Import FirebaseError type

export async function signUpWithEmailAndPassword(credentials: SignUpInformation, setStatus: (status: string) => void) {
  setStatus("Please wait...");
  try {
    const userCredentials = await createUserWithEmailAndPassword(firebaseAuth, credentials.email, credentials.password);
    setStatus("Welcome " + userCredentials.user.email + "!" + " You are now signed up.");
    return userCredentials.user.email;
  } catch (error) {
    const firebaseError = error as FirebaseError;
    console.log(firebaseError);

    if (firebaseError.code === "auth/email-already-in-use") {
      setStatus("This email is already registered. Please try another one.");
    } else if (firebaseError.code === "auth/weak-password") {
      setStatus("Password is too weak. Please choose a stronger password.");
    } else if (firebaseError.code === "auth/invalid-email") {
      setStatus("Invalid email format. Please enter a valid email.");
    } else {
      setStatus("An unexpected error occurred. Please try again.");
    }
  }
}
