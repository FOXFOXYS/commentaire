import React, { Component } from 'react';

class CommFrom extends Component {
    state = { 
        name: "",
        message: "",
     }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addComm(this.state.name, this.state.message);
    }
    

    
    handleChangeName = (e) => {
        this.setState({
            name: e.target.value,
        })
    }

    handleChangeComment = (e) => {
        this.setState({
            message: e.target.value,
        })
    }
    

    render() { 
        return ( 
            <div className="from">
                <form onSubmit={this.handleSubmit} className="commentform" _lpchecked="1" >
                    <h2 className="title is-2">Ajouter un commentaire</h2>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                        <input className="input" id="name" type="text" placeholder="Your name" onChange={this.handleChangeName} value={this.state.name}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Message</label>
                        <div className="control">
                            <textarea className="textarea" placeholder="Your comment" id="message" onChange={this.handleChangeComment} value={this.state.message}cols="30" rows="10"></textarea> 
                        </div>
                    </div>



                    <button className="button is-primary">Comment</button>
                </form>
            </div>
         );
    }
}
 
export default CommFrom;