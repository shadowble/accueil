import Menu from './menu/Menu';
import {Routes, Route} from "react-router"
import Accueil from './Accueil/Accueil';
import Emplacement from './emplacement/Emplacement';
import Telecharger from './Telecharger/Telecharger';
import Contact from './Contact/Contact';
import Apropos from './Apropos/Apropos';
import "./App.css"
import Footer from './Footer/Footer';
import members from './membre';

function App() {
  return (
    <div>
        <Menu/>
     <Routes>
      <Route path='/' element={<Accueil/>}/>
      <Route path='/emplacement' element={<Emplacement/>}/>
      <Route path='/A-propos' element={<Apropos members={members}/>}/>
      <Route path='/download' element={<Telecharger/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>  
     <Footer/>   
    </div>
  );
}

export default App;
