/** React Imports */
import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router'

/** Ionic Imports */
import {
    IonButton,
    IonButtons,
    IonChip,
    IonContent,
    IonHeader,
    IonImg,
    IonInput,
    IonItem,
    IonPage,
    IonSpinner,
    IonTitle,
    IonToolbar,
    setupIonicReact,
    useIonAlert,
    useIonModal,
} from '@ionic/react'

/* TailwindCss directives */
import '../../assets/tailwind.css'

/** Custom Css */
import './Login.css'

/* Resources */
import Logo from '../../assets/images/jayor_logo.png'
import Shape from '../../assets/images/shape_background.svg'
import MsDyn from '../../assets/images/msdynamicsgp.png'

/* Api Connection Service */
import { useAuth } from '../../services/AuthContext'
import { authLogin } from '../../services/Api'
import { Alert } from '../../components/alert/Alert'
import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces'

setupIonicReact()

export const Login: React.FC = () => {
    const [didLeave, setDidLeave] = useState(false)

    const [showPassword, setShowPassword] = useState(false)
    const [loginIsDisabled, setLoginIsDisabled] = useState(false)

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    const { login } = useAuth()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const [presentAlert] = useIonAlert();
    const ModalExample = ({ onDismiss, }: {
        onDismiss: (data?: string | null | undefined | number, role?: string) => void;
    }) => {
        const inputRef = useRef<HTMLIonInputElement>(null);
        return (
            <div className='bg-transparent h-[100svh] flex justify-center items-center'>
                <div className='bg-white w-32 h-auto flex flex-col rounded-3xl
                border-2 border-scblue
                justify-center items-center'>
                    <IonSpinner color='dark' class='text-scblue mb-2 m-8'></IonSpinner>
                    <p className='text-black m-8 mt-2' >Cargando...</p>
                </div>
            </div>
        );
    };

    const [present, dismiss] = useIonModal(ModalExample, {
        onDismiss: (data: string, role: string) => dismiss(data, role),
    });

    const handleLogin = async () => {
        present()
        setLoginIsDisabled(true)
        try {
            const result = await authLogin(username.trim(), password.trim(), false)

            if (result != null && result['access_token']) {
                login()
                dismiss()
                history.replace('/main-menu')
            }

        } catch (error: any) {
            dismiss()
            if (error.cause == 401)
                presentAlert({
                    header: 'Datos incorrectos',
                    backdropDismiss: false,
                    message: 'El nombre de usuario o la contraseña son incorrectos',
                    cssClass: 'es-alert',
                    buttons: [
                        {
                            text: 'Aceptar',
                            role: 'OK',
                            cssClass: 'es-negative'
                        }
                    ]
                })
            else
                presentAlert({
                    header: 'Ha ocurrido un fallo',
                    backdropDismiss: false,
                    subHeader: error.status,
                    message: error.message,
                    cssClass: 'es-alert',
                    buttons: [
                        {
                            text: 'Aceptar',
                            role: 'OK',
                            cssClass: 'es-negative'
                        }
                    ]
                })
        }
        setLoginIsDisabled(false)
        dismiss()
    }
    const [message, setMessage] = useState('This modal example uses the modalController to present and dismiss modals.');

    function handleShowAlert() {
        present({
            onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => {
                if (ev.detail.role === 'confirm') {
                    setMessage(`Hello, ${ev.detail.data}!`);
                }
            },
        });

        setTimeout(() => {
            // dismiss()
        }, 1000);
    }


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

            <footer
                className='static bottom-0 z-0'>
                <IonImg
                    className='scale-50'
                    onClick={handleShowAlert}
                    src={MsDyn}
                    alt='Powered by Microsoft Dynamics GP'>
                </IonImg>
            </footer>
        </div>
    )
}
