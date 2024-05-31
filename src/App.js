
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import  {BrowserRouter, Routes, Route} from 'react-router-dom';
import Collection from './pages/Collection';
import Category from './pages/Category';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Account from './pages/Account';
import Bottom_Banner from './components/Assets/banner bottoms.png';
import Tops_Banner from './components/Assets/banner tops.png';
import Dresses_Banner from './components/Assets/banner dresses.png';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Collection/>}/>
        <Route path='/Bottom Wear' element={<Category banner={Bottom_Banner} category="Bottom Wear"/>}/>
        <Route path='/Tops' element={<Category banner={Tops_Banner} category="Tops"/>}/>
        <Route path='/Dresses' element={<Category banner={Dresses_Banner} category="Dresses"/>}/>
        <Route path="/Product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Account" element={<Account/>}/>
        
      </Routes>
      <Footer />
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
