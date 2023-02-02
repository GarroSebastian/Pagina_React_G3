
function Categorias(props){
    return <div className="card mb-3">
        <img src= { props.restaurante.url }
        className="card-img-top img-fluid"
        alt="..."/>
        <div className="card-body">
            <h5 className="card-title"> { props.restaurante.nombre }</h5>
            <p className="card-text">.</p>
            <p className="card-text"><small className="text-muted">,,,</small></p>
        </div>
    </div>
}

export default Categorias