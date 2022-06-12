import {configureStore} from '@reduxjs/toolkit'
import { userReducer, loginReducer } from './reducers/user'

const store = configureStore({
    reducer: {
        user: userReducer,
        login: loginReducer,
    }
})


export default store