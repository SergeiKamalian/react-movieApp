import axios from "axios";
import './App.scss'
import {useState} from 'react'
import { BrowserRouter } from "react-router-dom";
import Applicaton from "./Application/Application";
function App() {
  const [imgFon, setImgFon] = useState('')
  console.log(imgFon);
  console.log('app render');
  
  
  return (
    <div className="App">
      <div className="fon" style={(imgFon ? {backgroundImage: `linear-gradient(to top, rgba(26, 0, 10, .8), rgba(0, 0, 0, .8)), url('https://image.tmdb.org/t/p/original/${imgFon}')`} : {})}></div>
      <div className="wrapper" >
        <BrowserRouter>
          <Applicaton setImgFon={setImgFon} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
