import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Converts text to UpperCase

  const handleUpClick = () => {
    let ucText = text.toUpperCase();
    setText(ucText);
    props.showAlert("Converted to UpperCase!", "success");
  };

  // Converts text to LowerCase

  const handleLwClick = () => {
    let lcText = text.toLowerCase();
    setText(lcText);
    props.showAlert("Converted to LowerCase!", "success");
  };

  // Copies text to clipboard

  const handleCopyClick = () => {
    let copyText = document.getElementById("myForm");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Copied to Clipboard!", "success");
  };

  // Removes Extra Spaces

  const handleSpacesClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!", "success");
  };

  // Clears the text

  const handleClearClick = () => {
    let clrText = "";
    setText(clrText);
    props.showAlert("Text Cleared!", "success");
  };

  return (
    <>
      <div className="container my-3">
        <div
          className="mb-3"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
        >
          <h3>{props.heading}</h3>
          <textarea
            className="form-control"
            id="myForm"
            style={{
              color: props.mode === "dark" ? "white" : "#042743",
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
            value={text}
            onChange={handleOnChange}
            rows="10"
          ></textarea>
        </div>
        <div
          className="container"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
        >
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to UpperCase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLwClick}>
            Convert to LowerCase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
            CopyText
          </button>
          <button className="btn btn-primary mx-2" onClick={handleSpacesClick}>
            Remove Extra Space
          </button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>
            Clear Text
          </button>
        </div>
      </div>

      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h3>Text Summary</h3>
        <p>
          <strong>
            {text.split(/(\s+)/).filter((x) => x.trim().length > 0).length}
          </strong>{" "}
          words and <strong>{text.length}</strong> characters
        </p>
        <p>
          <strong>{0.008 * text.split(" ").length}</strong> minutes spent
        </p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Please Enter Some text to Preview"}</p>
      </div>
      <div className="container my-3">
        <h6>
          Credits:
          <a href="https://www.linkedin.com/in/nitin-kumar-dey-49a92215b/">
            Nitin Kumar Dey
          </a>
        </h6>
      </div>
    </>
  );
}
