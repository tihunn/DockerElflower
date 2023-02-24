import React, {useState} from "react";
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../Components/AppRouter/const";
import {loginOrReg} from "../../store/userReducer";


const Auth = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{props.isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder={"Введите email"}
                        value={email}
                        onChange={e => setEmail(e.target.value)}

                    />
                    <Form.Control
                        className="mt-3"
                        placeholder={"Введите пароль"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    {!props.isLogin &&
                        <Form.Control
                            className="mt-3"
                            placeholder={"Не обязательно. Введите как вас зовут"}
                        />}
                    {!props.isLogin &&
                        <Form.Control
                            className="mt-3"
                            placeholder={"Не обязательно. Введите номер телефона"}
                        />}

                    <div className="d-flex justify-content-between mt-3">
                        {props.isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}> Зарегистрируйтесь </NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}> Войдите </NavLink>
                            </div>
                        }
                        <Button
                            variant={"outline-success"}
                            onClick={ () => props.loginOrReg(email, password, props.isLogin) }
                        >
                            {props.isLogin ? "Войти" : "Регистрация"}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    )
}

export default Auth;