import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import Menu from "./Menu";
import Series from "./series";
import Detalle from "./Detalle";
import Modificar from "./Modificar";
import Personajes from "./Personajes";
import Eliminar from "./Eliminar";
import Insertar from "./Insertar";

import EliminarPersonaje from "./EliminarPersonaje";

export default class router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/" component={Series} />
          <Route
            path="/detalle/:id"
            render={(props) => {
              var idserie = props.match.params.id;
              console.log("ID route Delete " + idserie);
              return <Detalle idserie={idserie} />;
            }}
          />
          <Route
            path="/update/:id"
            render={(props) => {
              var idserie = props.match.params.id;
              console.log("Id route Update: " + idserie);
              return <Modificar idserie={idserie} />;
            }}
          />
          <Route exac path="/personajes" component={Personajes} />
          <Route
            path="/delete/:id"
            render={(props) => {
              var idserie = props.match.params.id;
              console.log("Id route Eliminar: " + idserie);
              return <Eliminar idserie={idserie} />;
            }}
          />
          <Route exact path="/post" component={Insertar} />
          <Route
            path="/deletepersonaje/:id"
            render={(props) => {
              var idpersonaje = props.match.params.id;
              console.log("Id route Eliminar: " + idpersonaje);
              return <EliminarPersonaje idpersonaje={idpersonaje} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
