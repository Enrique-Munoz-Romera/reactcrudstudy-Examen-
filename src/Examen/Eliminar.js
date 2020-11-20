import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";
import Global from "./../Global";

export default class UpdateTeam extends Component {
  constructor(props) {
    super(props);
    console.log("ID props Eliminar: " + props.idserie);
  }

  state = {
    serie: {},
    status: false,
  };

  cajaNumRef = React.createRef();
  cajaNomRef = React.createRef();
  cajaAnyoRef = React.createRef();
  cajaPuntRef = React.createRef();
  cajaImagenRef = React.createRef();

  cargarDepartamento = () => {
    var request = "/api/Series/" + this.props.idserie;
    var url = Global.urlSeries + request;
    axios.get(url).then((res) => {
      this.setState({
        serie: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.cargarDepartamento();
  };

  eliminarSerie = (e) => {
    e.preventDefault();
    var request = "/api/Series" + this.props.idserie;
    console.log("requestDelete: " + request);
    var url = Global.urlSeries + request;
    var ok = window.confirm("¿Está seguro de querer eliminar la serie?");
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
        <h1>Eliminar Serie</h1>
        <form onSubmit={this.eliminarSerie} style={estiloform}>
          <div className="form-group row">
            <label>Número: </label>

            <input
              type="text"
              name="cajanumero"
              className="form-control"
              ref={this.cajaNumRef}
              defaultvalue={this.state.serie.idserie}
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
              defaultValue={this.state.serie.nombre}
            />
          </div>

          <div className="form-group">
            <label>Año: </label>

            <input
              type="number"
              name="cajaAnyo"
              ref={this.cajaAnyoRef}
              className="form-control"
              defaultValue={this.state.serie.anyo}
            />
          </div>
          <div>
            <label>Puntuacion: </label>
            <input
              type="number"
              name="cajaPunt"
              ref={this.cajaPuntRef}
              className="form-control"
              defaultValue={this.state.serie.puntuacion}
            />
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Imagen: </label>

            <input
              type="text"
              name="cajaimagen"
              ref={this.cajaImagenRef}
              defaultValue={this.state.serie.imagen}
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
