import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import ReactLogoThree from "./components/ReactLogoThree";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Canvas>
          <OrbitControls />
          <ReactLogoThree />
        </Canvas>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
