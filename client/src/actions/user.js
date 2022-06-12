import axios from "axios";


export const getUser = () => async(dispatch) => {
    try {
        dispatch({
            type: "GET_USER_REQUEST",
        });
        
        const {data} = await axios.get("/api/v1/user");
 

        dispatch({
            type: "GET_USER_SUCCESS",
            payload: data.user,
        });


    } catch (error) {
        dispatch({
            type: "GET_USER_FAILURE",
            payload: error.response.data.message,
        });
        const {data} = await axios.get("/api/v1/users");
    }
}




export const login = (email, password) => async(dispatch) => {
    try {
        dispatch({
            type: "LOGIN_REQUEST",
        });
        
        
        const {data} = await axios.post("/api/v1/login", {
            email,
            password,
        }, {
            headers: {
                "Content-Type": "application/json"
            },
        })

        

        dispatch({
            type: "LOGIN_SUCCESS",
            payload: data.message,
        });
    



    } catch (error) {
        dispatch({
            type: "LOGIN_FAILURE",
            payload: error.response.data.message,
        });
        
    }
}




export const logout = (email, password) => async(dispatch) => {
    try {
        dispatch({
            type: "LOGOUT_REQUEST",
        });

        const {data} = await axios.post("/api/v1/logout");

        dispatch({
            type: "LOGOUT_SUCCESS",
            payload: data.message,
        });
    



    } catch (error) {
        dispatch({
            type: "LOGOUT_FAILURE",
            payload: error.response.data.message,
        });
        
    }
}



export const loadUser = (email, password) => async(dispatch) => {
    try {
        dispatch({
            type: "LOAR_USER_REQUEST",
        });

        const {data} = await axios.get("/api/v1/me");

        dispatch({
            type: "LOAR_USER_SUCCESS",
            payload: data.message,
        });
    



    } catch (error) {
        dispatch({
            type: "LOAR_USER_FAILURE",
            payload: error.response.data.message,
        });
        
    }
}