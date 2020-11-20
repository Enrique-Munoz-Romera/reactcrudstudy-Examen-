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
    var request = "/api/Series";
    var url = Global.urlSeries + request;
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
        <h1>INSERTA UNA SERIE</h1>
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
          <label>Puntuacion: </label>
          <input
            type="text"
            name="cajaloc"
            ref={this.cajaPuntRef}
            className="form-control"
          />
          <br />
          <label>Anyo: </label>
          <input
            type="text"
            name="cajaAnyo"
            ref={this.cajaAnyoRef}
            className="form-control"
          />
          <label>Imagen: </label>
          <input
            type="text"
            name="cajaImg"
            ref={this.cajaImgRef}
            className="form-control"
          />
          <br />
          <button className="btn btn-success">Nueva Serie</button>
        </form>
      </div>
    );
  }
}
