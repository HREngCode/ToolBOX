import { useState } from "react";
import "./App.css";
import NavBar from "../components/NavBar.jsx";
import InputFields from "../components/InputFields.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div>
          <NavBar />
        </div>
        <div class="homepage-grid">
          <img src="./src/assets/Screwdrivers.jpg" alt="Screwdrivers"></img>
          <img src="./src/assets/wrenches.jpg" alt="Wrenches"></img>
        </div>
        <div>
          <InputFields />
        </div>
      </div>
    </>
  );
}

export default App;
