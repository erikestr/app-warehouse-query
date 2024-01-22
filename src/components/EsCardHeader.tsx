/** React Imports */
import React from 'react'

/** Imports */
import { EsCardHeaderProps } from '../types/EsCardHeaderProps';

const EsCardHeader: React.FC<EsCardHeaderProps> = ({ ITEMNMBR, ITEMDESC, DEF01STR, DEF01DEC, DEF02DEC }) => {
    return (
        <div className='es-card flex flex-col space-y-0 p-8 text-center'>
            <div className='flex flex-row'>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-xl'>Artículo</p>
                    <p className='mt-0  text font-bold'>{ITEMNMBR}</p>
                </div>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-xl'>Registro Sanitario</p>
                    <p className='mt-0  text font-bold'>{DEF01STR ? DEF01STR : '-'}</p>
                </div>
            </div>
            <div className='flex flex-col w-full'>
                <p className='mt-2 text-xl'>Descripción</p>
                <p className='mt-0  text font-bold'>{ITEMDESC}</p>
            </div>
            <div className='flex flex-col w-full'>
            </div>
            <div className='flex flex-row'>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-xl'>Total</p>
                    <p className='mt-0 text-xl'>Existencias</p>
                    <p className='mt-0  text font-bold'>{DEF01DEC ? DEF01DEC : 0}</p>
                </div>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-xl'>Total</p>
                    <p className='mt-0 text-xl'>Disponibles</p>
                    <p className='mt-0  text font-bold'>{DEF02DEC ? DEF02DEC : 0}</p>
                </div>
            </div>
        </div>
    );
};

export default EsCardHeader;