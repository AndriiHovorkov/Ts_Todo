import { FC } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { cardStyles } from "../../cardStyles";
import { cardsProps } from "../../../../helpers/interface";

export const CardItem: FC<cardsProps>= ({cards}) => {
    const classes  = cardStyles();

    return (
        <div className={classes.cont}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {cards.map(item => (
                    <Grid item xs={4} key={item.id}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.download_url}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        Author: {item.author}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}