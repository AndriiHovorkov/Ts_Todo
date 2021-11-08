import { useContext} from "react"
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
        <div>
            <div className='cont'>
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
        </div>
        
    )
}

export default CardComponent

// const [currentPage, setCurrentPage]:any = useState(1)
//     const [countries, setCountries]:any  = useState(10)


//     const lastCount = currentPage * countries
//     const firstCount = lastCount - countries
//     const currentCounter = countries.slice(firstCount,lastCount)

//     const PageNumber = []
//     const coun = Math.ceil(totalCountries / countries)

//     for(let i=1; 1 < coun; i++) {
//         PageNumber.push(i)
//     }
