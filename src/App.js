import Nav from './Components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Views/About';
import Shop from './Views/Shop';    
import Contact from './Views/Contact';
import Calendar from './Components/Calendar/Calendar';



function App() {  

  // Home Page  
  const Home = () => {
    return(
      <div className='home__container'>
        <Calendar />
      </div>
    )
  }

  // Main Return Routes
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
