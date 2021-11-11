import React, { FC, useEffect, useState } from 'react';
import { getItems } from '../../helpers/api';
import { PHOTO_URL } from '../../helpers/constants';
import { ICards } from '../../helpers/interface';
import { CardItem } from './components/CardItems/CardItems';

export const Cards: FC = () => {
  const [cards, setCards] = useState<ICards[]>([]);

  useEffect(() => {
    const getState = async ():Promise<void> => {
      const arrImage = await getItems(PHOTO_URL);
      setCards(arrImage as ICards[]);
    };
    getState();
  }, []);

  return (
    <CardItem cards={cards} />
  );
};
