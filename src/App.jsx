import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { loadUser } from './app/authSlice';
import Nav from './components/Nav';
import Auth from './pages/Auth';
import UnAuth from './pages/UnAuth';


function App() {
  const {user, token} = useSelector(state => state.auth) 
  const dispacth = useDispatch()
  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) {
      dispacth(loadUser())
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])
  
  
  

return (
  <div className="App">     
    <Nav/>
    {user? <Auth/>: <UnAuth/>}
  </div>
    
  );
}

export default App;
