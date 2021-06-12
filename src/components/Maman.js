import React, {Component} from 'react'
import Enfant from './Enfant';

class Maman extends Component{


    state = {
        messageMaman:null,
        messageEnfant:null,
    }

    updateMsgMaman = () => {
        this.setState({
            messageMaman:"Va mettre les assiettes"
        })
    }

    updateMsgToto = () => {
        this.setState({
            messageEnfant: "D'accord maman"
        })
    }

    updateMsg

    render(){

            
        return(

            <div>

                    <h1> Maman </h1>

                    <button onClick = {this.updateMsgMaman}>Ordre de la mère</button>

                    <p>{this.state.messageMaman}</p>

                    <hr/>

                                          {/* MsgToto va mettre a jour le state quand il va etre appeler */}
                    <Enfant name = "gayyy toto" leState = {this.state} msgToto = {this.updateMsgToto}/>
            </div>

        )

    }



}

export default Maman;