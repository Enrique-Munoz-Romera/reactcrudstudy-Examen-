import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";
import Global from "./../Global";

export default class UpdateTeam extends Component {
  constructor(props) {
    super(props);
    console.log("ID props EliminarPersonaje: " + props.idpersonaje);
  }

  state = {
    perosnaje: {},
    status: false,
  };

  cargarPersonaje = () => {
    var request = "/api/Personajes/" + this.props.idpersonaje;
    var url = Global.urlSeries + request;
    axios.get(url).then((res) => {
      this.setState({
        perosnaje: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.cargarPersonaje();
  };

  eliminarPersonaje = (e) => {
    e.preventDefault();
    var request = "/api/Personajes/" + this.props.idpersonaje;
    console.log("requestDelete: " + request);
    var url = Global.urlSeries + request;
    var ok = window.confirm("¿Está seguro de querer eliminar el personaje?");
    if (ok != false) {
      axios.delete(url).then((res) => {
        this.setState({
          delete: true,
        });
      });
    }
  };

  render() {
    var estiloform = {
      width: "500px",
      display: "table",
      margin: "0 auto",
    };

    if (this.state.update == true) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h1>Eliminar Personaje</h1>
        <form onSubmit={this.eliminarPersonaje} style={estiloform}>
          <div className="form-group row">
            <label>Número: </label>

            <input
              type="text"
              name="cajanumero"
              className="form-control"
              ref={this.cajaNumRef}
              defaultvalue={this.state.perosnaje.idpersonaje}
              readOnly
            />
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Nombre: </label>

            <input
              type="text"
              name="cajanombre"
              ref={this.cajaNomRef}
              className="form-control"
              defaultValue={this.state.perosnaje.nombre}
            />
          </div>

          <div className="form-group">
            <label>Serie: </label>

            <input
              type="number"
              name="cajaAnyo"
              ref={this.cajaAnyoRef}
              className="form-control"
              defaultValue={this.state.perosnaje.idSerie}
            />
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Imagen: </label>

            <input
              type="text"
              name="cajaimagen"
              ref={this.cajaImagenRef}
              defaultValue={this.state.perosnaje.imagen}
              className="form-control"
            />
          </div>

          <button className="btn btn-danger font-weight-bold">Eliminar</button>
          <button className="btn btn-success font-weight-bold">
            <NavLink to={"/"}>Volver</NavLink>
          </button>
        </form>
      </div>
    );
  }
}
