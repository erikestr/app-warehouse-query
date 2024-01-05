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
import { arrowDown } from 'ionicons/icons'
import { EsCardSkeleton } from '../../components/EsCardSkeleton'

setupIonicReact()

const MainMenu: React.FC = () => {
    const [isCentered, setIsCentered] = useState(true)
    const [clock, setClock]
        = useState('Lunes, 01-ene-24, 12:00 PM')
    const [searchByItemNumberIsDisabled, setSearchByItemNumberIsDisabled]
        = useState(false)
    const [searchByBatchNumberIsDisabled, setSearchByBatchNumberIsDisabled]
        = useState(false)

    const ListEsCard = ({ datos }: any) => (
        datos.map(
            (item: any, index: any) => (
                <EsCard key={index} {...item} />
            )
        )
    )

    const searchByItemNumber = () => {
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
        }, 100);
    }
    const searchByBatchNumber = () => {
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
        }, 100);
    }

    const [showSearchByItemNumberComponent, setShowSearchByItemNumberComponent]
        = useState(false)
    const [showSearchByBatchNumberComponent, setShowSearchByBatchNumberComponent]
        = useState(false)
    const [showListEsCard, setShowListEsCard]
        = useState(false)
    const [searchResults, setSearchResults] = useState([])
    const [showEsCardSkeleton, setShowEsCardSkeleton]
        = useState(false)

    const clockContainerRef: any = useRef<HTMLElement>(null)
    const searchContainerRef: any = useRef<HTMLElement>(null)
    const [showModal, setShowModal] = useState(false)
    const [showModalResult, setModalResult] = useState(false)
    const [isModalHiddenDelayed, setIsModalHiddenDelayed] = useState(false)

    const handleSearch = (results: any) => {
        clockContainerRef.current?.scrollIntoView({ behavior: 'smooth' })
        setShowEsCardSkeleton(true)
        setModalResult(true)
        setSearchResults([])
        setTimeout(() => {
            setShowEsCardSkeleton(false)
            setSearchResults(results)
            setShowListEsCard(true)
            searchContainerRef.current?.scrollIntoView({ behavior: 'smooth' })
        }, 2000);
    };

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
        }, 500);
    };

    return (
        <div>
            <div className='absolute z-0' ref={clockContainerRef}>
                <IonImg
                    src={Shape}
                    alt='Laboratorios Jayor México'>
                </IonImg>
            </div>

            <div className={`w-full h-svh flex flex-col
                  p-8 space-y-8`}>

                <div className='w-full z-10'>
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
                        <button className='es-button'
                            onClick={searchByItemNumber}
                            disabled={searchByItemNumberIsDisabled}
                            id='open-modal-a'>
                            Por Artículo
                        </button>
                    </div>

                    <div className='w-full'>
                        <button className='es-button'
                            onClick={searchByBatchNumber}
                            disabled={searchByBatchNumberIsDisabled}
                            id='open-modal-b'>
                            Por Lote
                        </button>
                    </div>
                </div>
            </div>

            <div className={`bg-white es-shadow-inverted 
            w-full h-auto absolute text-black rounded-t-[2.5rem]
            ${showModal ? `-translate-y-[calc(100svh/4)] flex opacity-100` : `top-[100svh] opacity-0`}
            ${showModalResult ? showEsCardSkeleton ? `-translate-y-[calc(100svh/2)]` : `-translate-y-[calc(100svh/2)]` : `top-[100svh]`}
            ${isModalHiddenDelayed ? `hidden opacity-0` : `flex`}
            transition-all duration-500 ease-in-out`}>

                <div className={`flex flex-col p-8 space-y-8 h-auto
                ${showEsCardSkeleton ? `h-[70svh]` : `h-auto`}`}>
                    <button className='es-button es-bg-gray-gradient w-8 
                    h-8 p-1 m-0 rounded-full flex
                    absolute right-[10%]'
                        onClick={closeModal}>
                        <IonIcon icon={arrowDown} className=' scale-75'></IonIcon>
                    </button>

                    <h1 className='text-4xl font-thin' ref={searchContainerRef}>Busqueda</h1>

                    {showSearchByItemNumberComponent &&
                        <SearchByItemNumberComponent
                            onSearch={handleSearch} />}

                    {showSearchByBatchNumberComponent &&
                        <SearchByBatchNumberComponent
                            onSearch={handleSearch} />}

                    {showEsCardSkeleton && <EsCardSkeleton />}

                    {showListEsCard &&
                        <ListEsCard datos={searchResults} />}

                </div>

            </div>
        </div>
    )
}

export default MainMenu