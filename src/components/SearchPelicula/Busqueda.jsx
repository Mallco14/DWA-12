import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Busqueda = ({handleChange , busqueda}) => {
    return (
        <div>
            <div className="containerInput">
                <input
                    className="form-control inputBuscar"
                    value={busqueda}
                    placeholder="Buscar Pelicula"
                    onChange={handleChange}
                />
                <button className="btn btn-success">
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
            </div>
        </div>
    );
}

export default Busqueda;
