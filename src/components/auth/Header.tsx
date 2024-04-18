import React from 'react'

const Header = ({ label }: any) => {
    return (
        <div className='flex flex-col items-center gap-y-2'>
            
            <h1 className='text-3xl font-bold'>Auht </h1>
            
            <p>{label}</p>
            
        </div>
    )
}

export default Header