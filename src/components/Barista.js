import React from 'react';
import baristaimg from "./barista.jpg";



let Barista = props => {
    const btnAnswer = props.theState.clientMessage !== null ? (<button>Answser</button>): (<button disabled> Answer</button>) ;
    return(
        <div className="Bartender">
            <img width="150px" height="100px" src={baristaimg} alt="" className="src"/>
            <h2>I'm {props.name} the bartender</h2>
            {btnAnswer}
        </div>
    )
}


export default Barista;