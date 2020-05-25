
export const setReducerState = (value, {type, payload}, actionType) =>
    type === actionType
        ? payload
        : value


export const reducerStateSetter = (userAction, payload, actions) => dispatch => {
    if (userAction === 'success' || userAction === 'fetch' || userAction === 'fail') {
        dispatch({
            type: actions[userAction],
            payload
        })
    } else {
        return new Error(`The entered userAction = ${userAction} parameter is out of accepted scope.`)
    }
};

export const reducerStateGetter = (action = 'success') => {

};

export const xhrReducerProviderTemplate = (
    {
        fetch,
        success,
        fail
    },
    payloadName,
    state = {
        isFetching: false,
        [`success${payloadName}`]: null,
        [`error${payloadName}`]: null
    },
    {
        type,
        payload
    }) => {

    switch(type) {
        case fetch:
            return {
                ...state,
                isFetching: true
            };
        case success:
            return {
                ...state,
                isFetching: false,
                [`success${payloadName}`]: payload
            };
        case fail:
            return {
                ...state,
                isFetching: false,
                [`error${payloadName}`]: payload
            };
        default: return state
    }
};

export const xhrReducerProvider = (reducerName) => {
    reducerName = reducerName.replace(/ /g, '');

    const actions = {
        fetch: `FETCH_${reducerName}`,
        success: `SUCCESS_${reducerName}`,
        fail: `FAIL_${reducerName}`
    };

    const reducer = (state = {}, action) => xhrReducerProviderTemplate(actions, reducerName, state, action);
    const setter  = (userAction, payload) => reducerStateSetter (userAction, payload, actions);
    const mapper  = (state) => {
        const reachedState = state[reducerName];

        return {
            fetch: reachedState.isFetching,
            success: reachedState[`success${reducerName}`],
            fail: reachedState[`error${reducerName}`],
        }
    };

    return [
        reducer,
        setter,
        mapper
    ]
};