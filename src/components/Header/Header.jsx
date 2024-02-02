import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import { useHistory } from "react-router-dom/cjs/react-router-dom";



function Header() {

    return (
    <>
        <header className='App-header'>
            <h1 className='App-title'>Live, Leavitt, Pizza</h1>
        </header>
    </>
    )
}

export default Header;