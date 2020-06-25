import React, { Component } from 'react';
import CommentsList from "./CommentsList";

class AdminMode extends Component {
    state = { 
        isAdmin : false
     }

     changeMode = () => {
         this.setState ({
             isAdmin: !this.state.isAdmin
         })
     }

    render() { 
        let button = this.state.isAdmin ? 
        <button onClick={this.changeMode} className="button is-danger">Desactiver le mode d'administration</button>
        : <button onClick={this.changeMode} className="button is-info">Activer le mode d'administration</button>;
        
        let classMessage = this.state.isAdmin ? "message is-danger" : "message is-info";

        let classButton = this.state.isAdmin ? "is-hidden" : "";



        return ( 
            <div className="Formulaire">
                <article className={classMessage}>
                    <div className="message-body">
                    {button}
                    </div>
                </article>
                <CommentsList classButton={classButton}/>
          </div>
         );
    }
}
 
export default AdminMode;