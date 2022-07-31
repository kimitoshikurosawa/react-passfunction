import React, {Component} from 'react';
import clientimg from './client.jpg'
import Barista from "./Barista";

class Client extends Component {
    state = {
        clientMessage: null,
        bartenderMessage: null
    }
    orderCoffee = () => {
        this.setState({
            clientMessage: 'I want a Double Nespresso'
        })

    }

    render() {
        return (
            <div>
                <img  src={clientimg} alt="" className="src"/>
                <h1>Client</h1>
                <button onClick={this.orderCoffee}> Order Coffee </button>
                <p>{this.state.clientMessage}</p>
                <hr/>
                <Barista name="Jack" theState={this.state}/>
            </div>
        )

    }


}
export default Client;