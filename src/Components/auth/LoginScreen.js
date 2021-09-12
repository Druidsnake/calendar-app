import React from 'react';

import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';
import { startLogin, startRegister } from '../../redux/actions/auth';
import '../../styles/login.css';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const initialLoginForm = {
        login_email: 'drullian@gmail.com',
        login_password: 'casacasa'
    }

    const initialRegisterForm = {
        register_name: 'Druidsnake',
        register_mail: 'drullian@gmail.com',
        register_password: 'casacasa',
        register_password2: 'casacasa'
    }

    const [formLoginValues, handleLoginInputChange, loginReset] = useForm(initialLoginForm );
    const [formRegisterValues, handleRegisterInputChange, registerReset] = useForm(initialRegisterForm );

    const { login_email, login_password} = formLoginValues;
    const { register_name, register_mail, register_password, register_password2} = formRegisterValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( startLogin(login_email, login_password) );
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if(register_password !== register_password2){
            return Swal.fire('Error', 'Las contraseñas deben ser iguales', 'error');
        }
        dispatch(startRegister(register_name, register_mail, register_password));
    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input
                                name="login_email"
                                type="text"
                                value={login_email}
                                className="form-control"
                                placeholder="Correo"
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                name="login_password"
                                type="password"
                                value={login_password}
                                className="form-control"
                                placeholder="Contraseña"
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <input
                                name="register_name"
                                type="text"
                                value={register_name}
                                className="form-control"
                                placeholder="Nombre"
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                name="register_mail"
                                type="email"
                                value={register_mail}
                                className="form-control"
                                placeholder="Correo"
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                name="register_password"
                                type="password"
                                value={register_password}
                                className="form-control"
                                placeholder="Contraseña"
                                onChange={handleRegisterInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                name="register_password2"
                                type="password"
                                value={register_password2}
                                className="form-control"
                                placeholder="Repita la contraseña"
                                onChange={handleRegisterInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Crear cuenta"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}