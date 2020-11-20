import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";
import Global from "./../Global";

export default class UpdateDept extends Component {
  constructor(props) {
    super(props);
    console.log("ID props UPdate: " + props.modificar);
  }

  state = {
    departamento: {},
    status: false,
    update: false,
  };

  cajaNumRef = React.createRef();
  cajaNomRef = React.createRef();
  cajaLocRef = React.createRef();

  cargarDepartamento = () => {
    var request = "api/departamentos/" + this.props.modificar;
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

  modificarDepartamento = (e) => {
    e.preventDefault();
    var num = this.cajaNumRef.current.value;
    var nom = this.cajaNomRef.current.value;
    var loc = this.cajaLocRef.current.value;
    var dept = {
      numero: num,
      nombre: nom,
      localidad: loc,
    };
    var url = Global.url + "/departamentos/put";
    axios.put(url, dept).then((res) => {
      this.setState({
        update: true,
      });
    });
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
        <h1>UPDATE</h1>
        <form onSubmit={this.modificarDepartamento} style={estiloform}>
          <div className="form-group row">
            <label>Número: </label>

            <input
              type="text"
              name="cajanumero"
              className="form-control"
              ref={this.cajaNumRef}
              value={this.state.departamento.numero}
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

          <button className="btn btn-info font-weight-bold">
            Modificar departamento
          </button>
          <button className="btn btn-success font-weight-bold">
            <NavLink to={"/creardepartamento"}>Nuevo departamento</NavLink>
          </button>
        </form>
      </div>
    );
  }
}
