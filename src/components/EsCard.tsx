/** Imports */
import { format } from 'date-fns'
import { EsCardInterface } from '../types/EsCardInterface'

export const EsCard = ({ ITEMNMBR, ITEMDESC, LOTNUMBR, BIN, EAN13Adaia,
    MFGDATE, EXPNDATE, QTYONHND, ATYALLOC, QTYDISPO }: EsCardInterface) => {
    return (
        <div className='es-card flex flex-col space-y-0 p-8'>

            <div className='flex flex-row'>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-2xl font-bold'>Almacen</p>
                    <p className='mt-0 text-xl text '>-</p>
                </div>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-2xl font-bold'>Lote</p>
                    <p className='mt-0 text-xl text '>{LOTNUMBR}</p>
                </div>
            </div>

            {/* <div className='flex flex-col w-full'>
                <p className='mt-2 text-2xl font-bold'>Descripción</p>
                <p className='mt-0 text-xl text  text-justify'>{ITEMDESC}</p>
            </div> */}

            <div className='flex flex-row'>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-2xl font-bold'>Fecha Fab.</p>
                    <p className='mt-0 text-xl text'>{format(MFGDATE, 'dd-MM-yyyy')}</p>

                    <p className='mt-2 text-2xl font-bold'>Disponible</p>
                    <p className='mt-0 text-xl text '>{QTYDISPO}</p>
                </div>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-2xl font-bold'>Fecha Cad.</p>
                    <p className='mt-0 text-xl text '>{format(EXPNDATE, 'dd-MM-yyyy')}</p>

                    <p className='mt-2 text-2xl font-bold'>Existencia</p>
                    <p className='mt-0 text-xl text '>{QTYONHND}</p>
                </div>
            </div>

        </div>
    )
}
