/** React Imports */
import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router'

/** Ionic Imports */
import {
    IonContent,
    IonIcon,
    IonImg,
    IonPage,
    createAnimation,
    setupIonicReact,
    useIonViewDidEnter,
    useIonViewWillEnter,
    useIonViewWillLeave
} from '@ionic/react'

import { arrowDown, arrowUp, exit } from 'ionicons/icons'
import { EsCardSkeleton } from '../../components/EsCardSkeleton'
import { useAuth } from '../../services/AuthContext'
import { EsCardNotResults } from '../../components/EsCardNotResults'
import { EsCard } from '../../components/EsCard'
import { SearchByItemNumberComponent } from '../../components/SearchByItemNumberComponent'
import { SearchByBatchNumberComponent } from '../../components/SearchByBatchNumberComponent'

/* Resources */
import Shape from '../../assets/images/shape_background.svg'


/* Custom Css */
import './MainMenu.css'

setupIonicReact()

const MainMenu: React.FC = () => {
    const [didLeave, setDidLeave] = useState(false);

    const [currentTime, setCurrentTime] = useState(getFormattedTime())
    useEffect(() => {
        // Actualizar el tiempo cada segundo
        const intervalId = setInterval(() => {
            setCurrentTime(getFormattedTime())
        }, 1000)

        // Limpiar el intervalo al desmontar el componente
        return () => clearInterval(intervalId)
    }, []) // El segundo parámetro [] asegura que el efecto se ejecute solo una vez al montar el componente

    function getFormattedTime() {
        const options: any = {
            weekday: 'long',
            year: '2-digit',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        }

        const now = new Date()
        return now.toLocaleString('es-MX', options)
            .replace(' de ', '-')
            .replace(' de ', '-')
    }

    const { logout } = useAuth()
    const history = useHistory()

    const [searchByItemNumberIsDisabled, setSearchByItemNumberIsDisabled]
        = useState(false)
    const [searchByBatchNumberIsDisabled, setSearchByBatchNumberIsDisabled]
        = useState(false)
    const [isCentered, setIsCentered]
        = useState(true)

    const ListEsCard = ({ datos }: any) => (
        datos.map(
            (item: any, index: any) => (
                <EsCard key={index} {...item} />
            )
        )
    )

    const searchByItemNumber = () => {
        // setSearchByItemNumberIsDisabled(false)
        setShowEsCardSkeleton(false)
        setShowModalDelayed(true)
        setTimeout(() => {
            setSearchResults([])
            setIsCentered(false)
            setShowModal(true)
            setModalResult(false)
            setShowSearchByItemNumberComponent(true)
            setShowSearchByBatchNumberComponent(false)
        }, 100)
    }
    const searchByBatchNumber = () => {
        // setSearchByBatchNumberIsDisabled(false)
        setShowEsCardSkeleton(false)
        setShowModalDelayed(true)
        setTimeout(() => {
            setSearchResults([])
            setIsCentered(false)
            setShowModal(true)
            setModalResult(false)
            setShowSearchByBatchNumberComponent(true)
            setShowSearchByItemNumberComponent(false)
        }, 100)
    }

    const [showSearchByItemNumberComponent, setShowSearchByItemNumberComponent]
        = useState(false)
    const [showSearchByBatchNumberComponent, setShowSearchByBatchNumberComponent]
        = useState(false)
    const [showListEsCard, setShowListEsCard]
        = useState(false)
    const [searchResults, setSearchResults]
        = useState([])
    const [showEsCardSkeleton, setShowEsCardSkeleton]
        = useState(false)
    const [showEsCardNoResults, setShowEsCardNoResults]
        = useState(false)

    const clockContainerRef: any = useRef<HTMLElement>(null)
    const searchContainerRef: any = useRef<HTMLElement>(null)
    const [showModal, setShowModal] = useState(false)
    const [showModalDelayed, setShowModalDelayed] = useState(false)
    const [showToTopButton, setShowToTopButton] = useState(false)
    const [showModalResult, setModalResult] = useState(false)

    const handleSearch = (results: any) => {
        setShowEsCardSkeleton(false)
        setShowEsCardNoResults(false)
        setSearchResults(results)
        setShowListEsCard(true)
        searchContainerRef.current?.scrollIntoView({ behavior: 'smooth' })
        setSearchByItemNumberIsDisabled(false)
        setSearchByBatchNumberIsDisabled(false)
        setShowModal(false)
        setModalResult(true)

    }
    const handleClickSearch = (status: boolean) => {
        setSearchByItemNumberIsDisabled(true)
        setSearchByBatchNumberIsDisabled(true)
        console.log('handleClickSearch', status)

        setShowEsCardNoResults(false)
        setShowEsCardSkeleton(true)
        setModalResult(false)
        setSearchResults([])
    }
    const handleSearchError = (error: any) => {
        console.log('handleSearchError', error)

        setShowEsCardSkeleton(false)
        setShowEsCardNoResults(true)
        setSearchResults([])
        setShowModal(true)
        setModalResult(false)
        setSearchByItemNumberIsDisabled(false)
        setSearchByBatchNumberIsDisabled(false)
    }

    const closeModal = () => {
        setShowSearchByItemNumberComponent(false)
        setShowSearchByBatchNumberComponent(false)
        clockContainerRef.current?.scrollIntoView({ behavior: 'smooth' })
        setShowModal(false)
        setIsCentered(true)
        if (showModalResult)
            setModalResult(false)
        setTimeout(() => {
            setShowModalDelayed(true)
            setSearchResults([])
            setShowListEsCard(false)
        }, 500)
    }

    const scrollToTop = () => {
        clockContainerRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const logoutApp = () => {
        // logout()
        history.push('/login')
    }

    const targetRef: any = useRef(null)
    const [position, setPosition] = useState({ top: 0, left: 0 })
    const [size, setSize] = useState({ width: 0, height: 0 })

    useEffect(() => {
        if (targetRef.current) {
            const rect = targetRef.current.getBoundingClientRect()
            setPosition({ top: rect.top, left: rect.left })
            setSize({ width: rect.width, height: rect.height })
        }
    }, [])

    // const slideInAnimation =
    //     createAnimation('slide-in-left')
    //         .duration(500)
    //         .fromTo('opacity', '0', '1')
    //         .iterations(1)

    // useIonViewDidEnter(() => {
    //     setTimeout(() => {
    //         console.log('enter main');
    //         const element = document.querySelector('#main-page')
    //         if (element) {
    //             console.log(element)
    //             // slideInAnimation.addElement(element)
    //             // slideInAnimation.play()
    //         } else {
    //             // Handle the case where the element doesn't exist (optional)
    //             console.warn('Element with ID "main" not found.')
    //         }
    //     }, 500);

    // })

    // const slideOutAnimation =
    //     createAnimation('slide-out-left')
    //         .duration(500)
    //         .fromTo('opacity', '1', '0')
    //         .iterations(1)

    // useIonViewWillLeave(() => {
    //     if (!didLeave) {
    //         setDidLeave(true);
    //         console.log('leave main');
    //         const element = document.querySelector('#login-page')
    //         if (element) {
    //             console.log(element)
    //             // slideOutAnimation.addElement(element)
    //             // slideOutAnimation.play()
    //         } else {
    //             // Handle the case where the element doesn't exist (optional)
    //             console.warn('Element with ID "main" not found.')
    //         }
    //     }
    // })

    return (
        <IonContent>
            <div slot='fixed' className='fixed bottom-0 right-0 p-4'>
                {showModalResult &&
                    <button className={`es-button w-8 h-8 p-1 m-0 rounded-full flex
                    ${showModalResult ? `opacity-100` : `opacity-0`}
                    transition delay-500 duration-500 ease-in-out`}
                        onClick={scrollToTop}>
                        <IonIcon icon={arrowUp} className=' scale-75'></IonIcon>
                    </button>
                }
            </div>
            <div className='absolute z-0' ref={clockContainerRef}>
                <IonImg
                    src={Shape}
                    alt='Laboratorios Jayor México'>
                </IonImg>
            </div>

            <div className='absolute top-0 right-0 m-4 z-40'>
                <button className='es-button-red w-8 h-8 p-1 m-0 rounded-full 
                flex absolute right-[10%]'
                    onClick={logoutApp}>
                    <IonIcon icon={exit} className=' scale-75'></IonIcon>
                </button>
            </div>

            <div className='w-full h-svh flex flex-col p-8 space-y-8 z-30'>
                <div className='w-full z-20'>
                    <input className='es-input hover:es-no-hover w-full 
                        es-shadow'
                        type='tebxt' placeholder='Ingrese su usuario'
                        value={currentTime} readOnly />
                </div>

                <div className={`es-card z-10
                ${isCentered ? `translate-y-[calc(50svh/2)]` : `translate-y-0`}
                transition duration-500 ease-in-out`}>

                    <div className='w-full'>
                        <button className={`${showSearchByItemNumberComponent ? `transition-all ease-out duration-70 es-button-green text-scblue` : `es-button`}`}
                            onClick={searchByItemNumber}
                            disabled={searchByItemNumberIsDisabled}
                            id='open-modal-a'>
                            Por Artículo
                        </button>
                    </div>

                    <div className='w-full'>
                        <button className={`${showSearchByBatchNumberComponent ? ` transition-all ease-out duration-70 es-button-green text-scblue` : `es-button`}`}
                            onClick={searchByBatchNumber}
                            disabled={searchByBatchNumberIsDisabled}
                            id='open-modal-b'>
                            Por Lote
                        </button>
                    </div>
                </div>
            </div>

            {/* ${showModalResult ? showEsCardSkeleton ? `-translate-y-[calc(100svh/2)] bg-blue-500` : `-translate-y-[calc(100dvh)] mt-76 bg-purple-500 h-max` : `top-[100svh] bg-red-500`} */}
            {/* ${isModalHiddenDelayed ? `hidden opacity-0` : ``} */}
            <div className={`z-10 bg-white es-shadow-inverted 
                w-full absolute text-black rounded-t-[2.5rem]
                ${showModalResult ? `-translate-y-[100svh] mt-76 opacity-100` : `opacity-0`}
                ${showModal ? `-translate-y-[calc(100svh/2)] h-[calc(100svh/2)] opacity-100` : `opacity-0`}
                transition-all duration-500 ease-in-out`}
                style={{ display: showModalDelayed ? 'flex' : 'none' }}>

                <div className={`flex flex-col p-8 space-y-8 w-full
                    ${showEsCardSkeleton ? `h-max` : `h-auto`}`}>

                    <div className='absolute top-0 right-0 p-[1rem]'>
                        <button className='es-button es-bg-gray-gradient w-8 
                        h-8 p-1 m-0 rounded-full flex'
                            onClick={closeModal}>
                            <IonIcon icon={arrowDown} className=' scale-75'></IonIcon>
                        </button>
                    </div>

                    <h1 className='text-4xl font-thin' ref={searchContainerRef}>Busqueda</h1>

                    {showSearchByItemNumberComponent &&
                        <SearchByItemNumberComponent
                            onSearch={handleSearch}
                            onClickSearch={handleClickSearch}
                            onError={handleSearchError} />}

                    {showSearchByBatchNumberComponent &&
                        <SearchByBatchNumberComponent
                            onSearch={handleSearch}
                            onClickSearch={handleClickSearch}
                            onError={handleSearchError} />}

                    {showEsCardSkeleton && <EsCardSkeleton />}

                    {showEsCardNoResults && <EsCardNotResults />}

                    {showListEsCard &&
                        <ListEsCard datos={searchResults} />}

                </div>

            </div>
        </IonContent>
    )
}

export default MainMenu