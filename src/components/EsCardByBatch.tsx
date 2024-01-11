import { EsCardInterface } from '../types/EsCardInterface'
import { format } from 'date-fns'

const EsCardByBatch = ({ ITEMNMBR, ITEMDESC, DEF01STR, LOTNUMBR, BIN, EAN13Adaia,
    MFGDATE, EXPNDATE, QTYONHND, ATYALLOC, QTYDISPO }: EsCardInterface) => {
    return (
        <div className='es-card flex flex-col space-y-0 p-8 text-center'>

            <div className='flex flex-row'>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-2xl'>Artículo</p>
                    <p className='mt-0 text-xl font-bold'>{ITEMNMBR}</p>
                </div>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-2xl'>Registro Sanitario</p>
                    <p className='mt-0 text-xl font-bold'>{DEF01STR}</p>
                </div>
            </div>

            <div className='flex flex-row'>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-2xl'>Descripción</p>
                    <p className='mt-0 text-xl font-bold'>{ITEMDESC}</p>
                </div>
            </div>

            <div className='flex flex-row'>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-2xl'>Fecha Fab.</p>
                    <p className='mt-0 text-xl font-bold'>{format(MFGDATE, 'dd-MM-yyyy')}</p>
                </div>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-2xl'>Fecha Cad.</p>
                    <p className='mt-0 text-xl font-bold'>{format(EXPNDATE, 'dd-MM-yyyy')}</p>
                </div>

            </div>

            <div className='flex flex-row'>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-2xl'>Disponible</p>
                    <p className='mt-0 text-xl font-bold'>{QTYDISPO > 0 ? QTYDISPO.toLocaleString() : '-'}</p>
                </div>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-2xl'>Existencia</p>
                    <p className='mt-0 text-xl font-bold'>{QTYONHND > 0 ? QTYONHND.toLocaleString() : '-'}</p>
                </div>
            </div>

        </div>
    )
}

export default EsCardByBatch