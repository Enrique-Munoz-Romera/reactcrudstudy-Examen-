import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";
import Global from "./../Global";

export default class DepartamentoDetalle extends Component {
  constructor(props) {
    super(props);
    console.log("ID props Detalle: " + props.iddepartamento);
  }

  state = {
    departamento: {},
    status: false,
  };

  cargarDepartamento = () => {
    var request = "api/departamentos/" + this.props.iddepartamento;
    var url = Global.urlCrudDept + request;
    axios.get(url).then((res) => {
      this.setState({
        departamento: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.cargarDepartamento();
  };
  render() {
    return (
      <div>
        <h1>departamento detalle</h1>
        {this.state.status == true && (
          <table className="table table-hover table-dark">
            <caption>departament</caption>
            <thead>
              <tr>
                <th scope="col">NUMERO</th>
                <th scope="col">NOMBRE</th>
                <th scope="col">LOCALIDAD</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.departamento.numero}</td>
                <td>{this.state.departamento.nombre}</td>
                <td>{this.state.departamento.localidad}</td>
                <td>
                  <NavLink
                    to={"/update/" + this.state.departamento.numero}
                    className="btn btn-warning font-weight-bold"
                  >
                    Modificar
                  </NavLink>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
