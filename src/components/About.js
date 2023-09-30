// import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // const toggleMode = () => {
  //   if (myStyle.color === "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //   } else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //   }
  // };

  return (
    <div
      className="container my-3"
      style={{
        color: props.mode === "dark" ? "white" : "#042743",
      }}
    >
      <h3>About Us</h3>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Click here
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            style={{
              color: props.mode === "dark" ? "white" : "#042743",
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
          >
            <div className="accordion-body">
              <strong>Technologies used:-</strong> JavaScript, React JS,
              Bootstrap etc. <br />
              <strong>Tools Used:-</strong> VSCode <br />
              <strong>Description:-</strong> In this Project, you can convert
              your text into Lowercase/Uppercase letters, get the count of
              Words/Characters, Preview & Copy the text, Remove Extra Whitespace
              etc. Apart from this, you can always switch between Light/Dark
              modes which improves the look and feel of the Website.
            </div>
          </div>
        </div>
        {/* <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <button className="btn btn-primary" onClick={toggleMode}>
          Enable Dark Mode
        </button> */}
      </div>
      <br />
      <div
        className={`container my-3 text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
      >
        <h6>
          Credits:
          <a href="https://www.linkedin.com/in/nitin-kumar-dey-49a92215b/">
            &nbsp; Nitin Kumar Dey
          </a>
        </h6>
      </div>
    </div>
  );
}
