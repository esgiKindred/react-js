
import {Component} from "react";
import {Link} from "react-router-dom";
import './drawer.css';
import {MenuLink} from "../menu-link/menu-link";

export class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    render() {

        if(this.state.open){
            return(
                <div className="drawer">
                    <span onClick={() => this.setState({ open: false })} className="icon">
                        <i className="bi bi-x-circle"></i>
                    </span>
                    <MenuLink routeDestination='/dashboard' routeName="Dashboard"></MenuLink>
                    <MenuLink routeDestination='/user' routeName="Profil"></MenuLink>
                    <MenuLink routeDestination='/user-parent' routeName="Profil Parent"></MenuLink>
                    <MenuLink routeDestination='/campaign' routeName="Contrat"></MenuLink>
                    <MenuLink routeDestination='/mission' routeName="Mission"></MenuLink>
                    <MenuLink routeDestination='/rewards' routeName="Recompenses"></MenuLink>
                    <MenuLink routeDestination='/rewards-parent' routeName="Recompense Parent"></MenuLink>
                </div>
            )
        } else {
            return(
                <span onClick={() => this.setState({ open: true })} className="icon">
                    <i className="bi bi-list"></i>
                </span>
            )
        }
    }

}

