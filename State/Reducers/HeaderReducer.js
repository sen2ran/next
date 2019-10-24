export const HeaderReducer = (state, action) => {
    console.log(action.lang);
    console.log("Header Reducer" , state);
    switch (action.type) {
        case 'CHANGE_LANG':
            const tmpstate = state;
            tmpstate.lang = action.lang;
            console.log("Header Reducer" , tmpstate);
            return tmpstate
        default:
            return state
    }
}