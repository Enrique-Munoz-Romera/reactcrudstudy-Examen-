import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Global from "./../Global";

export default class Personajes extends Component {
  state = {
    personajes: [],
    status: false,
  };

  getPersonajes = () => {
    var request = "/api/Personajes";
    var url = Global.urlSeries + request;
    axios.get(url).then((res) => {
      this.setState({
        personajes: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.getPersonajes();
  };
  render() {
    return (
      <React.Fragment>
        {this.state.status == true &&
          this.state.personajes.map((actor, index) => {
            return (
              <React.Fragment>
                <table className="table table-hover table-dark" key={index}>
                  <thead>
                    <tr>
                      <th scope="col">NUMERO</th>
                      <th scope="col">NOMBRE</th>

                      <th scope="col">IMAGEN</th>
                      <th scope="col">Serie</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td value={actor.idPersonaje}>{actor.idPersonaje}</td>
                      <td>{actor.nombre}</td>

                      <td>{actor.idSerie}</td>
                      <td>
                        <img src={actor.imagen} className="img-thumbnail " />
                      </td>
                    </tr>
                    <button className="btn btn-danger font-weight-bold">
                      <NavLink
                        className="nav-link"
                        to={"/deletepersonaje/" + actor.idPersonaje}
                      >
                        Eliminar
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
