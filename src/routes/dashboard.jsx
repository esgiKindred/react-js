import { Component } from "react";
import { environment } from "../environment";
import { ReactSession } from "react-client-session";
import {
  ButtonPrimary,
  ButtonDanger,
  ButtonSecondary,
} from "../components/BoutonCtaSimple/button";
import Input from "../components/FormInput/input";
import Textarea from "../components/Textarea/textarea";

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
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
        <div>
          <h1>Dashboard</h1>
          <p>{ReactSession.get("roles")}</p>
          <p>{ReactSession.get("token")}</p>

          <ButtonPrimary text="test" />
          <ButtonDanger text={"test"} />
          <ButtonSecondary text={"test"} />
          <hr />
          <Input placeholder={"input"} />
          <Textarea placeholder={"textarea"} />
        </div>
      );
    }
  }

  componentDidMount() {
    this.setState({
      isLoaded: true,
    });
  }
}
