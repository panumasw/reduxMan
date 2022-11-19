import {Routes, Route, Navigate} from 'react-router-dom';
import Products from './Products';
import Signin from './Signin';


const UnAuth = () => {
    return (
        <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/signin' element={<Signin />} />
            <Route
                path="*"
                element={<Navigate to="/signin" replace />}
            />
        </Routes>
    )
    
  }
  
export default UnAuth