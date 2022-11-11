import React from 'react';



const CardPeliculas = ( {pelicula} ) => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                { pelicula.length > 0 &&
                    pelicula.map( (peli)  => (
                        <div className="col">
                            <div className="card">
                                <img src={peli.images.posterArt.url} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{peli.title}</h5>
                                    <p className="card-text"></p>
                                </div>
                            </div>
                        </div>
                ))}
            </div>
        </div>
    );
}

export default CardPeliculas;
