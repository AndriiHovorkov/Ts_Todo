import { useContext } from "react"
import ContextStore,{ CardState } from "./actionContext"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';

function CardComponent() {

    const cards = useContext<CardState>(ContextStore)

    return (
        <div className='cont'>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {cards.map(item => (
                        <Grid item xs={4}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.url}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.title}
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

export default CardComponent