import React, {useContext, useState} from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/esm/Form';
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userApi';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const Auth = observer(() => {
    const {user} = useContext(Context);
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const click = async () => {
        let date;
        if (isLogin) {
            date = await login(email, password);
        } else {
            date = await registration(email, password);
        }
        user.setUser(user);
        user.setIsAuth(true);
    }   

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className='p-5'>
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    {isLogin ?
                        <div className="mt-3 align-self-center">
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                        </div>
                        :
                        <div className="mt-3 align-self-center">
                            Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                        </div>
                    }
                    <Button
                        className="mt-3"
                        variant="outline-success"
                        onClick={click}
                    >
                        {isLogin ? "Войти" : "Регистрация"}
                    </Button>{' '}
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;