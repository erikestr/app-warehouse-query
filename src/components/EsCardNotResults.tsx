/** Custom Css */
import './EsCardSkeleton.css'

export const EsCardNotResults = () => {
    return (
        <div className='es-card h-48 flex flex-col space-y-0 p-8 text-black
         items-center justify-center'>

            <p className='text-thin text-4xl text-gray-300'>Sin resultados...</p>

        </div>
    );
};
