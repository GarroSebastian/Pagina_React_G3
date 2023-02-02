import { useNavigate } from "react-router-dom"
import LoginForm from "./Components/LoginForm"

function LoginPage() {
    const navigate = useNavigate()

    const onLoginOk = function(
        usuario, password
    ) {
        if (usuario === "cliente"
            && password === "123"){

            const dataUsuario = {
                username : usuario,
                password: password
            }

            const dataUsuarioJSON = JSON.stringify(dataUsuario)
            console.log(dataUsuario)
            console.log(dataUsuarioJSON)

            sessionStorage.setItem("DATA_USUARIO", dataUsuarioJSON)


            navigate("/g5/main", {
                state: {
                    username: usuario
                }
            })
        }
    }
    
    return  <div className="row">
            <div className="col"></div>
            <div className="col">
                <LoginForm
                onLoginOk= { onLoginOk }/>
            </div>
            <div className="col"></div>
        </div>
    
}

export default LoginPage