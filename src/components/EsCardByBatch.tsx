import { EsCardInterface } from '../types/EsCardInterface'
import { format } from 'date-fns'

const EsCardByBatch = ({ ITEMNMBR, ITEMDESC, DEF01STR, LOTNUMBR, BIN, EAN13Adaia,
    MFGDATE, EXPNDATE, QTYONHND, ATYALLOC, QTYDISPO }: EsCardInterface) => {
    return (
        <div className='es-card-item flex flex-col space-y-0 p-4 text-center'>

            <div className='flex flex-row'>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-xl'>Artículo</p>
                    <p className='mt-0  font-bold'>{ITEMNMBR}</p>
                </div>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-xl'>Registro Sanitario</p>
                    <p className='mt-0  font-bold'>{DEF01STR}</p>
                </div>
            </div>

            <div className='flex flex-row'>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-xl'>Descripción</p>
                    <p className='mt-0  font-bold'>{ITEMDESC}</p>
                </div>
            </div>

            <div className='flex flex-row'>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-xl'>Fecha Fab.</p>
                    <p className='mt-0  font-bold'>{format(MFGDATE, 'dd-MM-yyyy')}</p>
                </div>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-xl'>Fecha Cad.</p>
                    <p className='mt-0  font-bold'>{format(EXPNDATE, 'dd-MM-yyyy')}</p>
                </div>

            </div>

            <div className='flex flex-row'>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-xl'>Existencia</p>
                    <p className='mt-0  font-bold'>{QTYONHND > 0 ? QTYONHND.toLocaleString() : '-'}</p>
                </div>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-xl'>Disponible</p>
                    <p className='mt-0  font-bold'>{QTYDISPO > 0 ? QTYDISPO.toLocaleString() : '-'}</p>
                </div>
            </div>

        </div>
    )
}

export default EsCardByBatch