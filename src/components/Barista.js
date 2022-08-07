import React from 'react';
import baristaimg from "./barista.jpg";



let Barista = props => {
    const btnAnswer = props.theState.clientMessage !== null ? (<button onClick={props.orderAnswer}>Answer</button>): (<button disabled> Answer</button>) ;
    return(
        <div className="Bartender">
            <img width="150px" height="100px" src={baristaimg} alt="" className="src"/>
            <h2>I'm {props.name} the Barista</h2>
            {btnAnswer}
            <p>{props.theState.baristaMessage}</p>
        </div>
    )
}


export default Barista;