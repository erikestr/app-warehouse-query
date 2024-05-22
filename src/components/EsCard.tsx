/** Imports */
import { format } from 'date-fns'
import { EsCardInterface } from '../types/EsCardInterface'
import { useMediaQuery } from '@uidotdev/usehooks'

export const EsCard = ({ ITEMNMBR, ITEMDESC, LOTNUMBR, BIN, EAN13Adaia,
    MFGDATE, EXPNDATE, QTYONHND, ATYALLOC, QTYDISPO }: EsCardInterface) => {
    const isSmallDevice = useMediaQuery("only screen and (max-width : 320px)")
    return (
        <div className='es-card-item flex flex-col space-y-0 p-4 text-center'>

            <div className='flex flex-row justify-center'>
                <div className='flex flex-col'>
                    <p className={`mt-0 ${isSmallDevice ? `text-base` : `text-xl`}`}>Lote</p>
                    <p className={`mt-0 font-bold ${isSmallDevice ? `text-sm` : `text-base`}`}>{LOTNUMBR}</p>
                </div>
            </div>
            <div className='flex flex-row'>
                <div className='flex flex-col w-full'>
                    <p className={`mt-0 ${isSmallDevice ? `text-base` : `text-xl`}`}>Fecha Fab.</p>
                    <p className={`mt-0 font-bold ${isSmallDevice ? `text-sm` : `text-base`}`}>{format(MFGDATE, 'dd-MM-yyyy')}</p>
                </div>
                <div className='flex flex-col w-full'>
                    <p className={`mt-0 ${isSmallDevice ? `text-base` : `text-xl`}`}>Fecha Cad.</p>
                    <p className={`mt-0 font-bold ${isSmallDevice ? `text-sm` : `text-base`}`}>{format(EXPNDATE, 'dd-MM-yyyy')}</p>
                </div>

            </div>

            <div className='flex flex-row'>
                <div className='flex flex-col w-full'>
                    <p className={`mt-0 ${isSmallDevice ? `text-base` : `text-xl`}`}>Existencia</p>
                    <p className={`mt-0 font-bold ${isSmallDevice ? `text-sm` : `text-base`}`}>{QTYONHND > 0 ? QTYONHND?.toLocaleString() : '-'}</p>
                </div>
                <div className='flex flex-col w-full'>
                    <p className={`mt-0 ${isSmallDevice ? `text-base` : `text-xl`}`}>Disponible</p>
                    <p className={`mt-0 font-bold ${isSmallDevice ? `text-sm` : `text-base`}`}>{QTYDISPO > 0 ? QTYDISPO.toLocaleString() : '-'}</p>
                </div>
            </div>

        </div>
    )
}
