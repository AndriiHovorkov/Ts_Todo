import React, { useEffect, useState } from 'react';
import { getItem } from '../hooks/useTodo';
import ContextStore,{CardState} from './actionContext'
import CardComponent from './CardComponent';

const PHOTO_URL = 'https://jsonplaceholder.typicode.com/photos'

export default function ActionCard() {

  const [cards, setCards] = useState<CardState>([
    {
      albumId: 0,
      id: 0,
      title: 'title',
      url: '',
      thumbnailUrl: ''
    },
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

