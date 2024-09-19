
import { BrowserRouter ,Routes , Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Login from './Login';
import Protected from './Protected';
import Page from './Page';
//import NavBar from './NavBar';
function App() {
  return (
   <div>
    {/* <h1>Hii Rachit</h1> */}
    {/* <NavBar/> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Protected Cmp={Home}/>}></Route>
      <Route path="/about" element={<Protected Cmp={About}/>}></Route>
      <Route path="/contact" element={<Protected Cmp={Contact}/>}></Route>
      <Route path="/services" element={<Protected Cmp={Services}/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      {/* <Route path="/signOut" element={<SignOut/>}></Route> */}
      <Route path="/page" element={<Protected Cmp={Page}/>}></Route>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
