import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Search from "./Components/Search";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Header />
      
        <Search />
      
    </div>
  );
}

export default App;
