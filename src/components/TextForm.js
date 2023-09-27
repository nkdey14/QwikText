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
  };

  // Converts text to LowerCase

  const handleLwClick = () => {
    let lcText = text.toLowerCase();
    setText(lcText);
  };

  // Copies text to clipboard

  const handleCopyClick = () => {
    let copyText = document.getElementById("myForm");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  };

  // Removes Extra Spaces

  const handleSpacesClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  // Clears the text

  const handleClearClick = () => {
    let clrText = "";
    setText(clrText);
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
    </>
  );
}
