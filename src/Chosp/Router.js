import {BrowserRouter,Switch,Route} from "react-router-dom";
import React, {Component} from "react";
import Hospitales from "./Hospitales";
import HospitalDetalle from "./HospitalDetalle";
import Post from "./Post";
import Update from "./Update";
import ModificarHosp from "./ModificarHosp";
import Delete from "./Delete";

class Router extends Component {

    render(){
        return(
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Hospitales}/>
                        <Route path="/hospitaldetalle/:idhospitales" 
                        render = { props => {
                            var idhosp = props.match.params.idhospitales;
                            console.log("Id route: " + idhosp);
                            return(<HospitalDetalle idhosp={idhosp}/>)
                        }}/>
                        <Route exact path="/hospitalcreate" component={Post}/>
                        <Route exact path="/update" component={ModificarHosp}/>
                        <Route  path="/update/:idhospital" 
                        render = { props => {
                            var idUp = props.match.params.idhospital;
                            console.log("ID route Update: " + idUp);
                            return(<Update idUp={idUp}/>)
                        }}/>
                        <Route  exact path="/delete" component={Delete}/>
                    </Switch>
                    </BrowserRouter>
            </React.Fragment>
        )
    }
}
export default Router;