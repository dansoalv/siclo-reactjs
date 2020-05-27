
import '../CSS/cart.css'
import RegisterComponent from "./shared/register.component";
import bisi1 from '../Assets/bisi1.jpg'
import bisi2 from '../Assets/bisi2.jpg'
import bisi3 from '../Assets/bisi3.jpg'
import bisi4 from '../Assets/bisi4.jpg'
import bisi5 from '../Assets/bisi5.jpg'
import React, {Component} from 'react';
const arrayImgs = [bisi2, bisi3, bisi4, bisi5]

class BisiComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgMain: bisi1
        }
    }

    handleImg = (img) => {
        this.setState({imgMain: arrayImgs[img] })
    }

    render() {


        return (
            <React.Fragment>
                <div className="box-container-info">
                    <div className="row ">
                        <div className="col text-center">
                            <p className="banner">
                                Disponibilidad limitada. Envíos Julio 2020.
                            </p>
                        </div>
                    </div>
                    <div className="container box-container-main">
                        <div className="row align-items-center">
                            <div className="col-7 text-center">
                                <img className="img-main" src={this.state.imgMain} alt="Galeria"/>
                                <div className="thumbs">
                                    {arrayImgs.map((item, index) => (
                                        <img key={item} className="img-thumbs" src={item} alt="Galeria" onClick={(item) => this.handleImg(index)}/>
                                    ))}
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="row">
                                    <div className="col">
                                        <h1>biSí</h1>
                                        <p className="termsandconditions">* Disponibilidad limitada.<br/> Es posible que
                                            este precio se modifique dada la devaluación del Tipo de Cambio.</p>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col">
                                        <ul>
                                            <li>30 días gratis de suscripción Síclo+ al activar la biSí. <span
                                                className="letter-special">Después $999 mxn/mes.</span></li>
                                            <li>No incluye zapatos ni mancuernas.</li>
                                            <li><strong>Envío gratis.</strong></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <button className="btn-register" data-toggle="modal" data-target="#exampleModal">
                                            Registrarme
                                        </button>
                                    </div>
                                    <div className="col">
                                        <p className="price">$42,995 mxn</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box-container-specs">
                    <div className="container ">
                        <div className="row">
                            <div className="col ">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="specs-tab" data-toggle="tab" href="#specs"
                                           role="tab" aria-controls="specs" aria-selected="true">Especificaciones</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="touch-tab" data-toggle="tab" href="#touch" role="tab"
                                           aria-controls="touch" aria-selected="false">Touchscreen</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="specs" role="tabpanel"
                                         aria-labelledby="specs-tab">
                                        <div className="row">
                                            <div className="col d-flex justify-content-center">
                                                <table className="table table-siclo">
                                                    <thead></thead>
                                                    <tbody>
                                                    <tr>
                                                        <th className="celda-th" scope="row">Peso:</th>
                                                        <td>56.8 kg</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="celda-th" scope="row">Peso con touchscreen:</th>
                                                        <td>61.8 kg</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="celda-th" scope="row">Altura:</th>
                                                        <td>99 cm</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="celda-th" scope="row">Altura con touchscreen:</th>
                                                        <td>144 cm</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="celda-th" scope="row">Largo:</th>
                                                        <td>133 cm</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="celda-th" scope="row">Ancho:</th>
                                                        <td>76.3 cm</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="celda-th" scope="row">Rango de altura de usuario:
                                                        </th>
                                                        <td>147 - 208 cm</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="celda-th" scope="row">Peso máximo de usuario de
                                                            usuario:
                                                        </th>
                                                        <td>158 kg</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="celda-th" scope="row">Bluetooth:</th>
                                                        <td>4.0</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="celda-th" scope="row">Voltaje:</th>
                                                        <td>110-240V, 50/60HZ</td>
                                                    </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="touch" role="tabpanel" aria-labelledby="touch-tab">
                                        <div className="row">
                                            <div className="col d-flex justify-content-center">
                                                <table className="table table-siclo">
                                                    <thead/>
                                                    <tbody>
                                                    <tr>
                                                        <th className="celda-th" scope="row">Tamaño de pantalla:</th>
                                                        <td>27”</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="celda-th" scope="row">Resolución:</th>
                                                        <td>1920 x 1080 FHD</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="celda-th" scope="row">Rotación:</th>
                                                        <td>180°</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="celda-th" scope="row">Wifi:</th>
                                                        <td>802.11 a/b/g/h/ac</td>
                                                    </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Completa tus datos</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <RegisterComponent/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn-register">Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default BisiComponent;
