import React, {useState} from 'react';
import classes from './AuthForm.module.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {ErrorMessage, Form, Formik} from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import {signIn, signUp} from "../../actions/actionCreators";

const AuthForm = () => {
    const dispatch = useDispatch();
    const [isLogin, switchAuth] = useState(true)

    const signUpHandler = ({email, password}) => {
        dispatch(signUp(email, password))
    };

    const signInHandler = ({email, password}) => {
        dispatch(signIn(email, password))
    };

    const onSubmitHandler = values => {
        isLogin ? signInHandler(values) : signUpHandler(values)
    };

    const changeIsLogin = (e, resetForm) => {
        e.preventDefault();
        switchAuth(!isLogin);
        resetForm();
    };

    return (
        <div className={classes.container}>
            <Formik
                initialValues={{email: "", password: ""}}
                onSubmit={onSubmitHandler}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email("Email must be valid")
                        .required("Required"),
                    password: Yup.string()
                        .min(10, 'Too Short!')
                        .max(20, 'Too Long!')
                        .required("Required")
                })}
            >
                {props => {
                    const {
                        values,
                        handleChange,
                        resetForm
                    } = props;

                    return (
                        <React.Fragment>
                            <Form className={classes.authForm}>
                                <h1> {isLogin ? "Авторизация" : "Регистрация"} </h1>
                                <TextField
                                    name={"email"}
                                    onChange={handleChange}
                                    value={values.email}
                                    id="standard-full-width"
                                    label="Email"
                                    style={{margin: 8}}
                                    placeholder="Введите email"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <ErrorMessage className={classes.err} component="div" name="email"/>
                                <TextField
                                    name={"password"}
                                    onChange={handleChange}
                                    value={values.password}
                                    id="standard-full-width"
                                    type="password"
                                    label="Пароль"
                                    style={{margin: 8}}
                                    placeholder="Введите пароль"
                                    helperText="Не мене 8 символов!"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <ErrorMessage className={classes.err} component="div" name="password"/>
                                <div className={classes.btn}>

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        disabled={!(values.email && values.password)}
                                    >
                                        {isLogin ? "Войти" : "Зарегистрироваться"}
                                    </Button>
                                </div>
                            </Form>
                            {!isLogin ?
                                <p className={classes.info}>
                                    У Вас есть учетная запись?
                                    <button className={classes.register} onClick={(e) => {
                                        changeIsLogin(e, resetForm)
                                    } }>Залогиниться.</button>
                                </p>
                                : <p className={classes.info}>
                                    Впервые на нашем сайте?
                                    <button className={classes.register} onClick={(e) => {
                                        changeIsLogin(e, resetForm)
                                    } }>Создайте
                                        аккаунт.</button>
                                </p>}
                        </React.Fragment>
                    );
                }}
            </Formik>
        </div>
    );
}

export default AuthForm;

