import {Component} from "react";
import {environment} from "../environment";
import {ReactSession} from "react-client-session";
import { useNavigate } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);


        this.state = {
            error: null,
            isLoaded: false,
            valueEmail: '',
            valuePassword: ''
        };
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail(event) {
        this.setState({valueEmail: event.target.value});
    }
    handleChangePassword(event) {
        this.setState({valuePassword: event.target.value});
    }

    handleSubmit(event) {
        console.log('cloick')
        this.checkLogin();
        event.preventDefault();
    }

    render() {

        const { error, isLoaded} = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {
            return (
                <div>
                    <img src={"rien"} alt={"rien"}/>
                    <h1>Connexion</h1>
                    <form>
                        <input className="input" type="text" value={this.state.valueEmail} onChange={this.handleChangeEmail} placeholder="Email"/>
                        <input className="input" type="password" value={this.state.valuePassword} onChange={this.handleChangePassword} placeholder="Mot de passe"/>
                    </form>
                    <div>
                        <a>Créer un compte ici</a>
                        <button className="button is-link" onClick={this.handleSubmit}>Connexion</button>
                    </div>
                </div>
            );
        }
    }

    componentDidMount() {
        this.setState({
            isLoaded: true
        });
    }

    checkLogin(){

        fetch(environment.api + 'login_check',
            { method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                },
                mode: 'cors',
                cache: 'default',
                body : JSON.stringify({username : this.state.valueEmail,password : this.state.valuePassword})

            }).then((response) =>{
            response.json().then(
                (result) => {
                    console.log(result)
                  if(result.token){
                      alert(result.token)
                      this.props.navigate("/dashboard");
                  } else{
                      alert(result.message)
                  }
                },
                (error) => {
                    error.message += response.body
                    this.setState({error});
                }
            )
        })
    }



}
function LoginWithNavigate(props) {
    let navigate = useNavigate();
    return <Login {...props} navigate={navigate} />
}

export default LoginWithNavigate


