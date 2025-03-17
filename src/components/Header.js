import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
        if (window.location.pathname !== "/browse") navigate("/browse");
      } else {
        dispatch(removeUser());
        console.log("signout");
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
      console.log("Unsubscribed from onAuthStateChanged");
    };
  }, [dispatch, navigate]);
  return (
    <div className="absolute px-8 py-2 w-full bg-gradient-to-b from-black z-20 flex justify-between">
      <img className="w-40 h-35 ml-20 " src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" src={user?.photoURL} alt="usericon" />
          <button onClick={handleSignOut} className="font-bold text-white">
            (sɪɢɴ ᴏᴜᴛ)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
