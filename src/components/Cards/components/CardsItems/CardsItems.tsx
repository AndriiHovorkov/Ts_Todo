import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { ICardsProps } from '../../../../helpers/interface';
import { cardsItemStyles } from './cardItemStyle';

export const CardsItems: FC<ICardsProps> = ({ cards }) => {
  const classes = cardsItemStyles();

  return (
    <Box sx={{ width: '100%', marginTop: 10 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {cards.map((item) => (
          <Grid item xs={4} key={item.id}>
            <Card className={classes.cardItemContaiter} sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.download_url}
                  alt="image"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Author:
                    {' '}
                    {item.author}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
