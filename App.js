import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './home';
import About from './about';
import LoginForm from './loginform';
import Contact from './contact';
import Portfolio from './portfolio';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Sidebar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/loginform" element={<LoginForm/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
