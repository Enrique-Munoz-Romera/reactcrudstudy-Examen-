import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import axios from "axios";
import Global from "./../Global";
 class HospitalDetalle extends Component{

    constructor(props){
        super(props);
        console.log("props detalleHosp: " + this.props.idhosp);
        this.state = {
            idhospital: this.props.idhosp
        }
    }   

    state={
        idhospital:0,
        hospital:{},
        status:false,
        delete:false
    }

    cargarHospital = () => {
        var request = "webresources/hospitales/" + this.state.idhospital;
        console.log("stateIDHOSPITAL: " + this.state.idhospital);
        var url = Global.urlCrudHosp + request;
        axios.get(url).then(res => {
            this.setState({
                hospital: res.data,
                status:true
            });
        });
    }

    componentDidMount = () => {
        this.cargarHospital();
    }

   eliminarHospital= () => {
       var iddelete = this.state.hospital.idhospital;
       var request = "/webresources/hospitales/delete/" + iddelete;
       console.log("requestDelete: " + request);
       var url = Global.urlCrudHosp + request;
       var ok = window.confirm("¿Está seguro de querer eliminar el hospital?");
       if(ok != null){
           axios.delete(url).then(res => {
               this.setState({
                   delete: true
                });
            });
       }
   }

    render(){
        if(this.state.delete == true){
            return(<Redirect to="/"/>)
        }
        return(
            <React.Fragment>
                <table className=" table table-bordered">
                    <thead>
                        <tr>
                            <th>Nº ID</th>
                            <th>Nombre</th>
                            <th>Direccion</th>
                            <th>Teléfono</th>
                            <th>Camas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.status == true && (
                            <tr>
                                <td>{this.state.hospital.idhospital}</td>
                                <td>{this.state.hospital.nombre}</td>
                                <td>{this.state.hospital.direccion}</td>
                                <td>{this.state.hospital.telefono}</td>
                                <td>{this.state.hospital.camas}</td>
                                <td><a href={"/update/" + this.state.idhospital}  
                                    className="btn btn-warning font-weight-bold">
                                        Modificar
                                    </a>
                                </td> 
                                <td>
                                    <button onClick={this.eliminarHospital}
                                    className="btn btn-danger font-weight-bold">
                                        Eliminar                                       
                                    </button>
                                </td> 
                            </tr>
                        )}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
 }
 export default HospitalDetalle;