/** React Imports */
import { useState } from 'react';

/** Ionic Imports */
import { IonIcon } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';

/** Imports */
import { listExistences } from '../services/Api';
import { v1WharehouseInterface } from '../types/v1WharehouseInterface';

export const SearchByItemNumberComponent = ({ onSearch, onClickSearch, onError }: any) => {
    const [searchResults, setSearchResults]: any = useState([])

    const [isSearching, setIsSearching] = useState(false)
    const [code, setCode] = useState('')

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
        <div className="es-card flex-col space-x-2">
            <div className='flex flex-row space-x-2'>

                <span className='es-input-span w-full'>
                    <input className='es-input w-full' type='text'
                        placeholder='Artículo'
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        onKeyUp={handleKeyUp}
                        autoComplete='off'
                        spellCheck='false' />
                    <span></span>
                </span>

                <button className='es-button w-12 h-12 p-3 m-0 rounded-full flex'
                    onClick={handleSearch}
                    disabled={isSearching}>
                    <IonIcon icon={searchOutline} className=' scale-110'></IonIcon>
                </button>

            </div>
        </div>
    )
};
