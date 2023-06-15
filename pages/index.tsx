import React from "react";
import {RoleCard} from "@/components/RoleCard";
import {Nav} from "@/components/Nav";
import "../app/globals.css";
import {shuffle} from "@/lib/utils";

const QUIZ = [
    {question: 'What does this person/group even do???', answer: '*'},
    {question: 'Who can I go to for hair/fashion advice?', answer: '*'},
    {question: 'Who do I go to, to have a laugh?', answer: '*'},
    {question: 'Who do I want to join my happy hour?', answer: '*'},
    {question: 'What does an engineering lead even do?', answer: 'CIO/Service Delivery'},
    {question: 'I have an idea for a new service offering', answer: 'CIO/Service Delivery'},
    {question: 'Tell me more about our Cloud Provider partnerships', answer: 'CIO/Service Delivery'},
    {question: "Who's ugly black mercedes is this?", answer: 'CIO/Service Delivery'},
    {question: 'Who is the head TDD priest of LT?', answer: 'CIO/Service Delivery'},
    {question: 'Technical conflict resolution', answer: 'Engineering Leadership'},
    {question: 'Need an expert resource for specific technology questions.', answer: 'Engineering Leadership'},
    {question: "Having issues on a project and the client isn't upset yet", answer: 'Engineering Leadership'},
    {question: 'Looking for client specific technology direction', answer: 'Engineering Leadership'},
    {question: 'I see a need for training (can be client specific)', answer: 'Engineering Leadership'},
    {question: 'What are other projects within LT that are available to me?', answer: 'Talent Acquisition'},
    {question: 'A friend of mine is looking for work', answer: 'Talent Acquisition'},
    {question: 'I want to attend a college job fair to promote LT', answer: 'Talent Acquisition'},
    {question: 'Current job openings', answer: 'Talent Acquisition'},
    {question: 'Does LT hire interns?', answer: 'Talent Acquisition'},
    {question: 'I want to play a game of pool', answer: 'CEO/Visionary'},
    {question: 'How much money is LT making?', answer: 'CEO/Visionary'},
    {question: "What should I do if I don't feel LT is a safe environment for employees?", answer: 'CEO/Visionary'},
    {question: 'I have a DEI idea/question', answer: 'CEO/Visionary'},
    {question: 'I want to hear an off color joke', answer: 'CEO/Visionary'},
    {question: 'Can I stay in one of your many vacation homes?', answer: 'CEO/Visionary'},
    {question: 'I have a lead at a potential client', answer: 'CGO/Integrator'},
    {question: 'I heard a company mention a digital transformation need', answer: 'CGO/Integrator'},
    {question: 'I heard about a company that is desperate for IT resources', answer: 'CGO/Integrator'},
    {question: 'What are our 2024 goals as a company?', answer: 'CGO/Integrator'},
    {question: 'Where do we want LT to be in 10 years?', answer: 'CGO/Integrator'},
    {question: 'I need someone to fill the silence in my meetings', answer: 'CGO/Integrator'},
    {
        question: 'My home situation has changed (baby, spouse etc), how do I update my benefits?',
        answer: 'Human Resources'
    },
    {question: "What is LT's Parental leave policy?", answer: 'Human Resources'},
    {question: 'I have some feedback for a co-worker I would like to formally give.', answer: 'Human Resources'},
    {question: 'Carlson said something offensive', answer: 'Human Resources'},
    {question: 'I am the only LT-er on my team, how do I get feedback?', answer: 'Human Resources'},
    {question: 'I need to put in my two weeks notice', answer: 'Human Resources'},
    {question: 'Are LT meetings mandatory?  How do I track that time?', answer: 'Human Resources'},
    {question: 'I just moved, how do I update my address?', answer: 'Human Resources'},
    {question: 'How do I access my benefits online?', answer: 'Human Resources'},
    {question: 'The dogs in the office are driving me crazy!', answer: 'Human Resources'},
    {question: 'How do I get to the next level of my career', answer: 'Human Resources'},
    {question: 'I would like a piece of equipment for my work/home office', answer: 'Facilities'},
    {question: "My laptop sounds like the Jetson's car...I may need a new one", answer: 'Facilities'},
    {question: 'The office is too hot, how do I turn it down?', answer: 'Facilities'},
    {question: 'Someone keeps missing the urinal...it is gross.  What can we do?', answer: 'Facilities'},
    {question: 'I am having issues with JumpCloud access', answer: 'Facilities'},
    {question: 'I need a Jetbrains (or other) license', answer: 'Facilities'},
    {question: 'I purchased dinner for a client, how do I get reimbursed for that?', answer: 'Finance'},
    {question: 'I took a trip for work, how do I get reimbursed?', answer: 'Finance'},
    {question: 'I have a question about my timesheet', answer: 'Finance'},
    {question: 'I got a new bank, how do I update my direct deposit.', answer: 'Finance'},
    {question: 'I need a copy of my paystubs, how do I do that?', answer: 'Finance'},
    {question: 'I need ot update my W4 withholdings', answer: 'Finance'},
    {question: 'How can I get reimbursed for trainings or books?', answer: 'Finance'},
    {question: 'Does LT have a branded presentation that I can use?', answer: 'Marketing'},
    {question: 'I have a blog idea but I would like help writing it', answer: 'Marketing'},
    {question: 'I have an idea for a viral marketing campaign', answer: 'Marketing'},
    {question: 'LT Underwear???', answer: 'Marketing'},
    {question: 'Where can I find LT branding documentation', answer: 'Marketing'},
    {question: 'Questions about an LT event (is it kid friendly etc)', answer: 'Marketing'},
    {question: 'Our team is looking for someone with a certain skill set', answer: 'Customer Success Managers'},
    {
        question: 'Problems with an upset client my team is having a hard time resolving',
        answer: 'Customer Success Managers'
    },
    {question: 'How do I know if I am doing a good job at my client?', answer: 'Customer Success Managers'},
    {question: 'I would like to change projects.  How do I do that?', answer: 'Customer Success Managers'},
    {question: 'What does being on the bench mean?', answer: 'Customer Success Manager'},
    {question: 'I am having trouble with one of my teammates, can you help?', answer: 'Customer Success Manager'},
    {question: 'How do I present at Lean Bytes?', answer: 'Director of Engineering'},
    {question: 'How do I get more active in the tech community?', answer: 'Director of Engineering'},
    {question: 'What tech should I be learning?', answer: 'Director of Engineering'},
    {question: 'What technical training is available to me?', answer: 'Director of Engineering'}
];

const ROLES = [
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

    React.useEffect(() => {
        setQuestions(shuffle(QUIZ));
    }, []);

    const handleSelection = (title) => {
        if (selected === title) {
            handleSubmit(title);
            setSelected(null);
        } else setSelected(title);
    }

    const handleSubmit = (title) => {
        console.log('make an api call here - ' + title);
        setQuestionIndex(questionIndex + 1);
    }

    return (
        <div>
            <Nav question={questions[questionIndex]?.question}/>
            <div style={{marginTop: '5rem'}}>
                {ROLES.map((r, idx) => {
                    return <RoleCard key={`roles-${idx}`} role={r} selected={selected} setSelected={handleSelection}/>;
                })}
            </div>
        </div>
    );
}

export default Index;