import { useState } from "react"

export const useForm = () => {

    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: ''
    });

    // Aca estamos desestructurando la propiedades que se encuentran en el estado formState
    const { username, email, password } = formState;

    // Esta funcion recibe el evento y desestructuramos a target
    const onInputOnchange = ({target}) => {
        // Aca desestructuramos a target y extraemos a name y value
        const { name, value } = target;
        // Llamamos al setter y añadimos lo que ya haya en formSate y modificamos el valor dependiendo
        // de la propiedades que se este actualizando a traves del input de manera dinamica
        setFormState({
            ...formState,
            [name]: value
        })
    }

  return (
    {
        username,
        email,
        password,
        onInputOnchange,
        setFormState
        // handelSubmit,
    }
  )
}
