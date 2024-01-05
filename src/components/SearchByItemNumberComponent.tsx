import { IonIcon } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';
import { useState } from 'react';
import { EsCardInterface } from '../types/EsCardInterface';

export const SearchByItemNumberComponent = ({ onSearch }: any) => {
    const [searchResults, setSearchResults]: any = useState([]);

    const [isSearching, setIsSearching] = useState(false)
    const [code, setCode] = useState('')

    const mockResults: EsCardInterface[] = [
        { ITEMNMBR: 'Art1', BATCHNMBR: 'Lote1', LOCATION: 'Ubic1', GPLOCATION: 'UbicGP1', QUANTITY: 10 },
        { ITEMNMBR: 'Art2', BATCHNMBR: 'Lote2', LOCATION: 'Ubic2', GPLOCATION: 'UbicGP2', QUANTITY: 20 },
    ];

    const handleSearch = () => {
        setIsSearching(true)
        setSearchResults(mockResults);
        setIsSearching(false)
        onSearch(mockResults);
    }

    return (
        <div className="es-card flex-col space-x-2">
            <div className='flex flex-row space-x-2'>
                <span className='es-input-span w-full'>
                    <input className='es-input w-full' type='text'
                        placeholder='Artículo'
                        value={code} onChange={(e) => setCode(e.target.value)}
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
    );
};
