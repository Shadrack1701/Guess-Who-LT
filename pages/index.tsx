import React from "react";
import {RoleCard} from "@/components/RoleCard";
import {Question} from "@/components/Question";
import "../app/globals.css";
import {shuffle} from "@/lib/utils";
import {Progress} from "@/components/Progress";
import {useCheckPreviousCompletion} from "@/lib/hooks/use-check-previous-completion";
import {Done} from "@/components/Done";

type Quiz = {
    question: string;
    correctAnswer: string;
};

type Role = {
    title: string;
    names: string;
    responsibilities: string[];
}

const QUIZ: Quiz[] = [
    {question: 'What does this person/group even do???', correctAnswer: '*'},
    {question: 'Who can I go to for hair/fashion advice?', correctAnswer: '*'},
    {question: 'Who do I go to, to have a laugh?', correctAnswer: '*'},
    {question: 'Who do I want to join my happy hour?', correctAnswer: '*'},
    {question: 'What does an engineering lead even do?', correctAnswer: 'CIO/Service Delivery'},
    {question: 'I have an idea for a new service offering', correctAnswer: 'CIO/Service Delivery'},
    {question: 'Tell me more about our Cloud Provider partnerships', correctAnswer: 'CIO/Service Delivery'},
    {question: "Who's ugly black mercedes is this?", correctAnswer: 'CIO/Service Delivery'},
    {question: 'Who is the head TDD priest of LT?', correctAnswer: 'CIO/Service Delivery'},
    {question: 'Technical conflict resolution', correctAnswer: 'Engineering Leadership'},
    {question: 'Need an expert resource for specific technology questions.', correctAnswer: 'Engineering Leadership'},
    {question: "Having issues on a project and the client isn't upset yet", correctAnswer: 'Engineering Leadership'},
    {question: 'Looking for client specific technology direction', correctAnswer: 'Engineering Leadership'},
    {question: 'I see a need for training (can be client specific)', correctAnswer: 'Engineering Leadership'},
    {question: 'What are other projects within LT that are available to me?', correctAnswer: 'Talent Acquisition'},
    {question: 'A friend of mine is looking for work', correctAnswer: 'Talent Acquisition'},
    {question: 'I want to attend a college job fair to promote LT', correctAnswer: 'Talent Acquisition'},
    {question: 'Current job openings', correctAnswer: 'Talent Acquisition'},
    {question: 'Does LT hire interns?', correctAnswer: 'Talent Acquisition'},
    {question: 'I want to play a game of pool', correctAnswer: 'CEO/Visionary'},
    {question: 'How much money is LT making?', correctAnswer: 'CEO/Visionary'},
    {
        question: "What should I do if I don't feel LT is a safe environment for employees?",
        correctAnswer: 'CEO/Visionary'
    },
    {question: 'I have a DEI idea/question', correctAnswer: 'CEO/Visionary'},
    {question: 'I want to hear an off color joke', correctAnswer: 'CEO/Visionary'},
    {question: 'Can I stay in one of your many vacation homes?', correctAnswer: 'CEO/Visionary'},
    {question: 'I have a lead at a potential client', correctAnswer: 'CGO/Integrator'},
    {question: 'I heard a company mention a digital transformation need', correctAnswer: 'CGO/Integrator'},
    {question: 'I heard about a company that is desperate for IT resources', correctAnswer: 'CGO/Integrator'},
    {question: 'What are our 2024 goals as a company?', correctAnswer: 'CGO/Integrator'},
    {question: 'Where do we want LT to be in 10 years?', correctAnswer: 'CGO/Integrator'},
    {question: 'I need someone to fill the silence in my meetings', correctAnswer: 'CGO/Integrator'},
    {
        question: 'My home situation has changed (baby, spouse etc), how do I update my benefits?',
        correctAnswer: 'Human Resources'
    },
    {question: "What is LT's Parental leave policy?", correctAnswer: 'Human Resources'},
    {question: 'I have some feedback for a co-worker I would like to formally give.', correctAnswer: 'Human Resources'},
    {question: 'Carlson said something offensive', correctAnswer: 'Human Resources'},
    {question: 'I am the only LT-er on my team, how do I get feedback?', correctAnswer: 'Human Resources'},
    {question: 'I need to put in my two weeks notice', correctAnswer: 'Human Resources'},
    {question: 'Are LT meetings mandatory?  How do I track that time?', correctAnswer: 'Human Resources'},
    {question: 'I just moved, how do I update my address?', correctAnswer: 'Human Resources'},
    {question: 'How do I access my benefits online?', correctAnswer: 'Human Resources'},
    {question: 'The dogs in the office are driving me crazy!', correctAnswer: 'Human Resources'},
    {question: 'How do I get to the next level of my career', correctAnswer: 'Human Resources'},
    {question: 'I would like a piece of equipment for my work/home office', correctAnswer: 'Facilities'},
    {question: "My laptop sounds like the Jetson's car...I may need a new one", correctAnswer: 'Facilities'},
    {question: 'The office is too hot, how do I turn it down?', correctAnswer: 'Facilities'},
    {question: 'Someone keeps missing the urinal...it is gross.  What can we do?', correctAnswer: 'Facilities'},
    {question: 'I am having issues with JumpCloud access', correctAnswer: 'Facilities'},
    {question: 'I need a Jetbrains (or other) license', correctAnswer: 'Facilities'},
    {question: 'I purchased dinner for a client, how do I get reimbursed for that?', correctAnswer: 'Finance'},
    {question: 'I took a trip for work, how do I get reimbursed?', correctAnswer: 'Finance'},
    {question: 'I have a question about my timesheet', correctAnswer: 'Finance'},
    {question: 'I got a new bank, how do I update my direct deposit.', correctAnswer: 'Finance'},
    {question: 'I need a copy of my paystubs, how do I do that?', correctAnswer: 'Finance'},
    {question: 'I need ot update my W4 withholdings', correctAnswer: 'Finance'},
    {question: 'How can I get reimbursed for trainings or books?', correctAnswer: 'Finance'},
    {question: 'Does LT have a branded presentation that I can use?', correctAnswer: 'Marketing'},
    {question: 'I have a blog idea but I would like help writing it', correctAnswer: 'Marketing'},
    {question: 'I have an idea for a viral marketing campaign', correctAnswer: 'Marketing'},
    {question: 'LT Underwear???', correctAnswer: 'Marketing'},
    {question: 'Where can I find LT branding documentation', correctAnswer: 'Marketing'},
    {question: 'Questions about an LT event (is it kid friendly etc)', correctAnswer: 'Marketing'},
    {question: 'Our team is looking for someone with a certain skill set', correctAnswer: 'Customer Success Managers'},
    {
        question: 'Problems with an upset client my team is having a hard time resolving',
        correctAnswer: 'Customer Success Managers'
    },
    {question: 'How do I know if I am doing a good job at my client?', correctAnswer: 'Customer Success Managers'},
    {question: 'I would like to change projects.  How do I do that?', correctAnswer: 'Customer Success Managers'},
    {question: 'What does being on the bench mean?', correctAnswer: 'Customer Success Managers'},
    {
        question: 'I am having trouble with one of my teammates, can you help?',
        correctAnswer: 'Customer Success Managers'
    },
    {question: 'How do I present at Lean Bytes?', correctAnswer: 'Director of Engineering'},
    {question: 'How do I get more active in the tech community?', correctAnswer: 'Director of Engineering'},
    {question: 'What tech should I be learning?', correctAnswer: 'Director of Engineering'},
    {question: 'What technical training is available to me?', correctAnswer: 'Director of Engineering'}
];

const ROLES: Role[] = [
    {
        title: 'CEO/Visionary',
        names: 'Brandon Carlson',
        responsibilities: ['Culture', 'Strategy', 'Market Research', 'Research and Development', 'Special Projects']
    },
    {
        title: 'CGO/Integrator',
        names: 'Danielle Brommer',
        responsibilities: ['Lead and Manage', 'Business Continuity', 'Profitability', 'Budget', 'Issue Management/Resolution']
    },
    {
        title: 'CIO/Service Delivery',
        names: 'Tim Gifford',
        responsibilities: ['Lead and Manage', 'Manage Service Delivery Offering', 'Identify/Implement Service "Best Practices"', 'Meet Client Demand', 'Elevate Client Experience', 'Elevate Team Member Experience']
    },
    {
        title: 'Director of Engineering',
        names: 'Scott Sauber',
        responsibilities: ['Identify and Educate on Technology "Best Practices"', 'Grow Others', 'Community Outreach', 'Technical Training', 'Technical Sales']
    },
    {
        title: 'Talent Acquisition',
        names: 'Emma Langston, Jason Buck',
        responsibilities: ['Recruiting Activities', 'Prospective Team Member Advocacy', 'Community Outreach', 'Market Research', 'Hire the Right People']
    },
    {
        title: 'Customer Success Managers',
        names: 'Grant Lang, Melissa Sporrer, Tim Kramer',
        responsibilities: ['Customer Satisfaction', 'Account Relationship/Growth', 'Team Member Satisfaction', 'Account Management Activities', 'Profitability Management', 'Conflict Resolution']
    },
    {
        title: 'Marketing',
        names: 'Nikki Cypser, Jaclyn Overton',
        responsibilities: ['Digital Marketing', 'Community Outreach', 'Creative', 'Grow Others', 'Event Coordination']
    },
    {
        title: 'Finance',
        names: 'Erin Fischer',
        responsibilities: ['Accounts Payable/Receivable', 'Payroll', 'Financial Reporting', 'Forecasting', 'Cash Management']
    },
    {
        title: 'Facilities',
        names: 'Jordyn Johnson',
        responsibilities: ['General Office Support', 'Security', 'Internal IT', 'Facilities Management', 'Vendor Management']
    },
    {
        title: 'Human Resources',
        names: 'Jordyn Johnson',
        responsibilities: ['Team Member Advocacy', 'Employment Lifecycle', 'Market Research', 'Compensation Strategy and Administration', 'Legal Compliance']
    },
    {
        title: 'Engineering Leadership',
        names: 'A. Steege, B. Oakley, M. Trachsel, J. Angolano, J. Graf, K, Sickora',
        responsibilities: ['Identify and Educate on Technology "Best Practices"', 'Grow Others', 'Community Outreach', 'Technical Training', 'Technical Sales']
    }
];

const Index = () => {
    const [questionIndex, setQuestionIndex] = React.useState<number>(0);
    const [selected, setSelected] = React.useState<string | null>(null);
    const [questions, setQuestions] = React.useState<any[]>([]);
    const [results, setResults] = React.useState<any[]>([]);
    const [done, setDone] = React.useState(false);
    const [finishedQuiz, isQuizFinished] = useCheckPreviousCompletion();

    React.useEffect(() => {
        setQuestions(shuffle(QUIZ));
    }, []);

    React.useEffect(() => {
        isQuizFinished && setDone(true);
    }, [isQuizFinished])

    const handleSelection = async (title) => {
        if (selected === title) {
            await handleSubmit(title);
            setSelected(null);
        } else setSelected(title);
    }

    const handleSubmit = async (role) => {
        const newResults = [...results];
        newResults.push({userQuestion: questions[questionIndex], givenAnswer: role.title})
        setResults(newResults);
        if (questionIndex === questions.length - 1) {
            setDone(true);
            await fetch("/api/quiz", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newResults),
            });
            // @ts-ignore
            finishedQuiz();
        }
        setQuestionIndex(questionIndex + 1);
    }

    return (
        <>
            {done ? <Done/> :
                <div>
                    <Question question={questions[questionIndex]?.question}/>
                    <div style={{marginTop: '5rem', paddingBottom: '1rem'}}>
                        {ROLES.map((r, idx) => {
                            return <RoleCard key={`roles-${idx}`} role={r} selected={selected}
                                             setSelected={handleSelection}/>;
                        })}
                    </div>
                    <Progress total={questions.length} current={questionIndex}/>
                </div>
            }
        </>
    );
}

export default Index;
export {ROLES, QUIZ};
export type {Role, Quiz}