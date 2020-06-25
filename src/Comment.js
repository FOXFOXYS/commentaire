import React, { Component } from 'react';

class Comment extends Component {
    state = {  }
    render() { 
        let comment = this.props.comment

        return ( 
            <div className="commentaire">
                <p><strong>{comment.name}</strong> <br/>{comment.message}</p>
            </div>
         );
    }
}
 
export default Comment;