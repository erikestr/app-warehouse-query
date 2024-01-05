import { IonIcon } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';
import { useState } from 'react';
import { EsCardInterface } from '../types/EsCardInterface';

export const SearchByBatchNumberComponent = ({onSearch}: any) => {
    const [searchResults, setSearchResults]: any = useState([]);

    const [isSearching, setIsSearching] = useState(false)
    const [code, setCode] = useState('')

    const mockResults: EsCardInterface[] = [
        { ITEMNMBR: 'Art7', BATCHNMBR: 'Lote7', LOCATION: 'Ubic7', GPLOCATION: 'UbicGP7', QUANTITY: 999 },
        { ITEMNMBR: 'Art8', BATCHNMBR: 'Lote8', LOCATION: 'Ubic8', GPLOCATION: 'UbicGP8', QUANTITY: 666},
        { ITEMNMBR: 'Art9', BATCHNMBR: 'Lote9', LOCATION: 'Ubic9', GPLOCATION: 'UbicGP9', QUANTITY: 333 },
        { ITEMNMBR: 'Art9', BATCHNMBR: 'Lote9', LOCATION: 'Ubic9', GPLOCATION: 'UbicGP9', QUANTITY: 333 },
        { ITEMNMBR: 'Art9', BATCHNMBR: 'Lote9', LOCATION: 'Ubic9', GPLOCATION: 'UbicGP9', QUANTITY: 333 },
        { ITEMNMBR: 'Art9', BATCHNMBR: 'Lote9', LOCATION: 'Ubic9', GPLOCATION: 'UbicGP9', QUANTITY: 333 },
        { ITEMNMBR: 'Art9', BATCHNMBR: 'Lote9', LOCATION: 'Ubic9', GPLOCATION: 'UbicGP9', QUANTITY: 333 },
        { ITEMNMBR: 'Art9', BATCHNMBR: 'Lote9', LOCATION: 'Ubic9', GPLOCATION: 'UbicGP9', QUANTITY: 333 },
        { ITEMNMBR: 'Art9', BATCHNMBR: 'Lote9', LOCATION: 'Ubic9', GPLOCATION: 'UbicGP9', QUANTITY: 333 },
        { ITEMNMBR: 'Art9', BATCHNMBR: 'Lote9', LOCATION: 'Ubic9', GPLOCATION: 'UbicGP9', QUANTITY: 333 },
        { ITEMNMBR: 'Art9', BATCHNMBR: 'Lote9', LOCATION: 'Ubic9', GPLOCATION: 'UbicGP9', QUANTITY: 333 },
        { ITEMNMBR: 'Art9', BATCHNMBR: 'Lote9', LOCATION: 'Ubic9', GPLOCATION: 'UbicGP9', QUANTITY: 333 },
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
                        placeholder='Lote'
                        value={code} onChange={(e) => setCode(e.target.value)}
                        spellCheck='false' />
                    <span></span>
                </span>
                <button className='w-12 h-12 p-4 m-0 es-bg-blue-gradient rounded-full flex'
                    onClick={handleSearch}
                    disabled={isSearching}>
                    <IonIcon icon={searchOutline} className=' scale-150'></IonIcon>
                </button>
            </div>
        </div>
    );
};
