import { useNavigate } from "react-router-dom"

function Categorias(props){
    console.log(props.restaurante)
    const navigate = useNavigate()

    const butOnClick2 = function(){
        navigate("/platos1")
    }
    const isRestaurantOpen = props.restaurante.abierto

    console.log("isRestaurantOpen:", isRestaurantOpen)

    let imageUrl = props.restaurante.url

    // Condicional si abierto es True o False
    if (!isRestaurantOpen){   
        imageUrl = "https://media.istockphoto.com/id/1273749193/vector/temporarily-closed-great-design-for-any-purposes-china-coronavirus-quarantine-warning.jpg?s=612x612&w=0&k=20&c=KfZ6Il6p5CTI6E0OCSKIw7j0WuFzCkRLf0wKnjmvc1U="
    } 
    console.log("imageUrl:", imageUrl)

    return <div className="card mb-3">
        <img src= { imageUrl }
        className="card-img-top img-fluid"
        alt="..."/>
        <div className="card-body">
        <button className="btn btn-primary" type="button"
            onClick= { butOnClick2 }><h5 className="card-title"> { props.restaurante.nombre }</h5></button> 
            <p className="card-text">Lorem Ipsum</p>
            <p className="card-text"><small className="text-muted">Lorem Ipsum </small></p>
        </div>
    </div>
}

export default Categorias
