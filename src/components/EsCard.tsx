import React from 'react';
import { EsCardInterface } from '../types/EsCardInterface';

export const EsCard = ({ ITEMNMBR, BATCHNMBR, LOCATION, GPLOCATION, QUANTITY }: EsCardInterface) => {
    return (
        <div className='es-card flex flex-row space-y-0 p-8'>
            <div className='flex flex-col w-full'>
                <p className='mt-2 text-2xl font-thin'>Artículo</p>
                <p className='mt-0 text-xl text font-bold'>{ITEMNMBR}</p>
                <p className='mt-2 text-2xl font-thin'>Lote</p>
                <p className='mt-0 text-xl text font-bold'>{BATCHNMBR}</p>
            </div>

            <div className='flex flex-col w-full'>
                <p className='mt-2 text-2xl font-thin'>Ubicación</p>
                <p className='mt-0 text-xl text font-bold'>{LOCATION}</p>
                <p className='mt-2 text-2xl font-thin'>Cantidad</p>
                <p className='mt-0 text-xl text font-bold'>{QUANTITY}</p>
            </div>


        </div>
        // <div className='relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12'>
        //     <div
        //         className='group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10'>
        //         <span className='absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]'></span>
        //         <div className='relative z-10 mx-auto max-w-md'>
                    
                    
        //             <div
        //                 className='space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90'>
        //                 <p>Text</p>
        //             </div>
        //             <div className='pt-5 text-base font-semibold leading-7'>
        //                 <p>
        //                     <a href='#' className='text-sky-500 transition-all duration-300 group-hover:text-white'>Test;
        //                     </a>
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};
