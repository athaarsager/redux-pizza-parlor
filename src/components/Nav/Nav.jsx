import { NavLink } from "react-router-dom/cjs/react-router-dom";
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import { useHistory } from "react-router-dom/cjs/react-router-dom";



function Nav() {
    const history = useHistory();

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

    return(
        <>
        <Stack spacing={2} direction="row">
        <IconButton aria-label="home-page" onClick={() => history.push('/')}>
            <StyledBadge color="primary">
                <HomeIcon />
            </StyledBadge>
        </IconButton>
        <IconButton aria-label="cart" onClick={() => history.push('/checkout')}>
            <StyledBadge color="secondary">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
        </Stack>
        </>
    )
}

export default Nav;