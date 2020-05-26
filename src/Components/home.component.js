import React from 'react'
import bici from   '../Assets/bici.png'
import '../CSS/bisi.css'

const HomeComponent = () => {
    return (
        <div className="container-fluid box-bisi">
            <div className="row box-bisi-container align-items-center">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center">
                    <img className="img-bisi" src={bici} alt="Bisi"/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <h1>biSí</h1>
                    <p className="description-bisi">Diseñada por decenas de
                        expertos para traer la
                        experiencia de Síclo a tu casa</p>
                    <a className="link-btn" href="/bisi">
                        <button className="btn-buy">Más detalles</button>
                    </a>
                    <h6 className="dateRelease">Julio 2020</h6>
                </div>
            </div>
        </div>
);
}

export default  HomeComponent
