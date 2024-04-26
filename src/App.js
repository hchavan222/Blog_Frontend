import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Index';
import {Route, Routes} from "react-router-dom"
import Home from './Pages/Home/Index';
import Add from './Pages/Add/Index';

function App() {
  return (
    <div>

     <Header />
      
      <Routes>

      

      <Route exact path='/' element={<Home />}/>

      <Route path="/add" element={<Add />}/>

      </Routes>
    </div>
  );
}

export default App;
