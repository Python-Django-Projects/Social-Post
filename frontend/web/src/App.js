
import './scss/auth.scss'
import SignIn from './screens/auth/signin/SignIn';
import SignUp from './screens/auth/signup/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (

    <BrowserRouter>
        <Routes>
        <Route path='/' Component={SignIn}/>
        <Route path='signup' Component={SignUp}/>
        </Routes>
        
    </BrowserRouter>
      
    
     
  );
}

export default App;
