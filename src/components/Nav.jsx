import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate} from 'react-router-dom';
import { signout } from '../app/authSlice';
import { clearCart } from '../app/cartSlice';

function Nav() {
  const {user} = useSelector(state=> state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <header className='head'>
      <div>
        <ul className='nav'>
          <li className='nav-list'>
            <Link to='/'>Products</Link>
          </li>
          {user? (
            <Fragment>
              <li className='nav-list'>
                <Link to='/cart'>Cart</Link>
              </li>   
              <li className='nav-list' style={{cursor:'pointer'}} onClick={()=> {
                dispatch(signout())
                dispatch(clearCart())
                navigate('/signin')
                }}>
                Signout
              </li>  
            </Fragment>
          ):(
            <Fragment> 
              <li className='nav-list'>
                <Link to='/signin'>Sign in</Link>
              </li>  
            </Fragment>
          )}     
          
        </ul>
      </div>
    </header>
  );
}

export default Nav;
