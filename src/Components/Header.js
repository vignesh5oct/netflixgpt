import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { DISNEY_LOGO, DISNEY_USER, logo } from '../utils/constants';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from 'react-icons/hi2';
import { HiPlus, HiDotsVertical } from 'react-icons/hi';
import HeaderList from './HeaderList';

const Header = () => {

  const [toggleDottedMenu, setToggleDottedMenu] = useState(true);

  const menu = [
    {
      name: "HOME",
      icon: HiHome
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass
    },
    {
      name: "WATCHLIST",
      icon: HiPlus
    },
    {
      name: "ORIGINALS",
      icon: HiStar
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle
    },
    {
      name: "SERIES",
      icon: HiTv
    },
  ]

  const navigate = useNavigate();
  const dipatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
    });

  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dipatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        dipatch(removeUser());
        navigate("/");
      }
    });
    return (() => unsubscribe());
  }, [])
  return (

    <div className=' '>
      
      {/* <img className='absolute w-48 px-3 py-16 z-10 cursor-pointer'
        onClick={() => { navigate("/") }}
        src={logo}
        alt='logo'></img>
      {user &&
        <div>

          <div className='absolute flex m-10 py-7 z-10'>
            <h1 className='text-white'>Home</h1>
            <img className='w-10 mx-4' src={user.photoURL} alt='userlogo'></img>
            <h1 className='cursor-pointer font-semibold text-white' onClick={handleSignOut}>Sign Out</h1>
          </div>
        </div>} */}
      <div className='flex justify-between items-center'>

        <div className='flex gap-5'>
          {/* <img className='absolute w-36 px-3 py-3 z-10 cursor-pointer'
            onClick={() => { navigate("/") }}
            src={DISNEY_LOGO}
            alt='logo'></img> */}
          {user && <img src={DISNEY_LOGO} alt='disneylogo' className='w-[80px] md:w-[115px] object-cover'></img>}
        </div>
        {user &&
          <div className='hidden md:flex gap-10'>
            {menu.map((item) => (
              <HeaderList key={item.name} name={item.name} Icon={item.icon} />
            ))}
          </div>
        }
        {/* For Mobile Screen */}
        {user &&
          <div className='flex gap-8 md:hidden'>
            {menu.map((item, index) => index < 3 && (
              <HeaderList key={item.name} Icon={item.icon} />
            ))}
          </div>
        }
        {user &&
          <div onClick={() => { setToggleDottedMenu(!toggleDottedMenu) }} className='md:hidden'>
            <HeaderList name={""} Icon={HiDotsVertical} />
            {toggleDottedMenu &&
              <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-3 py-4'>
                {menu.map((item, index) => index > 2 && (
                  <HeaderList key={item.name} name={item.name} Icon={item.icon} />
                ))}
              </div>
            }
          </div>
        }

        {/* USER LOGIC */}

        <div className='flex items-center'>
          {user &&
            <img className='w-[50px] rounded-full' src={DISNEY_USER} alt='user_logo' ></img>}
          {user &&
            <h1 className='p-2 cursor-pointer font-semibold text-white' onClick={handleSignOut}>Sign Out</h1>
          }
        </div>

      </div>
    </div>

  )
}

export default Header
