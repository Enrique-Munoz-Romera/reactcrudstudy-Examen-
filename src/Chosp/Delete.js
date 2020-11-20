import React,{Component} from "react";
import {Redirect} from "react-router-dom";
import axios from "axios";
import Global from "./../Global";

class Delete extends Component{    

    

    state = {
        hospitales: [],      
        status: false,
        delete: false
    }

    cargarHospitales = () => {
        var request = "webresources/hospitales";
        var url = Global.urlCrudHosp + request;
        console.log("request: " + url);
        axios.get(url).then(res =>{
            this.setState({
                hospitales: res.data,
                status:true
            });
            console.log("hospitales: " + res.data);
        });
    }

    componentDidMount = () => {
        this.cargarHospitales();
    }

    eliminarHospital= () => {
       //falta capturar el ID para introducirlo en la request :( 
        var iddelete = document.getElementById(this.hosp.idhospital);
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
                <h1>Delete</h1>
                <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Número ID</th>
                                <th>Nombre</th>
                                <th>Direccion</th>
                                <th>Teléfono</th>
                                <th>Camas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.status == true && (
                                this.state.hospitales.map((hosp,i) => {
                                    return(<React.Fragment>
                                        <tr key={i} value={hosp.idhospital} id={hosp.idhospital}>
                                            <td >
                                                {hosp.idhospital}
                                            </td>
                                             <td  value={hosp.idhospital}>
                                                <a href={"/hospitaldetalle/" + hosp.idhospital}>
                                                 {hosp.nombre}
                                                </a>
                                             </td>
                                            <td>{hosp.direccion}</td>
                                            <td>{hosp.telefono}</td>
                                            <td>{hosp.camas}</td> 
                                            <td>
                                                
                                                <button onClick={this.eliminarHospital} 
                                                 className="btn btn-danger font-weight-bold">
                                                      Eliminar  
                                                </button>
                                            </td>                                           
                                        </tr>                                        
                                    </React.Fragment>)
                                })
                            )}                           
                        </tbody>
                    </table>               
            </React.Fragment>
        )
    }
}
export default Delete;