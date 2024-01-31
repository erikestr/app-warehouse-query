import { IonContent, IonHeader, IonInfiniteScrollContent, IonItem, IonList } from '@ionic/react';
import React, { useEffect, useRef, useState } from 'react'
import EsCardHeader from '../../components/EsCardHeader';
import { EsCardInterface } from '../../types/EsCardInterface';
import { EsCard } from '../../components/EsCard';

/** Custom Css */
import './ItemsPage.css'
import { v1WharehouseInterface } from '../../types/v1WharehouseInterface';
import { totalsExistences } from '../../services/Api';
import { EsCardSkeleton } from '../../components/EsCardSkeleton';

export const ItemsPage = ({ data }: any) => {

    const [intialMarginTopIonList, setIntialMarginTopIonList] = useState(0)
    const headerRef: any = useRef(null)
    
    const [onHeaderTotals, setOnHeaderTotals]: any = useState()
    const [onHeaderTotalsStatus, setOnHeaderTotalsStatus]: any = useState(false)
    
    const userid = sessionStorage.getItem('sys_user') ?? 'sa';

    useEffect(() => {
        const fetchData = async () => {
            const result = await totalsExistences(userid, data[0].ITEMNMBR)
            if (result) {
                setOnHeaderTotals(result)
                setOnHeaderTotalsStatus(true)

                setIntialMarginTopIonList(getHeaderHeight);
            }
        }

        fetchData().catch(console.error)

        setIntialMarginTopIonList(getHeaderHeight);
    }, []);

    const getHeaderHeight = () => {
        if (headerRef && headerRef.current) {
            const node = headerRef.current;
            const bounding = node.getBoundingClientRect();
            return bounding.height;
        }
        return 0;
    }

    return (
        <div className='mt-0 h-[calc(100svh-1rem)]'>
            <IonContent fullscreen={false}>
                <IonHeader
                    slot='fixed'
                    ref={headerRef}>
                    <IonItem
                        lines='full'>

                        <div
                            className='p-2 pb-2 w-full'>
                            {!onHeaderTotalsStatus && <EsCardSkeleton />}
                            {onHeaderTotalsStatus && <EsCardHeader
                                ITEMNMBR={onHeaderTotals.ITEMNMBR ?? '-'}
                                ITEMDESC={onHeaderTotals.ITEMDESC ?? '-'}
                                DEF01STR={onHeaderTotals.DEF01STR ?? '-'}
                                DEF01DEC={onHeaderTotals.QTYONHND ?? '-'}
                                DEF02DEC={onHeaderTotals.QTYDISPO ?? '-'} />
                            }

                        </div>
                    </IonItem>
                </IonHeader>
                <IonList
                    lines='none'
                    style={
                        {
                            marginTop: `${intialMarginTopIonList - 8}px`
                        }
                    }>
                    {data.map((item: EsCardInterface, index: any) => (
                        <IonItem
                            key={index}>
                            <div
                                className='p-2 py-2 w-full'>
                                <EsCard
                                    key={index}
                                    {...item} />
                            </div>
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </div>
    )
}