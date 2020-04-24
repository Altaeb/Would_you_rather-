export const GET_QUESTIONS = "GET_QUESTIONS";

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions
  };
}