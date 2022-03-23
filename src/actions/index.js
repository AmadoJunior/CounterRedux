import axios from "axios";

export const increment = (num) => {
    return {
        type: "INCREMENT",
        payload: num
    }
}

export const decrement = (num) => {
    return {
        type: "DECREMENT",
        payload: num
    }
}

export const asyncIncrement = (num) => {
    return async (dispatch, getState) => {
        const response = await axios.get("https://catfact.ninja/fact");
        console.warn(response.status);
        dispatch(increment(response.status));
    }
}