import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import MenuTeams from "./MenuTeams";
import Teams from "./Teams";
import DeatilsTeam from "./DeatilsTeam";
import Modificar from "./Modificar";
import UpdateTeam from "./UpdateTeam";
import Insertar from "./Insertar";
import Eliminar from "./Eliminar";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <MenuTeams />
        <Switch>
          <Route exact path="/" component={Teams} />
          <Route
            path="/detailsteam/:id"
            render={(props) => {
              var iddepartamento = props.match.params.id;
              console.log("ID route Detalle: " + iddepartamento);
              return <DeatilsTeam iddepartamento={iddepartamento} />;
            }}
          />
          <Route exact path="/post" component={Insertar} />
          <Route exact path="/update" component={UpdateTeam} />
          <Route
            path="/update/:id"
            render={(props) => {
              var iddepartamento = props.match.params.id;
              console.log("Id route Update: " + iddepartamento);
              return <UpdateTeam iddepartamento={iddepartamento} />;
            }}
          />
          <Route exact path="/delete" component={Eliminar} />
          <Route
            path="/delete/:id"
            render={(props) => {
              var iddepartamento = props.match.params.id;
              console.log("ID route Delete " + iddepartamento);
              return <Eliminar iddepartamento={iddepartamento} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
