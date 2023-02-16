import React from 'react';

function Filtro(props) {
  const categorias = Object.values(props.categorias);
  return (
    <div className="mt-4 mb-4">
      <label className="form-label">Categoría</label>
      <select className="form-select"
          onChange={(evt) => props.onFiltrar(evt.target.value)}>
        <option value={-1}>Todas</option>
        {categorias.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.nombre}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filtro;

