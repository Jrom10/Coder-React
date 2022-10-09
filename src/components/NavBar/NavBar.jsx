import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CartWidget from './CartWidget';
import {Link, NavLink} from "react-router-dom";

export default function NavBar() {

    return (
        <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <img src='https://img.icons8.com/clouds/344/react.png' alt='React Logo' style={{width:'5rem'}}/>
            <NavLink to='/' className='links'>
                <Typography
                    variant="h6"
                    noWrap
                    sx={{
                    mr: 30,
                    display: { xs: 'none', md: 'flex'},
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    ReAcT-StOrE
                </Typography>
            </NavLink>
            <div style={{display:'flex', justifyContent:'space-around', width:'50rem'}}>
                <Link to="/category/Futbol" className='defLinks'>Futbol</Link>
                <br />
                <Link to="/category/Boxeo" className='defLinks'>Boxeo</Link>
                <br />
                <Link to="/Category/Karate" className='defLinks'>Karate</Link>
                <br />
                <Link to="/Category/Featured" className='defLinks'>Destacado</Link>
                <br />
            </div>
            <NavLink to='/cart'>
            <CartWidget/>
            </NavLink>
            </Toolbar>
        </Container>
        </AppBar>
    );
}