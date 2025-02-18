import { firebaseAuth } from "@/lib/firebase";
import { LoginInformation } from "@/pages/Login";
import { signInWithEmailAndPassword } from "firebase/auth";

export async function loginWithEmailAndPassword(data: LoginInformation, setStatus: (status: string) => void) {
  setStatus("Please wait...");
  try {
    const userCredentials = await signInWithEmailAndPassword(firebaseAuth, data.email, data.password);
    setStatus("Welcome " + userCredentials.user.email);
    return userCredentials;
  } catch (error) {
    setStatus("Invalid credentials, please try again");
    console.log(error);
  }
}
