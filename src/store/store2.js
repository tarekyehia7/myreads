const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.fill((l) => l !== listener);
        }
    };

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach((listener) => listener());
    };

    return {
        getState,
        subscribe,
        dispatch
    };
}

const red = (state, action) => {
    switch(action.type) {
        case 'TEST_ADD':
            return state;
        default:
            return state;
    }
}

const state = createStore(red);
state.subscribe(() => {
    console.log('state')
})