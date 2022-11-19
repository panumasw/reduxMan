import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    user: null,
    loading: false,
    error: '',
    token: localStorage.getItem('token')
}


// Create an instance of axios
const api = axios.create({
    baseURL: '/api',
    headers: {
      'Content-Type': 'application/json'
    }
  });


export const signinAsync = createAsyncThunk('signin', async ({email, password}, store)=> {
    try {
        const res = await api.post('/auth', {email, password})
        return res.data
    } catch (error) { 
        throw error
    }
})

export const loadUser = createAsyncThunk('loadUser', async (store) => {
    try {
        let token = localStorage.getItem('token')
        api.defaults.headers.common['x-auth-token'] = token
        const res = await api.get('/auth')
        return res.data
    } catch (error) {
        throw error
    }
})


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signout: (state, action) => {
            localStorage.removeItem('token');
            delete api.defaults.headers.common['x-auth-token'];
            return {
                user: null,
                loading: false,
                error: '',
                token: null
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signinAsync.pending, (state) => {
                state.loading = true
                state.error = ''
            })
            .addCase(signinAsync.fulfilled, (state, action)=> {
                state.token = action.payload.token
                state.loading = false
                state.error = ''
                localStorage.setItem('token', action.payload.token)
            })
            .addCase(signinAsync.rejected, (state, action)=> {
                state.token = null
                state.loading = false
                state.error = action.error.message
            })
            .addCase(loadUser.pending, (state) => {
                state.loading = true
                state.error = ''
            })
            .addCase(loadUser.fulfilled, (state, action)=> {
                state.user = action.payload
                state.loading = false
                state.error = ''
            })
            .addCase(loadUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

const authReducer = authSlice.reducer

export const {signout, getAuth} = authSlice.actions

export default authReducer