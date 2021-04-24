import React, {createContext, useReducer} from 'react'


export const AuthContext = createContext();
const initialState = {
        isAuthenticated : false,
        user : null,
        token : null,
}
const reducer = (state, action) => {
    
    switch(action.type) {
        case "LOGIN" : 
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", JSON.stringify(action.payload.token));
        return {
            ...state,
            isAuthenticated : true,
            user : action.payload.user,
            token : action.payload.token
        };
        case "LOGOUT" : 
        localStorage.clear();
        return {
            ...state,
            isAuthenticated : false,
            user : null
        };
        default : return state;
    }
};



export const AuthContextProvider = (props) => {

    const [state , dispatch] = useReducer(reducer, initialState);
    return (
        <AuthContext.Provider 
        values={{
            state,
            dispatch
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}