/** Imports */
import { format } from 'date-fns'
import { EsCardInterface } from '../types/EsCardInterface'

export const EsCard = ({ ITEMNMBR, ITEMDESC, LOTNUMBR, BIN, EAN13Adaia,
    MFGDATE, EXPNDATE, QTYONHND, ATYALLOC, QTYDISPO }: EsCardInterface) => {
    return (
        <div className='es-card flex flex-col space-y-0 p-8 text-center'>

            <div className='flex flex-row justify-center'>
                <div className='flex flex-col'>
                    <p className='mt-2 text-xl'>Lote</p>
                    <p className='mt-0 text font-bold'>{LOTNUMBR}</p>
                </div>
            </div>
            <div className='flex flex-row'>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-xl'>Fecha Fab.</p>
                    <p className='mt-0  text font-bold'>{format(MFGDATE, 'dd-MM-yyyy')}</p>
                </div>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-xl'>Fecha Cad.</p>
                    <p className='mt-0  text font-bold'>{format(EXPNDATE, 'dd-MM-yyyy')}</p>
                </div>

            </div>

            <div className='flex flex-row'>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-xl'>Existencia</p>
                    <p className='mt-0  text font-bold'>{QTYONHND > 0 ? QTYONHND?.toLocaleString() : '-'}</p>
                </div>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-xl'>Disponible</p>
                    <p className='mt-0  text font-bold'>{QTYDISPO > 0 ? QTYDISPO.toLocaleString() : '-'}</p>
                </div>
            </div>

        </div>
    )
}
