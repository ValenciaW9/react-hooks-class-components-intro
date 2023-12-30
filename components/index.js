//When we write this:
ReactDOM.render(
<BlogPost title="Hello" content="World" />,
document.getElementById("root")
);

// Something like this happens in React's internal code
const component = new BlogPost({ title: "Hello", content: "World" });

// so inside the component, the props object is saved to the object:



class Component {
    constructor(props) {
    this.props = props;
  }
}