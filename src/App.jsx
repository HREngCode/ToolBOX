import { useState } from "react";
import "./App.css";
import ShedImage from "./assets/shed.jpg";
import NavBar from "../components/NavBar.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div>
          <NavBar />
        </div>
        <div className="center-container">
          <div className="center-heading">Text Goes Here</div>
          <div>
            <div className="input-container">
              <div>
                <button>Sign Up</button>
                <button>Log In</button>
              </div>
              <div>
                <label htmlFor="label">First Name</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="label">Last Name</label>
                <input type="text" />
              </div>
              <div>
                Welcome to the ToolBox where you can can take an inventory of
                our posessions and keep them organized in the cloud. Whether
                it's your wardrobe or your dishes, you can have an easy way to
                count your belongings. We are here to meet your needs. Don't see
                a category that applies? Let us know! We are always working to
                make improvemnts and we would love to hear from you!!
              </div>
            </div>
            <img />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
