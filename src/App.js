import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [ nasaDate, setNasaData ] = useState('')
  
  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then((res)=>{
      setNasaData(res.data)
    })
    .catch((err)=>{
      console.log("something went wrong", err)
    })
  }, [])

  return (
    <div className="App">
      <p>
        {nasaDate.explanation}
      </p>
    </div>
  );
}

export default App;
