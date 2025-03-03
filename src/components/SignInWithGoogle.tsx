import { GoogleAuthProvider, signInWithPopup, UserCredential } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import GoogleImg from "../google.png";

function SignInwithGoogle() {
  const googleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result: UserCredential = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email || "",
          firstName: user.displayName || "",
          photo: user.photoURL || "",
          lastName: "",
        });

        toast.success("User logged in Successfully", {
          position: "top-center",
        });

        window.location.href = "/profile";
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Google Sign-In Error:", error.message);
        toast.error(error.message, {
          position: "top-center",
        });
      }
    }
  };

  return (
    <div>
      <p className=" continue-p text-center">--Or continue with--</p>
      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={googleLogin}
      >
        <img src={GoogleImg} width="60%" alt="Google Sign-In" />
      </div>
    </div>
  );
}

export default SignInwithGoogle;
