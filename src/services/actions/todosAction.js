// for fetching data action will be return a function and this function performs using redux-thunk
// we can handle request using axios and that will be a asynchronous task

import axios from "axios";
import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constants/todosConstant"

export const getAllTodos = async (dispatch) => {
    dispatch({ type: GET_TODOS_REQUEST });
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
        dispatch({ type: GET_TODOS_SUCCESS, payload: res.data })
    }
    catch (error) {
        dispatch({ type: GET_TODOS_FAILED, payload: error.message })
    }
}   