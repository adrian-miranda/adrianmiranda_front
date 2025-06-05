import React from 'react'
import {useTheme} from '../context/ThemeContext'
const PruebaDark = () => {

    const {theme} = useTheme()
    return (
    <>
        <div className='min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-center gap-6 p-6 transition-colors'>
            
            <h1 className='text-4xl font-bold'>
                {theme === 'dark' ? 'Adrian Dark' : 'Adrian Iluminado'}
            </h1>
            <div className='mt-6 p-6 rounded-xl shadow-xl bg-gray-100 dark:bg-gray-800 w-full max-w-md'>
                <h2 className='text-2xl font-semibold mb-2'>Theme de carta</h2>
                <p>carta adaptada al theme de usuario con psibilidad de cambio</p>
            </div>
        </div>
    </>
  )
}

export default PruebaDark
