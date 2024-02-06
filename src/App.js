import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './Components/CustomNavbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Myproducts from './Components/Myproducts';
import Pricing from './Components/Pricing';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomNavbar />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/products' element={<Myproducts />}></Route>
          <Route path='/pricing' element={<Pricing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
