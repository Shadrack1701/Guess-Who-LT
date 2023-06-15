import React from 'react';

const RoleCard = (props) => {
    const {role: {title, names, responsibilities}, selected, setSelected} = props;

    return (
        <div>
            {selected === title &&
                <p style={{margin: 0, color: 'green', textAlign: 'center', fontWeight: 'bold'}}>Select Again To Choose
                    As Answer</p>}
            <div style={{
                border: selected === title ? '2px solid green' : '1px solid black',
                padding: '.5rem',
                margin: '1rem',
                marginTop: 0,
                cursor: 'pointer'
            }}
                 onClick={() => setSelected(title)}
            >
                <p style={{fontWeight: 'bold', fontSize: '1.2rem', textAlign: 'center', margin: 0}}>{title}</p>
                <p style={{fontSize: '1.2rem', textAlign: 'center', margin: 0}}>{names}</p>
                {selected === title &&
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <p style={{margin: 0, textDecoration: 'underline'}}>Responsibilities: </p>
                        <div style={{textAlign: 'start'}}>
                            {responsibilities.map((r, idx) => <p key={`resp-${idx}`}
                                                                 style={{margin: 0, fontStyle: 'italic'}}>{r}</p>)}
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export {RoleCard};