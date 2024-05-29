import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { FaSearch, FaHome } from "react-icons/fa";
import { toggleGptSearchView } from "../utils/gptSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => { })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className=" absolute w-full contrast-200 z-10 h-20 md:h-24 flex  justify-between bg-gradient-to-b from-black select-none">
      <img className=" w-0 md:w-48 -mt-5 -ml-[24px] md:-mt-1 mx-auto md:mx-0 -mr-[200px] " src={LOGO} alt="Movieflix-logo" />

      {user && (
        <div className="md:-mt-0">
          <div className="flex ml-36 ">
            {showGptSearch && (
              <select
                className="hidden md:inline-block  p-2 -ml-20 text-sm   mr-3 mt-4 mb-3 rounded-lg  bg-slate-600 text-white"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((language) => (
                  <option key={language.identifier} value={language.identifier}>
                    {language.name}
                  </option>
                ))}
              </select>
            )}
            {/* search */}
            <button
              onClick={handleGptSearchClick}
              className=" bg-purple-800 text-white md: text-normal m-3 md:pb-3 text-sm rounded-lg mt-4 mr-3 flex items-center"
            >
              {showGptSearch ? <FaHome className="md:mt-3 mt-1 mb-1 md:mb-0 md:ml-2 ml-1.5 items-center" /> :
                <FaSearch className="md:mt-3 mt-1 mb-1 md:mb-0 md:ml-2 ml-1.5" />}
              <p className="inline-block rounded px-5  pt-2.5 font-medium uppercase">{showGptSearch ? "Homepage" : "Search"}</p>
            </button>
            <div className="px-8 text-white font-bold py-5 rounded-md mx-2 md:px-16">
              <button onClick={handleSignOut}>Sign Out</button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default Header;
