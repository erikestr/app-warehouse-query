/** React Imports */
import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router'

/** Ionic Imports */
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonChip,
    IonContent,
    IonHeader,
    IonIcon,
    IonImg,
    IonItem,
    IonModal,
    IonPage,
    IonTitle,
    IonToolbar,
    setupIonicReact
} from '@ionic/react'

/* TailwindCss directives */
import '../../assets/tailwind.css'

/* Resources */
import Logo from '../../assets/images/jayor_logo.png'
import Shape from '../../assets/images/shape_background.svg'
import { EsCard } from '../../components/EsCard'
import { EsCardInterface } from '../../types/EsCardInterface'
import { SearchByItemNumberComponent } from '../../components/SearchByItemNumberComponent'
import { SearchByBatchNumberComponent } from '../../components/SearchByBatchNumberComponent'
import { Virtuoso } from 'react-virtuoso'

/* Custom Css */
import './MainMenu.css'
import { arrowDown, exit } from 'ionicons/icons'
import { EsCardSkeleton } from '../../components/EsCardSkeleton'
import { useAuth } from '../../services/AuthContext'
import { EsCardNotResults } from '../../components/EsCardNotResults'

setupIonicReact()

const MainMenu: React.FC = () => {
    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
            // Calculate the scroll position
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;

            // Determine when to show/hide the button (e.g., at least 2 screen heights)
            const shouldShowButton = scrollPosition > window.innerHeight * 2;
            setShowToTopButton(shouldShowButton);
            console.log('handleScroll');

        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures that the effect runs only once on mount



    const { logout } = useAuth()
    const history = useHistory()

    const [clock, setClock]
        = useState('Lunes, 01-ene-24, 12:00 PM')
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
        setIsModalHiddenDelayed(false)
        setModalResult(false)
        setTimeout(() => {
            if (showSearchByBatchNumberComponent)
                setSearchResults([])
            setIsCentered(false)
            setShowModal(true)
            setShowSearchByItemNumberComponent(true)
            setShowSearchByBatchNumberComponent(false)
        }, 100)
    }
    const searchByBatchNumber = () => {
        // setSearchByBatchNumberIsDisabled(false)
        setShowEsCardSkeleton(false)
        setIsModalHiddenDelayed(false)
        setModalResult(false)
        setTimeout(() => {
            if (showSearchByItemNumberComponent)
                setSearchResults([])
            setIsCentered(false)
            setShowModal(true)
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
    const [showToTopButton, setShowToTopButton] = useState(false)
    const [showModalResult, setModalResult] = useState(false)
    const [isModalHiddenDelayed, setIsModalHiddenDelayed] = useState(false)

    const handleSearch = (results: any) => {
        console.log('handleSearch', results);

        setShowEsCardSkeleton(false)
        setShowEsCardNoResults(false)
        setSearchResults(results)
        setShowListEsCard(true)
        searchContainerRef.current?.scrollIntoView({ behavior: 'smooth' })

        setSearchByItemNumberIsDisabled(false)
        setSearchByBatchNumberIsDisabled(false)
    };
    const handleClickSearch = (status: boolean) => {
        setSearchByItemNumberIsDisabled(true)
        setSearchByBatchNumberIsDisabled(true)
        console.log('handleClickSearch', status);

        setShowEsCardNoResults(false)
        setShowEsCardSkeleton(true)
        setModalResult(true)
        setSearchResults([])
    }
    const handleSearchError = (error: any) => {
        console.log('handleSearchError', error);

        setShowEsCardSkeleton(false)
        setShowEsCardNoResults(true)
        setSearchResults([])
        setModalResult(false)
        setSearchByItemNumberIsDisabled(false)
        setSearchByBatchNumberIsDisabled(false)
    }

    const closeModal = () => {
        clockContainerRef.current?.scrollIntoView({ behavior: 'smooth' })
        setShowModal(false)
        setIsCentered(true)
        if (showModalResult)
            setModalResult(false)
        setTimeout(() => {
            setIsModalHiddenDelayed(true)
            setSearchResults([])
            setShowListEsCard(false)
        }, 500)
    };

    const scrollToTop = () => {
        clockContainerRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const logoutApp = () => {
        logout()
        history.push('/login')
    }

    const targetRef: any = useRef(null);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [size, setSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (targetRef.current) {
            const rect = targetRef.current.getBoundingClientRect();
            setPosition({ top: rect.top, left: rect.left });
            setSize({ width: rect.width, height: rect.height });
        }
    }, []);

    return (
        <div>
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
                        type='text' placeholder='Ingrese su usuario'
                        value={clock}
                        readOnly />
                </div>

                <div className={`es-card z-10
                ${isCentered ? `translate-y-[calc(50svh/2)]` : `translate-y-0`}
                transition duration-500 ease-in-out`}>

                    <div className='w-full'>
                        <button className={`${showSearchByItemNumberComponent ? `transition-all ease-out duration-70 es-button-green text-scblue`:`es-button`}`}
                            onClick={searchByItemNumber}
                            disabled={searchByItemNumberIsDisabled}
                            id='open-modal-a'>
                            Por Artículo
                        </button>
                    </div>

                    <div className='w-full'>
                        <button className={`${showSearchByBatchNumberComponent ? ` transition-all ease-out duration-70 es-button-green text-scblue`:`es-button`}`}
                            onClick={searchByBatchNumber}
                            disabled={searchByBatchNumberIsDisabled}
                            id='open-modal-b'>
                            Por Lote
                        </button>
                    </div>
                </div>
            </div>

            <div className={`z-10 bg-white es-shadow-inverted 
            w-full absolute text-black rounded-t-[2.5rem]
            ${showModal ? `-translate-y-[calc(100svh/2)] h-[calc(100svh/2)] flex opacity-100` : `top-[100svh] opacity-0 bg-orange-500`}
            ${showModalResult ? showEsCardSkeleton ? `-translate-y-[calc(100svh/2)] bg-blue-500` : `-translate-y-[calc(100dvh)] mt-76 bg-purple-500 h-max` : `top-[100svh] bg-red-500`}
            ${isModalHiddenDelayed ? `hidden opacity-0` : ``}
            transition-all duration-500 ease-in-out`}>

                <div className={`flex flex-col p-8 space-y-8
                ${showEsCardSkeleton ? `h-max` : `h-auto`}`}>
                    <button className='es-button es-bg-gray-gradient w-8 
                    h-8 p-1 m-0 rounded-full flex
                    absolute right-[10%]'
                        onClick={closeModal}>
                        <IonIcon icon={arrowDown} className=' scale-75'></IonIcon>
                    </button>

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

            {showToTopButton && (
                <button
                    className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={scrollToTop}
                >
                    Scroll to Top
                </button>
            )}
        </div>
    )
}

export default MainMenu