import React, { useEffect, useState } from 'react';
import { getItem } from '../../hooks/useTodo';
import ContextStore,{CardState} from './actionContext'
import CardComponent from './CardComponent';

const PHOTO_URL = 'https://picsum.photos/v2/list?page=2&limit=10'

export default function ActionCard() {

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

  useEffect(() => {
    getItem(setCards, PHOTO_URL)
  },[])

  return (
    <ContextStore.Provider value={cards}>
      <CardComponent/>
    </ContextStore.Provider>
  );
}

