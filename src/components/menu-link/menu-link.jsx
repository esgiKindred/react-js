import {Component} from "react";

import {Link} from "react-router-dom";
import './menu-link.css';


export class MenuLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link className="menu-link" to={this.props.routeDestination}>{this.props.routeName}</Link>
        )
    }
}

