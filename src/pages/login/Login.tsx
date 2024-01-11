/** React Imports */
import React, { useState } from 'react'
import { useHistory } from 'react-router'

/** Ionic Imports */
import {
    IonChip,
    IonImg,
    setupIonicReact,
} from '@ionic/react'

/* TailwindCss directives */
import '../../assets/tailwind.css'

/* Resources */
import Logo from '../../assets/images/jayor_logo.png'
import Shape from '../../assets/images/shape_background.svg'
import MsDyn from '../../assets/images/msdynamicsgp.png'

/* Api Connection Service */
import { useAuth } from '../../services/AuthContext'
import { authLogin } from '../../services/Api'

setupIonicReact()

export const Login: React.FC = () => {
    const [didLeave, setDidLeave] = useState(false);

    const [showPassword, setShowPassword] = useState(false)
    const [loginIsDisabled, setLoginIsDisabled] = useState(false)

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    const { login } = useAuth();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const handleLogin = async () => {
        setLoginIsDisabled(true)
        try {
            const result = await authLogin(username.trim(), password.trim(), false)

            if (result != null && result['access_token']) {
                login()
                history.push('/main-menu')
            }

        } catch (error: any) {
            console.error('Login error:', error.message)
        }
        setLoginIsDisabled(false)
    };

    return (
        <div>
            <div className='z-50'>
                <IonImg
                    src={Shape}
                    alt='Laboratorios Jayor México'>
                </IonImg>
                <IonImg className='absolute top-0 mt-12'
                    src={Logo}
                    alt='Laboratorios Jayor México'>
                </IonImg>
            </div>

            <div className='flex flex-col items-center w-full my-4'>

                <div className='my-4 flex z-50'>
                    <span className='es-input-span'>
                        <input className='es-input' type='text' placeholder='Ingrese su usuario'
                            value={username} onChange={(e) => setUsername(e.target.value)}
                            spellCheck='false'
                            autoCapitalize='off'
                            autoCorrect='off' />
                        <span></span>
                    </span>
                </div>

                <div className='my-4 flex z-50'>
                    <span className='es-input-span'>
                        <input className='es-input' type={showPassword ? 'text' : 'password'}
                            placeholder='Ingrese su contraseña'
                            value={password} onChange={(e) => setPassword(e.target.value)}
                            spellCheck='false' />
                        <span></span>
                    </span>
                </div>

                <div className='my-4 z-50'>
                    <IonChip className={showPassword ? 'es-highlight shadow-[4px_4.0px_8.0px_rgba(0,0,0,0.38)]' : 'bg-gray-common'}
                        onClick={togglePassword}>Mostrar contraseña</IonChip>
                </div>

                <div className='my-4 w-2/3 z-50'>
                    <button className='es-button'
                        onClick={handleLogin}
                        disabled={loginIsDisabled}>
                        Iniciar
                    </button>
                </div>
            </div>

            <footer className='static bottom-0 z-0'>
                <IonImg className='scale-50'
                    src={MsDyn}
                    alt='Powered by Microsoft Dynamics GP'>
                </IonImg>
            </footer>
        </div>
    )
}
