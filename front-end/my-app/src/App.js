
import './App.css';

import LandingPage from './components/landingPage';
import LoginPage from './components/loginPage';
import NasaPage from './components/nasaPage';
import RegisterPage from './components/registerPage';
import { BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path ="/" element={<LandingPage/>}/>
        <Route path ="/nasa" element={<NasaPage />}/>
        <Route path ="/register" element={<RegisterPage/>}/>
        <Route path ="/login" element={<LoginPage/>}/>
     
      </Routes>  
    </div>
  </BrowserRouter>
  );
}

export default App;
