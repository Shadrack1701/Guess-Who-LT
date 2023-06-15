import {setCookie, getCookie} from 'cookies-next';

const useCheckPreviousCompletion = () => {
    const finishedQuiz = () => setCookie('quizDone', true);
    const isQuizFinished = getCookie('quizDone');

    return [finishedQuiz, isQuizFinished];
};

export {useCheckPreviousCompletion};