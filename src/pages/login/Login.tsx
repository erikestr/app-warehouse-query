/** React Imports */
import React, { useState } from 'react'
import { useHistory } from 'react-router'

/** Ionic Imports */
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonChip,
    IonContent,
    IonHeader,
    IonImg,
    IonItem,
    setupIonicReact
} from '@ionic/react'

/* TailwindCss directives */
import '../../assets/tailwind.css'

/* Resources */
import Logo from '../../assets/images/jayor_logo.png'
import Shape from '../../assets/images/shape_background.svg'

/* Api Connection Service */
import { authLogin } from '../../services/api'
import { useAuth } from '../../services/AuthContext'

setupIonicReact()

export const Login: React.FC = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [loginIsDisabled, setLoginIsDisabled] = useState(false)

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    const { login } = useAuth();
    const [username, setUsername] = useState('erik.estrada')
    const [password, setPassword] = useState('J@y0r123')
    const history = useHistory()

    const handleLogin = async () => {
        setLoginIsDisabled(true)
        try {
            const result = await authLogin(username, password, false)

            if(result != null && result['access_token']){
                login()
                history.push('/main-menu')
            }
                
        } catch (error: any) {
            console.error('Login error:', error.message)
        }
        setLoginIsDisabled(false)
    };

    return (
        <div className='bg-white'>
            <div>
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

                <div className='my-4 flex'>
                    <span className='es-input-span'>
                        <input className='es-input' type='text' placeholder='Ingrese su usuario' 
                        value={username} onChange={(e) => setUsername(e.target.value)} 
                        spellCheck='false'/>
                        <span></span>
                    </span>
                </div>

                <div className='my-4 flex'>
                    <span className='es-input-span'>
                        <input className='es-input' type={showPassword ? 'text' : 'password'}
                            placeholder='Ingrese su contraseña' 
                            value={password} onChange={(e) => setPassword(e.target.value)} 
                            spellCheck='false'/>
                        <span></span>
                    </span>
                </div>

                <div className='my-4'>
                    <IonChip className={showPassword ? 'es-highlight' : ''}
                        onClick={togglePassword}>Mostrar contraseña</IonChip>
                </div>

                <div className='my-4 w-2/3 '>
                    <button className='es-button'
                        onClick={handleLogin}
                        disabled={loginIsDisabled}>
                        Iniciar
                    </button>
                </div>
            </div>
        </div>
    )
}
