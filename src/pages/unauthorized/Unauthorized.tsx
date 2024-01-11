/** React Imports */
import React from 'react'
import { useHistory } from 'react-router'

export const Unauthorized: React.FC = ()=> {
    const history = useHistory()

    const handleClose = async () => {
        console.log('go to login');
        history.push('/login')
    }
    return (
        <div className='text-black w-full h-full'>
            <div className='flex flex-col items-center justify-center p-8
            space-y-8 w-full h-max'>
                <p className='text-4xl font-thin'>Unauthorized</p>
                <button className='es-button'
                    onClick={handleClose}>
                    Cerrar
                </button>
            </div>
        </div>
    )
}

export default Unauthorized