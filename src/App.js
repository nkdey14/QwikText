import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="QwikText" home="Home" about="About" />
      {/* <Navbar /> */}
      <div className="container">
        <TextForm heading="Enter your text here" />
      </div>
    </>
  );
}

export default App;
