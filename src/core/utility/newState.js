export function newState(previousState, currentState) {
    return Object.assign({}, previousState, currentState);
};