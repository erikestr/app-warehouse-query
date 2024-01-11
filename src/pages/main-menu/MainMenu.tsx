/** React Imports */
import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router'

/** Ionic Imports */
import {
    IonContent,
    IonIcon,
    IonImg,
    setupIonicReact,
} from '@ionic/react'

/** Imports */
import { arrowDown, arrowUp, exit } from 'ionicons/icons'
import { EsCardSkeleton } from '../../components/EsCardSkeleton'
import { EsCardNotResults } from '../../components/EsCardNotResults'
import { EsCard } from '../../components/EsCard'
import { SearchByItemNumberComponent } from '../../components/SearchByItemNumberComponent'
import { SearchByBatchNumberComponent } from '../../components/SearchByBatchNumberComponent'
import { Separator } from '../../components/Separator'
import EsCardHeader from '../../components/EsCardHeader'

/** Resources */
import Shape from '../../assets/images/shape_background.svg'

/** Custom Css */
import './MainMenu.css'
import EsCardByBatch from '../../components/EsCardByBatch'

setupIonicReact()

const MainMenu: React.FC = () => {
    const [currentTime, setCurrentTime] = useState(getFormattedTime())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(getFormattedTime())
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

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
    const ListEsCardByBatch = ({ datos }: any) => (
        datos.map(
            (item: any, index: any) => (
                <EsCardByBatch key={index} {...item} />
            )
        )
    )

    const searchByItemNumber = () => {
        setShowEsCardSkeleton(false)
        setShowModalDelayed(true)
        setTimeout(() => {
            setSearchResults([])
            setShowListEsCard(false)
            setIsCentered(false)
            setShowModal(true)
            setModalResult(false)
            setShowSearchByItemNumberComponent(true)
            setShowSearchByBatchNumberComponent(false)
        }, 100)
    }
    const searchByBatchNumber = () => {
        setShowEsCardSkeleton(false)
        setShowModalDelayed(true)
        setTimeout(() => {
            setSearchResults([])
            setShowListEsCard(false)
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
    const [searchResults, setSearchResults]: any
        = useState([])
    const [showEsCardSkeleton, setShowEsCardSkeleton]
        = useState(false)
    const [showEsCardNoResults, setShowEsCardNoResults]
        = useState(false)

    const clockContainerRef: any = useRef<HTMLElement>(null)
    const searchContainerRef: any = useRef<HTMLElement>(null)
    const [showModal, setShowModal] = useState(false)
    const [showModalDelayed, setShowModalDelayed] = useState(false)
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
        console.log('handleClickSearch', status)

        setSearchByItemNumberIsDisabled(true)
        setSearchByBatchNumberIsDisabled(true)

        setShowEsCardNoResults(false)
        setShowEsCardSkeleton(true)
        setModalResult(false)
        if (searchResults.length <= 0)
            setShowListEsCard(false)
    }
    const handleSearchError = (error: any) => {
        console.log('handleSearchError', error)

        setShowEsCardSkeleton(false)
        setShowEsCardNoResults(true)
        setSearchResults([])
        setShowListEsCard(false)
        setShowModal(true)
        setModalResult(false)
        setSearchByItemNumberIsDisabled(false)
        setSearchByBatchNumberIsDisabled(false)
    }

    const closeModal = () => {
        console.log('closeModal', true)
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

                    {showListEsCard && showSearchByItemNumberComponent &&
                        <EsCardHeader
                            ITEMNMBR={searchResults[0].ITEMNMBR}
                            ITEMDESC={searchResults[0].ITEMDESC}
                            DEF01STR={searchResults[0].DEF01STR} />
                    }

                    {showListEsCard && showSearchByItemNumberComponent &&
                        <Separator />
                    }

                    {showListEsCard && showSearchByItemNumberComponent &&
                        <ListEsCard datos={searchResults} />}

                    {showListEsCard && showSearchByBatchNumberComponent &&
                        <ListEsCardByBatch datos={searchResults} />}

                </div>

            </div>
        </IonContent>
    )
}

export default MainMenu