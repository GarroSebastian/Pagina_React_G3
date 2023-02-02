
function Pedido(){
    return <body className="bg-light">
    <div className="container">
        <div className="py-5 text-center">
            <img className="mb-4 d-block mx-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Universidad_de_Lima_logo.png" alt="Bootstrap"
                width="50" height="50"/>
            
            <h2>Pedido</h2>
            <p className="lead">Complete la información para realizar su pedido</p>
        </div>
    </div>
    <div className="container">
        <h4 className="mb-3">Nombre</h4>
        <form>
            <div className="row g-3">
                <div className="col-sm-6">
                    <label for="firstName" className="form-label">Primer Nombre</label>
                    <input id="firstName" type="text" className="form-control" required/>
                    <div className="invalid-feedback">
                        Primer nombre es necesario.
                    </div>
                </div>
                <div className="col-sm-6">
                    <label for="lastName" className="form-label">Apellido</label>
                    <input id="lastName" type="text" className="form-control" required/>
                    <div className="invalid-feedback">
                        Apellido es necesario.
                    </div>
                </div>
                <div className="col-md-4">
                    <label for="edificio"
                    className="form-label">Edificio</label>
                    <select id="edificio"
                    className="form-control">
                    <option value="">Elegir...
                    </option>
                    <option value="L3">L3</option>
                </select>
                </div>
            </div>
            <div className="col-md-4">
            <label for="Aula"
                    className="form-label">Aula/Sala</label>
                    <select id="Aula"
                    className="form-control">
                    <option value="">Elegir...
                    </option>
                    <option value="302">302</option>
                </select>
                </div>
               
                </div>
                </body>
            </form>
    
        
    
}

export default Pedido