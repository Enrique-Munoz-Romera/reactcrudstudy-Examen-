import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Global from "./../Global";

export default class series extends Component {
  state = {
    series: [],
    status: false,
  };

  getSeries = () => {
    var request = "/api/Series";
    var url = Global.urlSeries + request;
    axios.get(url).then((res) => {
      this.setState({
        series: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.getSeries();
  };

  render() {
    return (
      <React.Fragment>
        {this.state.status == true &&
          this.state.series.map((serie, index) => {
            return (
              <React.Fragment>
                <table className="table table-hover table-dark" key={index}>
                  <thead>
                    <tr>
                      <th scope="col">NUMERO</th>
                      <th scope="col">NOMBRE</th>
                      <th scope="col">PUNTUACION</th>
                      <th scope="col">AÑO</th>
                      <th scope="col">IMAGEN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td value={serie.idSerie}>
                        <NavLink to={"/detalle/" + serie.idSerie}>
                          {serie.idSerie}
                        </NavLink>
                      </td>
                      <td>{serie.nombre}</td>
                      <td>{serie.puntuacion}</td>
                      <td>{serie.año}</td>
                      <td>
                        <img src={serie.imagen} className="img-thumbnail " />
                      </td>
                    </tr>
                    <button className="btn btn-success font-weight-bold">
                      <NavLink className="nav-link" to="/personajes">
                        Personajes
                      </NavLink>
                    </button>
                  </tbody>
                </table>
              </React.Fragment>
            );
          })}
      </React.Fragment>
    );
  }
}
