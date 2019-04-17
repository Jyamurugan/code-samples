import { 
    CHANGE_SEARCHQUERY,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING
} from './constants';

export const setQuery = (query) => {
    return {
        type: CHANGE_SEARCHQUERY,
        payload: query
    };
}
//Higher order functions
export const requestRobots = () => {
    return (dispatch) => {
        dispatch({ type: REQUEST_ROBOTS_PENDING });
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
    }
}
