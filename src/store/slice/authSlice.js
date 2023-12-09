// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     token: localStorage.getItem('accessToken') || null,
//     user: localStorage.getItem('accessToken') || null
// }

// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         setToken: (state, actions) => ({ state, token: token }),
//         setUser: (state, actions) => {
//             localStorage.setItem("accessToken", actions.payload.accessToken)
//             state.user = actions.payload
//             return { token: actions.payload , user:user.payload.accessToken };
//         }
//     }
// })

// export const { setToken, setUser } = authSlice.actions
// export default authSlice

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem('accessToken') || null,
    user: localStorage.getItem('accessToken') || null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setUser: (state, action) => {
            localStorage.setItem("accessToken", action.payload.accessToken);
            state.user = action.payload;
        }
    }
})

export const { setToken, setUser } = authSlice.actions
export default authSlice
