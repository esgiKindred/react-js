import { Component } from "react";
import { environment } from "../environment";
import { ReactSession } from "react-client-session";
import { Button, Form } from "react-bulma-components";

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

          <Button color={"primary"}>Test</Button>
          <Button color={"secondary"}>Test</Button>
          <Button color={"danger"}>Test</Button>
          <hr />
          <Form.Label>Input example</Form.Label>
          {/* <Textarea placeholder={"textarea"} />
          <Select placeholder={"textarea"} /> */}
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
