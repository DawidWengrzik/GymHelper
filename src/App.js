import Nav from './Components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Views/About';
import Shop from './Views/Shop';    
import Contact from './Views/Contact';
import Calendar from './Components/Calendar';
import getMonth from './Redux/getMonth';
import { useEffect } from 'react';



function App() {  

  useEffect(getMonth, [])


  // Home Page  
  const Home = () => {
    return(
      <div className='home__container'>
        <h1>Home Page</h1>
        <Calendar />
      </div>
    )
  }

  // Main Return 
  return (
    <div className="App">
      
      <BrowserRouter>
        <Nav />
        <Routes>
          
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
