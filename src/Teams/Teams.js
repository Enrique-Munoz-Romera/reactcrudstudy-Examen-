import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Global from "./../Global";

export default class Teams extends Component {
  state = {
    teams: [],
    status: false,
  };

  getTeams = () => {
    var request = "/webresources/departamentos";
    var url = Global.urlNonStotp + request;
    axios.get(url).then((res) => {
      this.setState({
        teams: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.getTeams();
  };

  render() {
    return (
      <React.Fragment>
        {this.state.status == true &&
          this.state.teams.map((team, index) => {
            return (
              <React.Fragment>
                <table className="table table-striped table-hover table-dark">
                  <thead>
                    <tr key={index}>
                      <th scope="col">NUMERO</th>
                      <th scope="col">NOMBRE</th>
                      <th scope="col">LOCALIDAD</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={index}>
                      <td value={team.numero}>
                        <NavLink to={"/detailsteam/" + team.numero}>
                          {team.numero}
                        </NavLink>
                      </td>
                      <td>{team.nombre}</td>
                      <td>{team.localidad}</td>
                    </tr>
                  </tbody>
                </table>
              </React.Fragment>
            );
          })}
      </React.Fragment>
    );
  }
}
