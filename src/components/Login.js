import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = async () => {
    console.log(email.current.value, password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    try {
      if (!isSignInForm) {
        // Sign Up Flow
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        const user = userCredential.user;

        // Update profile after account creation
        await updateProfile(user, {
          displayName: name.current?.value || "",
          photoURL: USER_AVATAR,
        });
        await auth.currentUser.reload();
        const updatedUser = auth.currentUser; // Now contains the correct email and profile

        console.log("User after profile update:", updatedUser);

        // Dispatch updated user details to Redux
        dispatch(
          addUser({
            uid: updatedUser?.uid,
            email: updatedUser?.email,
            displayName: updatedUser?.displayName,
            photoURL: updatedUser?.photoURL,
          })
        );
      } else {
        // Sign In Flow
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        console.log("Signed in user:", userCredential.user);
      }
    } catch (error) {
      setErrorMessage(`${error.code} - ${error.message}`);
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute brightness-50">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 bg-black my-36 left-0 right-0 mx-auto text-white items-center bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-black/80 border border-gray-500"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address or Phone number"
          className="p-4 my-4 w-full bg-black/80 border border-gray-500"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-black/80 border border-gray-500"
        ></input>
        <p className="text-red-500 font-bold text-lg py-3">{errorMessage}</p>
        <button
          className="p-2 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already registed? Sign in now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
