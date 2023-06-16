import React from "react";
import {QUIZ, Role, ROLES} from "@/pages/index";
import '../app/globals.css';

type AnswerResponse = {
    id: string;
    answers: Answer[];
};

type Question = {
    question: string;
    correctAnswer: string;
};

type Answer = {
    userQuestion: Question;
    givenAnswer: string;
};

type WrongRole = {
    role: Role;
    guessWrong: number;
};

type WrongQuestion = {
    question: Question;
    guessWrong: number;
}

type GroupedQuestion = {
    question: Question
    correctRole: Role;
    correctAnswers: number;
    wrongAnswers: number;
    wrongRoles: WrongRole[];
};

type GroupedRole = {
    role: Role;
    correctAnswers: number;
    wrongAnswers: number;
    correctQuestions: Question[];
}

const groupByQuestion = (answer: Answer, tempGQS: GroupedQuestion[], correct: boolean, correctRole: Role, answeredRole: Role) => {
    const groupedQuestion = tempGQS.find(gp => gp.question.question === answer.userQuestion.question);
    if (groupedQuestion) {
        if (correct) {
            groupedQuestion.correctAnswers = groupedQuestion.correctAnswers + 1;
        } else {
            groupedQuestion.wrongAnswers = groupedQuestion.wrongAnswers + 1;
            const wrongRole = groupedQuestion.wrongRoles.find(wr => wr.role.title === answeredRole?.title);
            if (wrongRole) {
                wrongRole.guessWrong = wrongRole.guessWrong + 1;
            } else {
                groupedQuestion.wrongRoles.push({role: answeredRole, guessWrong: 1} as WrongRole);
            }
        }

    } else {
        const wrongRoles: WrongRole[] = correct ? [] : [{role: answeredRole, guessWrong: 1} as WrongRole];
        tempGQS.push({
            question: answer.userQuestion,
            correctRole: correctRole,
            correctAnswers: correct ? 1 : 0,
            wrongAnswers: correct ? 0 : 1,
            wrongRoles
        })
    }
};

const groupByRole = (answer: Answer, tempGRS: GroupedRole[], correct: boolean, correctRole: Role, answeredRole: Role) => {
    if (answer.userQuestion.correctAnswer === '*') return;
    const groupedRole = tempGRS.find(gp => {
        return gp.role.title === answer.userQuestion.correctAnswer
    });
    if (groupedRole) {
        if (correct) {
            groupedRole.correctAnswers = groupedRole.correctAnswers + 1;
        } else {
            groupedRole.wrongAnswers = groupedRole.wrongAnswers + 1;
        }

    } else {
        tempGRS.push({
            role: correctRole,
            correctAnswers: correct ? 1 : 0,
            wrongAnswers: correct ? 0 : 1,
            correctQuestions: QUIZ.filter(q => q.correctAnswer === correctRole?.title)
        })
    }
};

const QuizReportingSuperSecret = () => {
    const [answers, setAnswers] = React.useState<AnswerResponse[]>([]);
    const [groupedQuestions, setGroupedQuestions] = React.useState<GroupedQuestion[]>([]);
    const [groupedRoles, setGroupedRoles] = React.useState<GroupedRole[]>([]);
    const [display, setDisplay] = React.useState<string | null>(null);

    React.useEffect(() => {
        answers.length === 0 ?
            fetch("/api/quiz", {method: "GET"})
                .then(response => response
                    .json().then((data: any[]) => {
                        const parsedResponse: AnswerResponse[] = data.map(r => {
                            return {
                                id: r.id,
                                answers: JSON.parse(r.answers)
                            }
                        })
                        setAnswers(parsedResponse)
                    }))
                .catch(err => console.log(JSON.stringify(err, null, 2)))
            : groupedQuestions.length === 0 && groupShiz();
    }, [answers]);

    const groupShiz = () => {
        let answerResponse: AnswerResponse;
        let answer: Answer;
        let tempGQS = [...groupedQuestions];
        let tempGRS = [...groupedRoles];
        for (answerResponse of answers) {
            for (answer of answerResponse.answers) {
                const correct = answer.userQuestion.correctAnswer === answer.givenAnswer;
                const correctRole = ROLES.find(r => {
                    return r.title === answer.userQuestion.correctAnswer
                });
                const answeredRole = ROLES.find(r => {
                    return r.title === answer.givenAnswer
                });
                groupByQuestion(answer, tempGQS, correct, correctRole as Role, answeredRole as Role);
                groupByRole(answer, tempGRS, correct, correctRole as Role, answeredRole as Role);
            }
        }
        setGroupedQuestions(tempGQS);
        setGroupedRoles(tempGRS);
    }

    const handleClick = (choice: string) => {
        if (display === choice) {
            setDisplay(null);
        } else setDisplay(choice);
    };

    return (
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                paddingBottom: '1rem',
                paddingTop: '1rem'
            }}>
                <button
                    style={{
                        color: 'white',
                        paddingLeft: '1rem',
                        paddingRight: '1rem',
                        paddingTop: '.5rem',
                        paddingBottom: '.5rem',
                        fontWeight: 'bold',
                        borderRadius: '.25rem',
                        backgroundColor: 'blue'
                    }}
                    onClick={() => handleClick('role')}>Results by Role
                </button>
                <button
                    style={{
                        color: 'white',
                        paddingLeft: '1rem',
                        paddingRight: '1rem',
                        paddingTop: '.5rem',
                        paddingBottom: '.5rem',
                        fontWeight: 'bold',
                        borderRadius: '.25rem',
                        backgroundColor: 'blue'
                    }}
                    onClick={() => handleClick('question')}>Results by Question
                </button>
            </div>
            {
                display === 'role' &&
                <p>{JSON.stringify(groupedRoles)} </p>
            }
            {
                display === 'question' &&
                <p>{JSON.stringify(groupedQuestions)}</p>
            }
        </div>
    );
}

export default QuizReportingSuperSecret;
export type {AnswerResponse}