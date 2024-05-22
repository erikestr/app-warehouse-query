/** React Imports */
import { useState } from 'react';

/** Ionic Imports */
import { IonIcon } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';

/** Imports */
import { listExistences } from '../services/Api';
import { v1WharehouseInterface } from '../types/v1WharehouseInterface';
import { useMediaQuery } from '@uidotdev/usehooks';

export const SearchByItemNumberComponent = ({ onSearch, onClickSearch, onError }: any) => {
    const [searchResults, setSearchResults]: any = useState([])
    const [isSearching, setIsSearching] = useState(false)
    const [code, setCode] = useState('')
    const isSmallDevice = useMediaQuery("only screen and (max-width : 320px)")

    const userid = sessionStorage.getItem('sys_user') ?? 'sa';

    const handleSearch = async () => {
        onClickSearch(true)
        setIsSearching(true)
        try {
            const result: v1WharehouseInterface[] = await listExistences(userid, code, undefined)

            if (result != null) {
                setSearchResults(result)
                onSearch(result)
            }
        } catch (error: any) {
            onError(error.message)
            console.error('Error:', error.message)
        }
        setIsSearching(false)
    }

    const handleKeyUp = (event: any) => {
        if (event.key === "Enter")
            handleSearch()
    }

    return (
        <div
            className="es-card flex-col space-x-2">
            <div
                className='flex flex-row space-x-2'>
                <span
                    className={`es-input-span w-full 
                    transition-all
                    ${isSmallDevice
                            ? `h-[2.75rem]`
                            : `h-12`}`}>
                    <input
                        className={`es-input w-full
                        transition-all
                        ${isSmallDevice
                                ? `text-sm h-[2.25rem] px-1`
                                : `text-xl h-10`}`}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder='Artículo'
                        onKeyUp={handleKeyUp}
                        autoComplete='off'
                        spellCheck='false'
                        value={code}
                        type='text' />
                    <span></span>
                </span>

                <button
                    className='es-button w-12 h-12 p-3 m-0 rounded-full flex'
                    onClick={handleSearch}
                    disabled={isSearching}>
                    <IonIcon
                        icon={searchOutline}
                        className=' scale-110'></IonIcon>
                </button>

            </div>
        </div>
    )
};
