function BlogPost(props) {
    return (
        <article>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </article>
    );
}