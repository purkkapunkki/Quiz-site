import * as questionService from "../../services/questionService.js";
import * as answerOptionService from "../../services/answerOptionService.js";

const getRandomQuestion = async ({ response }) => {
  const question = await questionService.getRandomQuestion();
  let body;
  if (question) {
    const answerOptions = await answerOptionService.getAnswerOptions(question.id);
    body = {
      "questionId": question.id,
      "questionText": question.question_text,
      "answerOptions": answerOptions,
    };
  } else {
    body = {};
  }
  response.body = body;
};

const checkAnswer = async ({ request, response }) => {
  const body = request.body({ type: "json" });
  const document = await body.value;

  const answer = await answerOptionService.getAnswerOption(document.optionId, document.questionId);

  response.body = { correct: answer.is_correct };
};

export { getRandomQuestion, checkAnswer };