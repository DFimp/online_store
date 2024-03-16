import React, { useContext } from 'react';
import { Context } from '../index';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';
import Container from "react-bootstrap/Container";

const NavBar = observer(() => {
    const { user } = useContext(Context);
    return (
        <Navbar bg="dark" variant="dark" >
            <Container>
                <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>КупиДевайс</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{ color: "white" }}>
                        <Button variant="outline-light">Админ панель</Button>{' '}
                        <Button variant="outline-light">Войти</Button>{' '}
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: "white" }}>
                        <Button variant="outline-light">Авторизация</Button>{' '}
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;