
import {Component} from "react";
import {Link} from "react-router-dom";
import './drawer.css';

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
                    <i className="bi bi-list"></i>
                    </span>



                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/campaign">Campaign</Link>
                        <Link to="/mission">Mission</Link>
                        <Link to="/users">Users</Link>

                        <p className="txt-995">Dashboard</p>
                        <p className="txt-995">Profil</p>
                        <p className="txt-995">Profil Parent</p>
                        <p className="txt-995">Contrat</p>
                        <p className="txt-995">Mission</p>
                        <p className="txt-995">Recompenses</p>
                        <p className="txt-1088">Recompenses Parent</p>
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

