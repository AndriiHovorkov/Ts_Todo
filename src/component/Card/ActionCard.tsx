import React, { FC, useEffect, useState } from 'react';
import { getItem } from '../../Helper/api';
import { PHOTO_URL } from '../../Helper/url';
import ContextStore,{CardState} from './actionContext'
import CardComponent from './CardComponent';

export const ActionCard: FC = () => {

  const [cards, setCards] = useState<CardState>([
    {
      author: "Benjamin Combs",
      download_url: "https://picsum.photos/id/1008/5616/3744",
      height: 3744,
      id: "1008",
      url: "https://unsplash.com/photos/5L4XAgMSno0",
      width: 5616
    }
  ])

const getState = async () => {
  const arrImage = await getItem(PHOTO_URL)
  setCards(arrImage)
}
  useEffect(() => {
    getState()
  },[])

  return (
    <ContextStore.Provider value={cards}>
      <CardComponent/>
    </ContextStore.Provider>
  );
}
export default ActionCard
