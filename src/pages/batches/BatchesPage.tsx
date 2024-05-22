import { IonContent, IonHeader, IonItem, IonList } from '@ionic/react'
import { useRef, useState } from 'react'
import { EsCardInterface } from '../../types/EsCardInterface'
import EsCardByBatch from '../../components/EsCardByBatch'

export const BatchesPage = ({ data }: any) => {

    const [intialMarginTopIonList, setIntialMarginTopIonList] = useState(0)
    const headerRef: any = useRef(null)
    
  return (
    <div className='mt-0 h-[calc(100svh-1rem)]'>
            <IonContent fullscreen={false}>
                {/* <IonHeader
                    slot='fixed'
                    ref={headerRef}>
                    <IonItem
                        lines='full'>

                        <div
                            className='p-2 pb-2 w-full'>
                        </div>
                    </IonItem>
                </IonHeader> */}
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
                                <EsCardByBatch
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