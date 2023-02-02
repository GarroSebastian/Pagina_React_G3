
function Pedido(){
    return <body class="bg-light">
    <div class="container">
        <div class="py-5 text-center">
            <img class="mb-4 d-block mx-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Universidad_de_Lima_logo.png" alt="Bootstrap"
                width="50" height="50"/>
            
            <h2>Pedido</h2>
            <p class="lead">Complete la información para realizar su pedido</p>
        </div>
    </div>
    <div class="container">
        <h4 class="mb-3">Nombre</h4>
        <form>
            <div class="row g-3">
                <div class="col-sm-6">
                    <label for="firstName" class="form-label">Primer Nombre</label>
                    <input id="firstName" type="text" class="form-control" required/>
                    <div class="invalid-feedback">
                        Primer nombre es necesario.
                    </div>
                </div>
                <div class="col-sm-6">
                    <label for="lastName" class="form-label">Apellido</label>
                    <input id="lastName" type="text" class="form-control" required/>
                    <div class="invalid-feedback">
                        Apellido es necesario.
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="edificio"
                    class="form-label">Edificio</label>
                    <select id="edificio"
                    class="form-control">
                    <option value="">Elegir...
                    </option>
                    <option value="L3">L3</option>
                </select>
                </div>
            </div>
            <div class="col-md-4">
            <label for="Aula"
                    class="form-label">Aula/Sala</label>
                    <select id="Aula"
                    class="form-control">
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