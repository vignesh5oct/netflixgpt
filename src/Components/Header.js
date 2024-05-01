import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { logo } from '../utils/constants';

const Header = () => {

  const navigate = useNavigate();
  const dipatch = useDispatch();

  const user = useSelector((store) =>store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
    });

  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dipatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dipatch(removeUser());
        navigate("/");
      }
    });
    return(()=>unsubscribe());
  }, [])
  return (
    <div >
      <div className='' >
        <img className='absolute w-48 px-3 py-6 z-10'
          src={logo}
          alt='logo'></img>
        {user &&
          <div className='absolute right-0 m-4 py-3 z-10'>
            <img alt='userlogo' src=""></img>
            <h1 className='cursor-pointer' onClick={handleSignOut}>(sign out)</h1>
          </div>}
      </div>

    </div>

  )
}

export default Header
