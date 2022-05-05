import {Component} from "react";
import {environment} from "../environment";

export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {
            return (
               <h1>Mes Cagnottes</h1>
            );
        }
    }

    componentDidMount() {
        this.setState({
            isLoaded: true
        });
    }
}

