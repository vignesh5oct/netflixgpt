import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toggleMenu, toggleShowSearch } from '../utils/functionalitySlice';

const HeaderList = ({ url, name, Icon }) => {


    const dipatch = useDispatch();
    const handleSearchClick = (url) => {

        console.log(dipatch(toggleMenu(url)))
        dipatch(toggleMenu(url));
        dipatch(toggleShowSearch())
    }
    return (
        <div className='text-white flex items-center gap-2 text-[18px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-1'>
            <Icon />
            <h2 ><Link to={url}>{name}</Link></h2>
        </div>
    )
}

export default HeaderList
