import "./App.css";
import Joke from "./components/Joke";

function App() {
  return (
    <div className="App">
      <center>
        <h1>JOKE GENERATOR</h1>
        <h3>Wanna Laugh until you get a stomachache</h3>
        <h4>Click Below!</h4>
      </center>

      <Joke />
    </div>
  );
}

export default App;
