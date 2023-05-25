import "./App.css";
import LightOnImg from "./assets/lighton.png";
import LightOffImg from "./assets/lightoff.png";
import { useState } from "react";

function App() {
  return (
    <>
      <Light />
    </>
  );
}

function Light() {
  const [lightOn, setLightOn] = useState(false);

  function toggleButton() {
    setLightOn(!lightOn);
  }


  return (
    <div>
      <h1>Click the buttons to turn on or off the light</h1>
      <img src={lightOn ? LightOnImg : LightOffImg} />
      <div>
        <button
          
          onClick={toggleButton}
        >
         Turn { lightOn? "Off" : "On"} 
        </button>
    
        
      </div>
    </div>
  );
}

export default App;
