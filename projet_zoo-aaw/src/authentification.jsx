

const initialState = {
    status: "idle",
    user: null,
    error: null
};

function AuthProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <AuthStateContext.Provider value={state}>
            <AuthDispatchContext.Provider value={dispatch}>
                {props.children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    );
}