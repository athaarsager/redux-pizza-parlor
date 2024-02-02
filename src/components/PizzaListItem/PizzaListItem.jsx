import { useDispatch } from "react-redux"
import { useState } from "react";
import './PizzaListItem.css';

// Button Icons
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

// Stuff to make the MI pizza cards
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function PizzaListItem({pizza}) {
    const dispatch = useDispatch();
    const [isInCart, setIsInCart] = useState(false);

    const priceFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    });

    const addToCart = () => {
        console.log(pizza);
        if(!isInCart) {
            dispatch({
                type: "ADD_TO_CART",
                payload: pizza
            })
            
        setIsInCart(true);
        } else {
            dispatch({
                type: "REMOVE_FROM_CART",
                payload: pizza.id
            })
        setIsInCart(false)
        }
    }

    return(
    <div className="cardContainer"> 
    <Card sx={{ maxWidth: 345 }} key={pizza.id} className="card">
        <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image={pizza.image_path}
                alt={pizza.description}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {pizza.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {pizza.description}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                {priceFormatter.format(pizza.price)}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary" onClick={addToCart}>
            {isInCart ? <RemoveShoppingCartIcon/> : <AddShoppingCartIcon/>}
            </Button>
        </CardActions>
    </Card>
    </div>
    )
}

export default PizzaListItem;