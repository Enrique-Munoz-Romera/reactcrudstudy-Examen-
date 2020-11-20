import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import axios from "axios";
import Global from "./../Global";

class Update extends Component{

    constructor(props){
        super(props);
        console.log("ID update: " + this.props.idUp);
        this.state = {
            idUpdate: props.idUp
        }
    }

    state = {        
        status: false,
        update: false
    }

    cajaNumRef = React.createRef();
    cajaNomRef = React.createRef();
    cajaDirRef = React.createRef();
    cajaTelfRef = React.createRef();
    cajaBedsRef = React.createRef();

    modificarHospital = e => {
        e.preventDefault();
        var num = parseInt(this.cajaNumRef.current.value);
        console.log("valor num: " + num);
        var nom = this.cajaNomRef.current.value;
        var dir = this.cajaDirRef.current.value;
        var telf = this.cajaTelfRef.current.value;
        var beds = parseInt(this.cajaBedsRef.current.value);
        var hospUpdate = {
            idhospital: num,
            nombre: nom,
            direccion: dir,
            telefono: telf,
            camas: beds
        }
        var request = "/webresources/hospitales/put" ;
        var url = Global.urlCrudHosp + request;
        console.log("urlPut: " + url);
        axios.put(url,hospUpdate).then(res => {
            this.setState({
                status: true,
                update: true
            });
        });
    }

    render(){

        if(this.state.status == true){
            return(<Redirect to="/"/>)
        }

        return(
            <React.Fragment>                               
                <form onSubmit={this.modificarHospital} className="row-auto">                   
                    <label className="text-primary font-weight-bold">Numero ID</label>
                    <input type="number" name="cajanumero" ref={this.cajaNumRef} 
                    className="form-control" placeholder="13" />                    
                    <label className="text-primary font-weight-bold">Nombre</label>
                    <input type="text" name="cajanombre" ref={this.cajaNomRef} 
                    className="form-control" placeholder="La paz"/>                    
                    <label className="text-primary font-weight-bold">Dirección</label>
                    <input type="text" name="cajadir" ref={this.cajaDirRef} 
                    className="form-control" placeholder="Paseo de la Castellana"/>
                    <label className="text-primary font-weight-bold">Teléfono</label>
                    <input type="number" name="cajatelf" ref={this.cajaTelfRef} 
                    className="form-control font-weight-bold" placeholder="917 27 70 00"/>
                    <label className="text-primary font-weight-bold">Camas</label>
                    <input type="number" name="cajabeds" ref={this.cajaBedsRef} 
                    className="form-control font-weight-bold" placeholder="3.200"/><br/> 
                    <button 
                    className="btn btn-warning font-weight-bold btn-lg btn-block">
                        Modificar
                    </button>                                     
                </form>
            </React.Fragment>
        )
    }
}
export default Update;