import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";
import axios from "axios";
import Global from "./../Global";

export default class PostDept extends Component {
  cajaNumRef = React.createRef();
  cajaNomRef = React.createRef();
  cajaLocRef = React.createRef();

  state = {
    status: false,
    post: false,
  };

  crearDepartamento = (e) => {
    var num = this.cajaNumRef.current.value;
    var nom = this.cajaNomRef.current.value;
    var loc = this.cajaLocRef.current.value;
    var dept = {
      numero: num,
      nombre: nom,
      localidad: loc,
    };
    var request = "api/departamentos";
    var url = Global.urlCrudDept + request;
    console.log("url POST: " + url);
    axios.post(url, dept).then((res) => {
      this.setState({
        status: true,
        post: true,
      });
    });
  };

  render() {
    if (this.state.post == true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>Crear departamento</h1>
        <form onSubmit={this.crearDepartamento}>
          <div className="form-group row">
            <label>Número: </label>

            <input
              type="text"
              name="cajanumero"
              className="form-control"
              ref={this.cajaNumRef}
            />
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Nombre: </label>

            <input
              type="text"
              name="cajanombre"
              ref={this.cajaNomRef}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Localidad: </label>

            <input
              type="text"
              name="cajalocalidad"
              ref={this.cajaLocRef}
              className="form-control"
            />
          </div>

          <button className="btn btn-success font-weight-bold">
            <NavLink to={"/creardepartamento"}>Nuevo departamento</NavLink>
          </button>
        </form>
      </div>
    );
  }
}
