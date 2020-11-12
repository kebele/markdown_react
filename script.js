function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
// a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

const ilkText =
`# heading1

## heading2
  
\`<div></div>\`

\`\`\`
let x = 1;
let y = 2
\`\`\`

[links](https://www.freecodecamp.com)
  
**bold**

> Block Quotes!
- list1
- list 2
![tiny image](https://upload.wikimedia.org/wikipedia/en/f/fa/Tiny-wings-icon.jpg)
`;

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      text: ilkText });_defineProperty(this, "handleChange",


    event => {
      this.setState({
        text: event.target.value });

    });}

  render() {

    const markdown = marked(this.state.text, { breaks: true });

    return (
      React.createElement("div", null,
      React.createElement("div", { className: "row" },
      React.createElement("div", { className: "col-6" },
      React.createElement("textarea", {
        className: "form-control",
        id: "editor",
        value: this.state.text,
        onChange: this.handleChange })),



      React.createElement("div", { className: "col-6" },
      React.createElement("div", {
        className: "preview",
        dangerouslySetInnerHTML: { __html: markdown },
        id: "preview" })))));




  }}


ReactDOM.render(React.createElement(App, null),
document.getElementById('app'));