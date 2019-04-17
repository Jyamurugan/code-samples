import { CHANGE_SEARCHQUERY, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED } from "./constants";

const initalState = {
    query: ''
};

const robotsState = {
    robots: [],
    isPending: false,
    error: ''
};

export const searchRobots = (state = initalState, action = {}) => {
    switch(action.type) {
        case CHANGE_SEARCHQUERY:
            return Object.assign({}, state, { query: action.payload })
        default:
            return state;
    }
}

export const robotsReducer = (state = robotsState, action = {}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false })
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.error, isPending: false })
        default:
            return state;
    }
}