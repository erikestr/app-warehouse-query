import { IonContent, IonHeader, IonInfiniteScrollContent, IonItem, IonList } from '@ionic/react';
import React, { useEffect, useRef, useState } from 'react'
import EsCardHeader from '../../components/EsCardHeader';
import { EsCardInterface } from '../../types/EsCardInterface';
import { EsCard } from '../../components/EsCard';

/** Custom Css */
import './ItemsPage.css'
console.clear();

export const ItemsPage = ({ data }: any) => {

    const [intialMarginTopIonList, setIntialMarginTopIonList] = useState(0)
    const headerRef: any = useRef(null)

    useEffect(() => {
        if (headerRef && headerRef.current) {
            const node = headerRef.current;
            const bounding = node.getBoundingClientRect();
            setIntialMarginTopIonList(bounding.height);
        }
    }, []);

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
                            <EsCardHeader
                                ITEMNMBR={data[0].ITEMNMBR}
                                ITEMDESC={data[0].ITEMDESC}
                                DEF01STR={data[0].DEF01STR}
                                DEF01DEC={data.reduce(
                                    (accumulator: any, currentValue: EsCardInterface) => {
                                        return accumulator + currentValue.QTYONHND
                                    }, 0)
                                }
                                DEF02DEC={data.reduce(
                                    (accumulator: any, currentValue: EsCardInterface) => {
                                        return accumulator + currentValue.QTYDISPO;
                                    }, 0)
                                } />
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