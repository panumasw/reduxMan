import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {signinAsync } from '../app/authSlice'

export default function Signin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')  
  const dispatch = useDispatch()
  const {error} = useSelector(state=> state.auth)

    return (
      <div className='form'>
        <form >
          <input type="email" name='email' value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" name='password' value={password} onChange={e => setPassword(e.target.value)} />
          <button type='button' onClick={()=> {
            dispatch( signinAsync({email, password}) )
            } } className='btn btn-primary btn-lg btn-block' id='subs' > <h3>Submit</h3> </button>
          <br/>
          {error!==""? (<span style={{color:"red"}}>{error}</span>): null}
        </form>

        
      </div>
    )
  
}