import React, { Component } from 'react';
import Comment from "./Comment";

class CommentList extends Component {

    

    render() {

        let commentsList = this.props.comments.map(comment => {
            return <div className="Commentaires">
            <p><Comment key={comment.id} comment={comment}/>
            </p>
            <button className="delete is-medium " onClick={() => this.props.deleteComm(comment.id)}>X</button>
            </div>
         })
        

        return (
            <div className="comment-list column">
                <h2 className="title is-2">Liste des commentaires</h2>
                <article className="media">
                    <div className="media-content">
                    {commentsList}
                    </div>
                </article>
                
            </div>
          );
    }
}

export default CommentList;
