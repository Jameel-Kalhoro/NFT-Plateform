import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Auctions from "./components/Auctions";
import Discover from "./components/Discover";
import './App.css';

function App() {
  return (
    <div className="App">
    <Header></Header>\
    <Welcome></Welcome>
    <Auctions></Auctions>
    <Discover></Discover>
    </div>
  );
}

export default App;
