import React from 'react';
import { EsCardInterface } from '../types/EsCardInterface';

export const EsCard = ({ ITEMNMBR, ITEMDESC, LOTNUMBR, BIN, EAN13Adaia,
    MFGDATE, EXPNDATE, QTYONHND, ATYALLOC, QTYDISPO }: EsCardInterface) => {
    return (
        <div className='es-card flex flex-col space-y-0 p-8'>

            <div className='flex flex-row'>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-2xl font-thin'>Artículo</p>
                    <p className='mt-0 text-xl text font-bold'>{ITEMNMBR}</p>
                </div>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-2xl font-thin'>Lote</p>
                    <p className='mt-0 text-xl text font-bold'>{LOTNUMBR}</p>
                </div>
            </div>

            <div className='flex flex-col w-full'>
                <p className='mt-2 text-2xl font-thin'>Descripción</p>
                <p className='mt-0 text-xl text font-bold text-justify'>{ITEMDESC}</p>
            </div>

            <div className='flex flex-row'>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-2xl font-thin'>Fecha Fab.</p>
                    <p className='mt-0 text-xl text font-bold'>{MFGDATE.toString().slice(0, 10)}</p>
                    <p className='mt-2 text-2xl font-thin'>Disponible</p>
                    <p className='mt-0 text-xl text font-bold'>{QTYDISPO}</p>
                </div>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-2xl font-thin'>Fecha Cad.</p>
                    <p className='mt-0 text-xl text font-bold'>{EXPNDATE.toString().slice(0, 10)}</p>
                    <p className='mt-2 text-2xl font-thin'>Existencia</p>
                    <p className='mt-0 text-xl text font-bold'>{QTYONHND}</p>
                </div>
            </div>

        </div>
    );
};
