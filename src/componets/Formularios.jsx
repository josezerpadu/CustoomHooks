/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
// import { useState } from "react";
import { useForm } from "../hook/useForm";

export const Formularios = () => {

    const { username, email, password, setFormState, onInputOnchange } = useForm();

    const handelSubmit = () => {
        event.preventDefault();
        username === 'Reynaldo Zerpa' && email === 'reynaldozerpa35@gmail.com' && password === '17521968Rey'
            ? alert(`Hola ${username} Bienvenido a tu seccion`)
            : alert('Clave o contraseña inavalida')
            setFormState({
                username: '',
                email: '',
                password: ''
            })
    }

  return ( 
    <form onSubmit={handelSubmit}>
        <div className="mb-3">
            <label htmlFor="userName" className="form-label">Username</label>
            <input 
                type="text" 
                className="form-control" 
                id="username" 
                name="username"
                value={username}
                onChange={onInputOnchange}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
                type="email" 
                className="form-control" 
                id="email" 
                name="email"
                value={email}
                onChange={onInputOnchange}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
                type="password" 
                className="form-control" 
                id="password" 
                name="password"
                value={password}
                onChange={onInputOnchange}
            />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
