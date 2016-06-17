"use strict";

var MarkdownApp = React.createClass({
  displayName: "MarkdownApp",

  getInitialState: function getInitialState() {
    return { value: "Markdown previewer by [Nicolas May](https://freecodecamp.com/hynso).\n\nHeader 1\n========\nHeader 2\n--------\n### Header 3\n#### Header 4\n##### Header 5\n###### Header 6\n\nParagraph **bold** _italic_ ~~strikethrough~~ `monospace` \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\n\n**Lorem ipsum dolor sit amet, consectetur adipiscing elit.**\n\n_Lorem ipsum dolor sit amet, consectetur adipiscing elit._\n\n~~Lorem ipsum dolor sit amet, consectetur adipiscing elit.~~\n\n`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`\n\n* Unordered item a\n* Unordered item b\n\n\n1. Ordered item 1\n2. Ordered item 2\n\n\n| Column 1 | Column 2 | Column 3 |\n|:---------|:--------:|---------:|\n| blah     | blah     | blah     |\n\n" };
  },
  handleChange: function handleChange(event) {
    this.setState({ value: event.target.value });
  },
  rawMarkup: function rawMarkup() {
    // console.log({__html: marked(this.state.value, {sanitize: true})});
    return { __html: marked(this.state.value, { sanitize: true }) };
  },
  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement("textarea", {
        type: "text",
        rows: "36",
        value: this.state.value,
        onChange: this.handleChange }),
      React.createElement("div", { id: "output", dangerouslySetInnerHTML: this.rawMarkup() })
    );
  }
});

ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(MarkdownApp, null)
), document.getElementById("container"));
