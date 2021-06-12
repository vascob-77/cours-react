import React from 'react';

const Enfant = (props) => {


                                                                             //déclenche la fonction updateMsgToto (permet de mettre a jour le state)
   const btnreponseToto = props.leState.messageMaman !== null ? (<button onClick={props.msgToto}>Réponse</button>) : (<button disabled>Réponse</button>)

   console.log(props)

    return (

        <div>
        
            {props.name}

                <br></br> <br></br> 

            {btnreponseToto}

            <br></br>

            {/* Appele le state message Enfant qui a été mis a jour */}
            <h1>{props.leState.messageEnfant}</h1>

        </div>
    );
};

export default Enfant;