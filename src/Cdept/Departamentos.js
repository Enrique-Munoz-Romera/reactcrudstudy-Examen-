import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Global from "./../Global";

export default class Departamentos extends Component {
  state = {
    departamentos: [],
    status: false,
  };

  cargarDepartamentos = () => {
    var request = "api/departamentos";
    var url = Global.urlCrudDept + request;
    axios.get(url).then((res) => {
      this.setState({
        departamentos: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.cargarDepartamentos();
  };
  render() {
    return (
      <React.Fragment>
        <form>
          <select>
            {this.state.status == true &&
              this.state.departamentos.map((dept, i) => {
                return (
                  <option key={i} value={dept.numero}>
                    {dept.nombre}
                  </option>
                );
              })}
          </select>
        </form>
        <div>
          <table className="table table-striped table-hover table-dark">
            <caption>List of departaments</caption>
            <thead>
              <tr>
                <th scope="col">NUMERO</th>
                <th scope="col">NOMBRE</th>
                <th scope="col">LOCALIDAD</th>
              </tr>
            </thead>

            <tbody>
              {this.state.departamentos.map((dept, i) => {
                return (
                  <tr key={i}>
                    <td value={dept.numero}>
                      <NavLink to={"/departamentodetalle/" + dept.numero}>
                        {dept.numero}
                      </NavLink>
                    </td>
                    <td>{dept.nombre}</td>
                    <td>{dept.localidad}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}
