import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import axios from "axios";
import Globlal from "./../Global";

class Post extends Component{
    
    state = {
        status: false,
        mensaje: ""
    }

    cajaNumRef = React.createRef();
    cajaNomRef = React.createRef();
    cajaDirRef = React.createRef();
    cajaTelfRef = React.createRef();
    cajaBedsRef = React.createRef();

    insertarHospital = e => {
        e.preventDefault();
        var num = parseInt(this.cajaNumRef.current.value);
        console.log("valor num: " + num);
        var nom = this.cajaNomRef.current.value;
        var dir = this.cajaDirRef.current.value;
        var telf = this.cajaTelfRef.current.value;
        var beds = parseInt(this.cajaBedsRef.current.value);
        var newHosp = {
            idhospital: num,
            nombre: nom,
            direccion: dir,
            telefono: telf,
            camas: beds
        }
        var request = "webresources/hospitales/post";
        var url = Globlal.urlCrudHosp + request;
        console.log("url: " + url);
        axios.post(url,newHosp).then(res => {
            this.setState({
                status: true,
                mensaje: "Hospital insertado"
            });
        });
         

    }   
    
    render(){

      if(this.state.status == true){
          return(<Redirect to="/"/>)
      }

        return(<React.Fragment>
            <div className="form-col align-items-center">
                <form onSubmit={this.insertarHospital} className="row-auto">                   
                    <label className="text-primary font-weight-bold">Numero</label>
                    <input type="number" name="cajanumero" ref={this.cajaNumRef} 
                    className="form-control" placeholder="542" />                    
                    <label className="text-primary font-weight-bold">Nombre</label>
                    <input type="text" name="cajanombre" ref={this.cajaNomRef} 
                    className="form-control" placeholder="Doce de Octubre"/>                    
                    <label className="text-primary font-weight-bold">Direccion</label>
                    <input type="text" name="cajadir" ref={this.cajaDirRef} 
                    className="form-control" placeholder="Av. de Córdoba"/>
                    <label className="text-primary font-weight-bold">Telefono</label>
                    <input type="number" name="cajatelf" ref={this.cajaTelfRef} 
                    className="form-control font-weight-bold" placeholder="913 90 80 00"/>
                    <label className="text-primary font-weight-bold">Camas</label>
                    <input type="number" name="cajabeds" ref={this.cajaBedsRef} 
                    className="form-control font-weight-bold" placeholder="2.300"/><br/> 
                    <button 
                    className="btn btn-success font-weight-bold btn-lg btn-block">
                        Insertar
                    </button>                                     
                </form>                 
                <h3>{this.state.mensaje}</h3>
            </div>
        </React.Fragment>)
    }
}
export default Post;