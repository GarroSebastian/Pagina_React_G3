import { useNavigate } from "react-router-dom"

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


            navigate("/G5/main", {
                state: {
                    username: usuario
                }
            })
        }
    }
    
}

export default LoginPage