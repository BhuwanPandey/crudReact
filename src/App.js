import {Routes,Route,} from "react-router-dom";
import Navbar from './Navbar';
import './App.css';
import Home from './component/Home';
import Create from './component/Create';
import Fetchdata from './component/Fetchdata';


function App() {

  return (
    <>
    <Navbar/>
    <div className="mainContainer">
    <Routes>
      <Route path='' element={<Home/>} />
      <Route path='/create' element={<Create/>} />
      <Route path='/api' element={<Fetchdata/>} />
    </Routes>
    </div>
    
  
    </>
  );
}

export default App;
