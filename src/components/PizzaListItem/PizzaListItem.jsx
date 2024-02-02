import { useDispatch, useSelector } from "react-redux"
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
    const cart = useSelector(s=>s.cart);
    // const [isInCart, setIsInCart] = useState(false);

    const priceFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    });

    function isInCart(pizza) {
        // console.log("cart pizza", cart);
        let pizzaFound = cart.filter((pizzaInCart) => pizzaInCart.id === pizza.id);
        console.log("found pizza", pizzaFound);
        return pizzaFound.length != 0? true : false;
    }

    const addToCart = () => {
        // console.log(pizza);
        if(isInCart(pizza)) {
            dispatch({
                type: "REMOVE_FROM_CART",
                payload: pizza.id
            })
            
        // setIsInCart(true);
        } else {
            dispatch({
                type: "ADD_TO_CART",
                payload: pizza
            })
           
       // setIsInCart(false)
        }
    }

    
    
    console.log(isInCart(pizza));
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
            {isInCart(pizza)? <RemoveShoppingCartIcon/> : <AddShoppingCartIcon/>}
            </Button>
        </CardActions>
    </Card>
    </div>
    )
}

export default PizzaListItem;