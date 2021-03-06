import {Component} from "react";
import {environment} from "../environment";

export class Users extends Component {
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
            return <div>Chargementâ€¦</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.email}
                            {item.password}
                        </li>
                    ))}
                </ul>
            );
        }
    }

    componentDidMount() {

        fetch(environment.api + 'users?page=1',{ method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            mode: 'cors',
            cache: 'default',
        }).then((response) =>{
            response.json().then(
                (result) => {
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    error.message += response.body

                    this.setState({
                        isLoaded: true,
                        error,
                    });
                }
            )
        })
    }
}

