import React, { Component } from 'react';
import axios from "axios";
import Global from "./../Global";

export default class Hospitales extends Component {
    state={
        hospitales:[],
        status:false
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

    render() {
        return (
            <div>
                   <table className="table table-bordered">
                        <thead>
                            <tr>
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
                                        <tr key={i}>
                                             <td  value={hosp.idhospital}>
                                                <a href={"/hospitaldetalle/" + hosp.idhospital}>
                                                 {hosp.nombre}
                                                </a>
                                             </td>
                                            <td>{hosp.direccion}</td>
                                            <td>{hosp.telefono}</td>
                                            <td>{hosp.camas}</td>                                            
                                        </tr>                                        
                                    </React.Fragment>)
                                })
                            )}                           
                        </tbody>
                    </table>               
            </div>
        )
    }
}
