import { FC, useEffect, useState } from 'react';
import { getItem } from '../../helpers/api';
import { PHOTO_URL } from '../../helpers/constants';
import { IcardState } from '../../helpers/interface';
import { CardItem } from './components/CardItem/CardItem';

export const Card: FC = () => {
  const URL = PHOTO_URL

  const [cards, setCards] = useState<IcardState[]>([]);

  useEffect(() => {
    const getState = async () => {
      const arrImage = await getItem(URL);
      setCards(arrImage);
    }
    getState();
  },[URL]);

  return (
    <CardItem cards={cards}/>
  );
};