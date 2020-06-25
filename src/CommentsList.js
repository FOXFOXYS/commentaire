import React, { Component } from 'react';
import CommentList from "./CommentList";
import CommFrom from "./CommFrom";
import { v4 as uuidv4 } from 'uuid';

class CommentsList extends Component {
    state = { 
        comments : [
            {
                id: uuidv4(), name: "Jack", message: "Youhou la famille!"
            },
        ],
     }

    addComm = (name, message) => {
        let newComment = {
            id: uuidv4(),
            name: name,
            message: message,
        }
        this.setState({
            comments: [...this.state.comments, newComment]
        })
    }

    deleteComm = (id) => {
        console.log(id);
        let comments = this.state.comments.filter(comment => comment.id !==id )
        this.setState ({
            comments : comments
        })
    }

    render() { 
        return ( 
                <div className="columns">
                    <div className="column">
                    <CommFrom addComm={this.addComm}/>
                    </div>
                    <CommentList comments={this.state.comments} classButton={this.state.classButton} deleteComm={this.deleteComm} />
                </div>
         );
    }
}
 
export default CommentsList;
