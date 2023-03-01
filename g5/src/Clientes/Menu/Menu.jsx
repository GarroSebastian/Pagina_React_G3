import { useEffect, useState } from "react"
import { useParams} from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import Filtro from "./Components/Filtro"
import ListaPlatos from "./Components/ListaPlatos"

function Menu(){
    const { id } = useParams()
    const [listaPlatos, setListaPlatos] = useState([])
    const [listaCategorias, setListaCategorias] = useState([])

    const obtenerCategoriasAsyncAwait = async function(){
        try{
            const response = await fetch(
                "http://localhost:8000/endpoints/platos/categorias")
            const data = await response.json()
            if(data.error ===""){
                setListaCategorias(data.categorias)
            }else {
                console.error(data.error)
            }
            
        }catch(error){
            console.error("Error obteniendo categorias")
        }
    }

    const filtrarPlatos = async function (categoriaId){
        try {
            const response = await fetch(
                `http://localhost:8000/endpoints/platos/listar?categoria=${ categoriaId }`
            )
            const data = await response.json()

            if (data.error === ""){
                setListaPlatos(data.restaurantes)
            }else {
                console.error(data.error)
            }

            
        }catch(error){
            console.error("Error de comunicacion")
        }
    }

    const location = useLocation()

    const navigate = useNavigate()

    useEffect(function(){
        if(location.state == null){
            navigate("/")
        }else{
            obtenerCategoriasAsyncAwait()
            filtrarPlatos(-1)
        }
    }, [])

    return location.state !== null
    ?<div className="container">
        <Filtro 
            categorias={ listaCategorias }
            onFiltrar= { filtrarPlatos }/> 
        <ListaPlatos
            platos={ listaPlatos }/>
    </div>
    :<div></div>    
    
}

export default Menu