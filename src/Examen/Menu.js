import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-primary bg-dark">
        <NavLink className="navbar-brand" to="/">
          Home
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/post">
                <span className="nav-item">Insertar</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/update">
                Modificar
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/delete">
                Eliminar
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/personajes">
                Personajes
              </NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
