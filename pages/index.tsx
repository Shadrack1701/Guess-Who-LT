import React, {FormEventHandler} from "react";

const QUIZ = [
    {question: 'Who would you go to when you want to play a game of pool?', answer: 'Brandon Carlson'},
    {question: 'Who would you go to when you have an HR issue?', answer: 'Jordyn Johnson'},
    {question: "How do I know if I'm doing a good job at my client?", answer: 'Jordyn Johnson'},
    {question: 'I am the only LT-er on my team, how do I get feedback?', answer: 'Jordyn Johnson'},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
];

const ROLES = [
    {
        title: 'Visionary',
        names: 'Brandon Carlson',
        responsibilities: ['Culture', 'Strategy', 'Market Research', 'Research and Development', 'Special Projects']
    },
    {
        title: 'Integrator',
        names: 'Danielle Brommer',
        responsibilities: ['Lead and Manage', 'Business Continuity', 'Profitability', 'Budget', 'Issue Management/Resolution']
    },
    {
        title: 'Service Delivery/Delivery Success',
        names: 'Tim Gifford',
        responsibilities: ['Lead and Manage', 'Manage Service Delivery Offering', 'Identify/Implement Service "Best Practices"', 'Meet Client Demand', 'Elevate Client Experience', 'Elevate Team Member Experience']
    },
    {
        title: 'Engineering Excellence',
        names: 'Scott Sauber',
        responsibilities: ['Identify and Educate on Technology "Best Practices"', 'Grow Others', 'Community Outreach', 'Technical Training', 'Technical Sales']
    },
    {
        title: 'Talent Acquisition & Employer Brand',
        names: 'Emma Langston, Jason Buck',
        responsibilities: ['Recruiting Activities', 'Prospective Team Member Advocacy', 'Community Outreach', 'Market Research', 'Hire the Right People', 'CI']
    },
    {
        title: 'Customer Success Management',
        names: 'Grant Lang, Melissa Sporrer, Tim Kramer',
        responsibilities: ['Customer Satisfaction', 'Account Relationship/Growth', 'Team Member Satisfaction', 'Account Management Activities', 'Profitability Management', 'Conflict Resolution', 'CI']
    },
    {
        title: 'Sales and Marketing',
        names: 'Danielle Brommer',
        responsibilities: ['Lead and Manage', 'Sales Goals', 'Sales/Marketing Strategy', 'Marketing Activities', 'Sales Activities']
    },
    {
        title: 'Marketing',
        names: 'Nikki Cypser, Jaclyn Overton',
        responsibilities: ['Digital Marketing', 'Community Outreach', 'Creative', 'Grow Others', 'Event Coordination', 'CI']
    },
    {
        title: 'Finance & Administration',
        names: 'Brandon Carlson',
        responsibilities: ['Lead and Manage', 'Financial Scorecard', 'HR Strategy', 'Facilities Management', 'Technology Management']
    },
    {
        title: 'Finance',
        names: 'Erin Fischer',
        responsibilities: ['Accounts Payable/Receivable', 'Payroll', 'Financial Reporting', 'Forecasting', 'Cash Management']
    },
    {title: 'Finance Admin', names: 'Amber Degenefe', responsibilities: ['Accounts Receivable']},
    {
        title: 'Facilities Manage',
        names: 'Jordyn Johnson',
        responsibilities: ['General Office Support', 'Security', 'Internal IT', 'Facilities Management', 'Vendor Management']
    },
    {
        title: 'Human Resources',
        names: 'Jordyn Johnson',
        responsibilities: ['Team Member Advocacy', 'Employment Lifecycle', 'Market Research', 'Compensation Strategy and Administration', 'Legal Compliance']
    },
    {
        title: 'Sales',
        names: 'TBD',
        responsibilities: ['Digital Marketing', 'Community Outreach', 'Competitive Analysis', 'Sales Activities', 'Sell!', 'CI']
    },
    {
        title: 'Engineering LeaderShip',
        names: 'A. Steege, B. Oakley, M. Trachsel, J. Angolano, J. Graf, K, Sickora',
        responsibilities: ['Identify and Educate on Technology "Best Practices"', 'Grow Others', 'Community Outreach', 'Technical Training', 'Technical Sales']
    }
];

const Index = () => {
    const [questionIndex, setQuestionIndex] = React.useState<number>(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        setQuestionIndex(questionIndex + 1);
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{QUIZ[questionIndex].question}</p>
            <button type={"submit"}>Submit Answer</button>
        </form>
    );
}

export default Index;