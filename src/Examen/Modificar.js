import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";
import Global from "./../Global";

export default class UpdateTeam extends Component {
  constructor(props) {
    super(props);
    console.log("ID props UPdate: " + props.idserie);
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

  modificarSerie = (e) => {
    e.preventDefault();
    var num = parseInt(this.cajaNumRef.current.value);
    var nom = this.cajaNomRef.current.value;
    var anyo = parseInt(this.cajaAnyoRef.current.value);
    var punt = parseInt(this.cajaPuntRef.current.value);
    var img = this.cajaImagenRef.current.value;
    var dept = {
      numero: num,
      nombre: nom,
      anyo: anyo,
      punt: punt,
      img: img,
    };
    var url = Global.urlSeries + "/api/Series";
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
        <h1>Modificar Serie</h1>
        <form onSubmit={this.modificarDepartamento} style={estiloform}>
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
              className="form-control"
            />
          </div>

          <button className="btn btn-info font-weight-bold">
            Modificar serie
          </button>
          <button className="btn btn-success font-weight-bold">
            <NavLink to={"/post"}>Introducir</NavLink>
          </button>
        </form>
      </div>
    );
  }
}
