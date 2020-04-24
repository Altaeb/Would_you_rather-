import { getInitialData } from "../reducers/dataAPI";
import { getUsers } from "../actions/users";
import { getQuestions } from "../actions/questions";
import { showLoading, hideLoading } from "react-redux-loading";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
      dispatch(showLoading());
    });
  };
}