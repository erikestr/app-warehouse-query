/** Ionic Imports */
import { IonSkeletonText } from '@ionic/react';

/** Imports */
import './EsCardSkeleton.css'

export const EsCardSkeleton = () => {
    return (
        <div className='es-card flex flex-row space-y-0 p-8 text-black'>
            <div className='flex flex-col w-full'>
                <p className='mt-2 text-2xl font-thin'>
                    <IonSkeletonText animated={true}
                        className='h-6 w-24'></IonSkeletonText>
                </p>
                <p className='mt-0 text-xl text font-bold'>
                    <IonSkeletonText animated={true}
                        className='h-4 w-20'></IonSkeletonText>
                </p>
                <p className='mt-2 text-2xl font-thin'>
                    <IonSkeletonText animated={true}
                        className='h-6 w-24'></IonSkeletonText>
                </p>
                <p className='mt-0 text-xl text font-bold'>
                    <IonSkeletonText animated={true}
                        className='h-4 w-20'></IonSkeletonText>
                </p>
            </div>

            <div className='flex flex-col w-full'>
                <p className='mt-2 text-2xl font-thin'>
                    <IonSkeletonText animated={true}
                        className='h-6 w-24'></IonSkeletonText>
                </p>
                <p className='mt-0 text-xl text font-bold'>
                    <IonSkeletonText animated={true}
                        className='h-4 w-20'></IonSkeletonText>
                </p>
                <p className='mt-2 text-2xl font-thin'>
                    <IonSkeletonText animated={true}
                        className='h-6 w-26'></IonSkeletonText>
                </p>
                <p className='mt-0 text-xl text font-bold'>
                    <IonSkeletonText animated={true}
                        className='h-4 w-20'></IonSkeletonText>
                </p>
            </div>


        </div>
    );
};
