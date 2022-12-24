import React, {useEffect} from "react";
import {getUserByLogin, getUserByToken} from "./userAPI";


const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();
const initialState = {
    id: null,
    name: null,
    permission: null
};


function reducer(currentState, newState) {
    return { ...currentState, ...newState };
}

function useAuthState() {
    const context = React.useContext(AuthStateContext);
    if (!context) throw new Error("useAuthState must be used in AuthProvider");

    return context;
}

function useAuthDispatch() {
    const context = React.useContext(AuthDispatchContext);
    if (!context) throw new Error("useAuthDispatch must be used in AuthProvider");

    return context;
}


async function loadUser() {
    return await getUserByToken();
}


function AuthProvider(props) {
    console.log("reset")
    const [state, dispatch] = React.useReducer(reducer, initialState);


    useEffect(async () => {
        const user = await loadUser();
        console.log("reapp")
        console.log(user)
        if (user) {
            dispatch({
                id: user["ID"],
                name: user["NAME"],
                permission: user["PERMISSION"]
            })
        } else {
            dispatch({
                id: null,
                name: null,
                permission: null
            })
        }
    }, []);


    return (
        <AuthStateContext.Provider value={state}>
            <AuthDispatchContext.Provider value={dispatch}>
                {props.children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    );
}

function doLogin(dispatch, login) {
    return getUserByLogin(login).then((user) => {
            if (user) {
                console.log("connect " + user["ID"])
                dispatch({
                    id: user["ID"],
                    name: user["NAME"],
                    permission: user["PERMISSION"]
                });
            }
        });
}
/*
function doLogout(dispatch) {
    dispatch(initialState);
    history.push("/");
}*/

export { AuthProvider, useAuthState, useAuthDispatch, doLogin, loadUser, /*doLogout*/ };