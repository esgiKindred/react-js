import {Component} from "react";
import {environment} from "../environment";

export class Campaign extends Component {
        render() {
            return <h1>Bonjour, {this.props.name}</h1>;
        }
        componentDidMount() {
            //fetch(environment.api + '')
        }
}




