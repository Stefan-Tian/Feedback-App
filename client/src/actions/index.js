import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
}; // we only want to dispatch this function when the axios.get() is finished

// when there's only one expression in an arrow function,
// we can lose the curly braces and the return statement.

// we can set the fetchUser to be a function because of the
// the reduxThunk.

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};
