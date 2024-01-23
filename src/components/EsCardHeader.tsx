/** React Imports */
import React from 'react'

/** Imports */
import { EsCardHeaderProps } from '../types/EsCardHeaderProps';
import { useMediaQuery } from '@uidotdev/usehooks';

const EsCardHeader: React.FC<EsCardHeaderProps> = ({ ITEMNMBR, ITEMDESC, DEF01STR, DEF01DEC, DEF02DEC }) => {
    const isSmallDevice = useMediaQuery("only screen and (max-width : 320px)")
    return (
        <div className='es-card-item flex flex-col space-y-0 p-4 text-center'>
            <div className='flex flex-row'>
                <div className='flex flex-col w-full'>
                    <p className={`mt-0  ${isSmallDevice ? `text-base` : `text-xl`}`}>Artículo</p>
                    <p className={`mt-0 font-bold ${isSmallDevice ? `text-sm` : `text-base`}`}>{ITEMNMBR}</p>
                </div>
                <div className='flex flex-col w-full'>
                    <p className={`mt-0  ${isSmallDevice ? `text-base` : `text-xl`}`}>Registro Sanitario</p>
                    <p className={`mt-0 font-bold ${isSmallDevice ? `text-sm` : `text-base`}`}>{DEF01STR ? DEF01STR : '-'}</p>
                </div>
            </div>
            <div className='flex flex-col w-full'>
                <p className={`mt-0 ${isSmallDevice ? `text-base` : `text-xl`}`}>Descripción</p>
                <p className={`mt-0 font-bold ${isSmallDevice ? `text-sm` : `text-base`}`}>{ITEMDESC}</p>
            </div>
            <div className='flex flex-col w-full'>
            </div>
            <div className='flex flex-row'>
                <div className='flex flex-col w-full'>
                    <p className={`mt-0  ${isSmallDevice ? `text-base` : `text-xl`}`}>Existencias</p>
                    <p className={`mt-0 font-bold ${isSmallDevice ? `text-sm` : `text-base`}`}>{DEF01DEC ? DEF01DEC?.toLocaleString() : '-'}</p>
                </div>
                <div className='flex flex-col w-full'>
                    <p className={`mt-0  ${isSmallDevice ? `text-base` : `text-xl`}`}>Disponibles</p>
                    <p className={`mt-0 font-bold ${isSmallDevice ? `text-sm` : `text-base`}`}>{DEF02DEC ? DEF02DEC?.toLocaleString() : '-'}</p>
                </div>
            </div>
        </div>
    );
};

export default EsCardHeader;