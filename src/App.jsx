import logo from './logo.svg';
import './App.css';

import {Link, Outlet, useNavigate} from "react-router-dom";
import { ReactSession } from 'react-client-session';
import {Component} from "react";
import {Drawer} from "./components/drawer/drawer";


 class App extends Component {


    constructor(props) {


        super(props);
        this.handleLogout= this.handleLogout.bind(this);

        if (ReactSession.get("token") == "") {
            console.log("Pas de token")
            this.props.navigate("/login")
        }
    }

    render() {

            return (
                <div>
                        <div className="d-flex align-items-center justify-content-between w-100 App-Header">
                            <Drawer></Drawer>
                            <h1 className="App-Logo">Kindred</h1>
                            <p>{ReactSession.get("username")}</p>
                            <button onClick={this.handleLogout}>Déconnection</button>
                        </div>

                    <Outlet />
                </div>
            );
        }



     handleLogout(){
         ReactSession.set("token",'');
         this.props.navigate("/login");


    }

}


function AppWithNavigate(props) {
    let navigate = useNavigate();
    return <App {...props} navigate={navigate} />
}

export default AppWithNavigate
