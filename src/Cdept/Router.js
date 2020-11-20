import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import React, { Component } from "react";
import MenuDept from "./MenuDept";
import Departamentos from "./Departamentos";
import DepartamentoDetalle from "./DepartamentoDetalle";
import UpdateDept from "./UpdateDept";
import PostDept from "./PostDept";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <MenuDept />
        <Switch>
          <Route exact path="/" component={Departamentos} />
          <Route
            path="/departamentodetalle/:id"
            render={(props) => {
              var iddepartamento = props.match.params.id;
              console.log("ID route Detalle: " + iddepartamento);
              return <DepartamentoDetalle iddepartamento={iddepartamento} />;
            }}
          />
          <Route
            path="/update/:id"
            render={(props) => {
              var idUpdate = props.match.params.id;
              console.log("ID route Update: " + idUpdate);
              return <UpdateDept modificar={idUpdate} />;
            }}
          />
          <Route exact path="/creardepartamento" component={PostDept} />
        </Switch>
      </BrowserRouter>
    );
  }
}
