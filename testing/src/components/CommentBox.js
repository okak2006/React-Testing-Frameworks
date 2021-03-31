import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {

    state = {
        comment: ''
    }

    handleChange = (e) => {
        this.setState({ comment: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        // To-do call action creator to push comment
        this.props.saveComment(this.state.comment);

        this.setState({ comment: '' })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea 
                        value={this.state.comment}
                        onChange={this.handleChange}
                    />
                    <div>
                        <button>
                            Submit Comment
                        </button>
                    </div>
                </form>
                {/* if we write this.props.fetchComments() it will immediately run call on render */}
                <button className="fetch-comments" onClick={this.props.fetchComments}>
                    Fetch Comments
                </button>
            </div>
        )
    }
}

export default connect(null, actions)(CommentBox);
//export default CommentBox;