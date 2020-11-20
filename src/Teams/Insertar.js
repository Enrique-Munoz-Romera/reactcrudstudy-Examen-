import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";
import Global from "./../Global";

export default class Insertar extends Component {
  state = {
    status: false,
    update: false,
  };

  cajanumRef = React.createRef();
  cajanomRef = React.createRef();
  cajalocRef = React.createRef();

  insertarDepartamento = (e) => {
    e.preventDefault();
    var num = parseInt(this.cajanumRef.current.value);
    var nom = this.cajanomRef.current.value;
    var loc = this.cajalocRef.current.value;
    var dept = {
      numero: num,
      nombre: nom,
      localidad: loc,
    };
    var request = "/webresources/departamentos/post";
    var url = Global.urlNonStotp + request;
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
        <form onSubmit={this.insertarDepartamento}>
          <label>Numero: </label>
          <input
            type="number"
            name="cajanum"
            ref={this.cajanumRef}
            className="form-control"
          />
          <br />
          <label>Nombre: </label>
          <input
            type="text"
            name="cajanom"
            ref={this.cajanomRef}
            className="form-control"
          />
          <br />
          <label>Localidad: </label>
          <input
            type="text"
            name="cajaloc"
            ref={this.cajalocRef}
            className="form-control"
          />
          <br />
          <button className="btn btn-success">Nuevo departamento</button>
        </form>
      </div>
    );
  }
}
