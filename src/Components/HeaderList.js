import React from 'react'

const HeaderList = ({ name, Icon }) => {
    return (
        <div className='text-white flex items-center gap-2 text-[18px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-1'>
            <Icon/>
            <h2>{name}</h2>
        </div>
    )
}

export default HeaderList
