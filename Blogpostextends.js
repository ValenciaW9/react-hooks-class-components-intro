import React from "react";

class BlogPost extends React.Component {
    render() {
        return (
            <article>
                <h1>{this.props.title}</h1>
                <p>{this.props.content}</p>
            </article>
        );
    }
}