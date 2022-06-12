import {createReducer} from '@reduxjs/toolkit'

const initialState = {
    loading: true,
}

export const userReducer = createReducer(initialState,{
    GET_USER_REQUEST:(state)=>{
        state.loading = true;
    },
    GET_USER_SUCCESS: (state, action)=>{
        state.loading = false;
        state.user = action.payload;
        state.message = action.payload;
    },
    GET_USER_FAILURE: (state, action)=>{
        state.loading = false;
        state.error = action.payload;
        state.error = action.payload;
    },

})




export const loginReducer = createReducer({},{
    LOGIN_REQUEST: (state, action)=>{
        state.loading = true;
        state.isAuthenticated = false;
    },
    LOGIN_SUCCESS: (state, action)=>{
        state.loading = false;
        state.isAuthenticated = true;
        state.message = action.payload;
    },
    LOGIN_FAILURE: (state, action)=>{
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },


    LOAR_USER_REQUEST: (state, action)=>{
        state.loading = true;
        state.isAuthenticated = false;
    },
    LOAR_USER_SUCCESS: (state, action)=>{
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
    },
    LOAR_USER_FAILURE: (state, action)=>{
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },


    LOGOUT_REQUEST: (state, action)=>{
        state.loading = true;
        
    },
    LOGOUT_SUCCESS: (state, action)=>{
        state.loading = false;
        state.isAuthenticated = true;
        state.user = null;
        state.message = action.payload;
    },
    LOGOUT_FAILURE: (state, action)=>{
        state.loading = false;
        state.isAuthenticated = true;
        state.error = action.payload;
    },

    CLEAR_ERROR: (state)=>{
        state.error = null
    },

    CLEAR_MESSAGES: (state)=>{
        state.messages = null
    }

})