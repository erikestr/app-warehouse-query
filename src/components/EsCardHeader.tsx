/** React Imports */
import React from 'react'

/** Imports */
import { EsCardHeaderProps } from '../types/EsCardHeaderProps';

const EsCardHeader: React.FC<EsCardHeaderProps> = ({ ITEMNMBR, ITEMDESC, DEF01STR }) => {
    return (
        <div className='es-card flex flex-col space-y-0 p-8 text-center'>
            <div className='flex flex-row'>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-2xl'>Artículo</p>
                    <p className='mt-0 text-xl text font-bold'>{ITEMNMBR}</p>
                </div>
                <div className='flex flex-col w-full'>
                    <p className='mt-2 text-2xl'>Registro Sanitario</p>
                    <p className='mt-0 text-xl text font-bold'>{DEF01STR ? DEF01STR : '-'}</p>
                </div>
            </div>
            <div className='flex flex-col w-full'>
                <p className='mt-2 text-2xl'>Descripción</p>
                <p className='mt-0 text-xl text font-bold'>{ITEMDESC}</p>
            </div>
            <div className='flex flex-col w-full'>
            </div>
        </div>
    );
};

export default EsCardHeader;