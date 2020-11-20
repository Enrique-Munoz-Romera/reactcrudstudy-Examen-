import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Global from "./../Global";

export default class Detalle extends Component {
  constructor(props) {
    super(props);
    console.log("ID props Detalle: " + props.idserie);
  }

  state = {
    serie: {},
    status: false,
  };

  getSerie = () => {
    var request = "api/Series/" + this.props.idserie;
    var url = Global.urlSeries + request;
    axios.get(url).then((res) => {
      this.setState({
        serie: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.getSerie();
  };

  render() {
    return (
      <React.Fragment>
        <h1>Serie detalle</h1>
        {this.state.status == true && (
          <table className="table table-hover table-dark">
            <caption>Series</caption>
            <thead>
              <tr>
                <th scope="col">NUMERO</th>
                <th scope="col">NOMBRE</th>
                <th scope="col">PUNTUACION</th>
                <th scope="col">AÑO</th>
                <th scope="col">IMAGEN</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.serie.idSerie}</td>
                <td>{this.state.serie.nombre}</td>
                <td>{this.state.serie.puntuacion}</td>
                <td>{this.state.serie.año}</td>
                <td>
                  <img
                    src={this.state.serie.imagen}
                    className="img-thumbnail "
                  />
                </td>
                <td>
                  <NavLink
                    to={"/update/" + this.state.serie.idSerie}
                    className="btn btn-warning font-weight-bold"
                  >
                    Modificar
                  </NavLink>
                </td>
                <td>
                  <NavLink
                    to={"/delete/" + this.state.serie.idSerie}
                    className="btn btn-danger font-weight-bold"
                  >
                    Eliminar
                  </NavLink>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </React.Fragment>
    );
  }
}
