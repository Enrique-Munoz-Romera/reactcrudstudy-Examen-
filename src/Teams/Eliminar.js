import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";
import Global from "./../Global";

export default class Eliminar extends Component {
  constructor(props) {
    super(props);
    console.log("ID props Delete: " + props.iddepartamento);
  }

  state = {
    departamento: {},
    status: false,
    delete: false,
  };

  cajaNumRef = React.createRef();
  cajaNomRef = React.createRef();
  cajaLocRef = React.createRef();

  cargarDepartamento = () => {
    var request = "/webresources/departamentos/" + this.props.iddepartamento;
    var url = Global.urlNonStotp + request;
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

  eliminarDepartamento = (e) => {
    e.preventDefault();
    var num = this.cajaNumRef.current.value;
    var nom = this.cajaNomRef.current.value;
    var loc = this.cajaLocRef.current.value;
    var request =
      "/webresources/departamentos/delete/" + this.props.iddepartamento;
    console.log("requestDelete: " + request);
    var url = Global.urlNonStotp + request;
    var ok = window.confirm("¿Está seguro de querer eliminar el departamento?");
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

    if (this.state.delete == true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>Eliminar</h1>
        <form onSubmit={this.eliminarDepartamento} style={estiloform}>
          <div className="form-group row">
            <label>Número: </label>

            <input
              type="text"
              name="cajanumero"
              className="form-control"
              ref={this.cajaNumRef}
              value={this.state.departamento.numero}
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
              defaultValue={this.state.departamento.nombre}
            />
          </div>

          <div className="form-group">
            <label>Localidad: </label>

            <input
              type="text"
              name="cajalocalidad"
              ref={this.cajaLocRef}
              className="form-control"
              defaultValue={this.state.departamento.localidad}
            />
          </div>
          <button className="btn btn-danger font-weight-bold">Eliminar</button>
          <button className="btn btn-info font-weight-bold">
            <NavLink to={"/"}>Volver</NavLink>
          </button>
        </form>
      </div>
    );
  }
}
