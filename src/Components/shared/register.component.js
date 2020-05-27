import React, {Component} from 'react';
import '../../CSS/register.css'



class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked : false
        }
    }

    render() {
        return (
            <div className="container">
                <form>
                    <div>
                        <h5>Crear tu cuenta</h5>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" checked={this.state.checked} onChange={() => this.setState({checked: !this.state.checked})}/>
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Usar mi cuenta de siclo</label>
                        </div>
                    </div>
                    <div className="contactForm" hidden={this.state.checked}>
                        <input className="input" type="text" placeholder="Nombre Completo"/>
                        <input className="input" type="text" placeholder="Telefono"/>

                        <input className="input" type="text" placeholder="Correo electrónico"/>

                        <input className="input" type="password" placeholder="Contraseña"/>
                        <input className="input" type="password" placeholder="Repetir contraseña"/>
                    </div>

                    <div className="contactForm" hidden={!this.state.checked}>
                        <input className="input" type="text" placeholder="Correo electrónico"/>
                        <input className="input" type="password" placeholder="Contraseña"/>
                    </div>
                </form>
            </div>

        );
    }
}

export default RegisterComponent;

