import { getInitialData } from "../reducers/dataAPI";
import { getUsers } from "../actions/users";
import { getQuestions } from "../actions/questions";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
    });
  };
}