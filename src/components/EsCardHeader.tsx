import React from 'react'
import { EsCardHeaderProps } from '../types/EsCardHeaderProps';

const EsCardHeader: React.FC<EsCardHeaderProps> = ({ ITEMNMBR, ITEMDESC, DEF01STR }) => {
    return (
        <div className='es-card flex flex-col space-y-0 p-8'>
            <div className='flex flex-col w-full'>
                <p className='mt-2 text-2xl font-bold'>Artículo</p>
                <p className='mt-0 text-xl text '>{ITEMNMBR}</p>
            </div>
            <div className='flex flex-col w-full'>
                <p className='mt-2 text-2xl font-bold '>Descripción</p>
                <p className='mt-0 text-xl text text-justify'>{ITEMDESC}</p>
            </div>
            <div className='flex flex-col w-full'>
                <p className='mt-2 text-2xl font-bold'>Registro Sanitario</p>
                <p className='mt-0 text-xl text '>{DEF01STR ? DEF01STR : '-'}</p>
            </div>
        </div>
    );
};

export default EsCardHeader;