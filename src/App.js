import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Header from './components/header/Header';
import Cart from './components/cart/Cart';
import Routing from './routing/Routing';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Routing/>
    <Home/>
    <Footer/>
    </div>
  );
}

export default App;
