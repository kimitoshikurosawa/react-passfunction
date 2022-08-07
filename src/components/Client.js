import React, {Component} from 'react';
import clientimg from './client.jpg'
import Barista from "./Barista";

class Client extends Component {
    state = {
        clientMessage: null,
        baristaMessage: null
    }
    orderCoffee = () => {
        this.setState({
            clientMessage: 'I want a Double Nespresso'
        })
    }

    baristaAnswer = () => {
        this.setState({
            baristaMessage: 'Ok! we have take your order'
        })
    }

    render() {
        return (
            <div>
                <img width="250px" height="200px" src={clientimg} alt="" className="src"/>
                <h1>Client</h1>
                <button onClick={this.orderCoffee}> Order Coffee </button>
                <p>{this.state.clientMessage}</p>
                <hr/>
                <Barista name="Jack" orderAnswer={this.baristaAnswer} theState={this.state}/>
            </div>
        )

    }


}
export default Client;