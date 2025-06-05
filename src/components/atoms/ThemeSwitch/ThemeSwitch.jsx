import React from 'react'
import { useTheme } from '../../../context/ThemeContext.jsx'
import sun from '../../../assets/icons/sun.png'
import moon from '../../../assets/icons/moon.png'

function ThemeSwitch() {
    const {theme , toggleTheme} = useTheme();
    return (
        <div className='fixed top-8 right-8 cursor-pointer'>
            <div onClick={toggleTheme}>
                {theme  === "light" ? (
                    <img src={sun} alt='modo dia' className='w-8 h-auto'/>
                ) : (
                    <img src={moon} alt='modo noche' className='w-8 h-auto'/>
                )}
            </div>
        </div>
    )
}

export default ThemeSwitch
