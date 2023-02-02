import { useEffect, useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom'
import ListaRestaurantes from "./Components/ListaRestaurantes"

//pagina de categorias
function MainPage(){
    const listaRestaurantes = [
        {
            id: 1,
            nombre: "Starbucks",
            url: ""
        },
        {
            id: 2,
            nombre: "Bembos",
            url: ""
        },
        {
            id: 3,
            nombre: "Listo",
            url: ""
        },
        {
            id: 4,
            nombre: "MrSushi",
            url: ""
        },
        {
            id: 5,
            nombre: "Nevera Fit",
            url: ""
        },
        {
            id: 6,
            nombre: "Chifa Express",
            url: ""
        },
        {
            id: 7,
            nombre: "Marianne",
            url: ""
        }
    ]

    const location = useLocation()

    const navigate = useNavigate()

    useEffect(function(){
        if(location.state == null){
            navigate("/")
        }
    }, [])

    return location.state !== null
    ? <ListaRestaurantes
        restaurantes={ listaRestaurantes }/>
    :<div></div>    


    
}

export default MainPage