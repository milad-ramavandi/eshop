import {createSlice} from '@reduxjs/toolkit'

const INITIAL_STATE = {token:''}
const UserSlice = createSlice({
    name:'userSlice',
    initialState:INITIAL_STATE,
    reducers:{
        setToken: (state, action) => {
            state.token = action.payload
        },
        removeToken: (state) => {
            state.token = ''
        }

    }
})

export const {setToken, removeToken} = UserSlice.actions;
export default UserSlice.reducer