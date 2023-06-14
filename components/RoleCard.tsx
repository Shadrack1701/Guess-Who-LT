import React from 'react';

const RoleCard = (props) => {
    const {role: {title, names, responsibilities}, selected, setSelected} = props;

    return (
        <div>
            <div style={{
                border: '1px solid black',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '.5rem',
                margin: '1rem',
                cursor: 'pointer'
            }}
                 onClick={() => setSelected(title)}
            >
                <p style={{fontWeight: 'bold', fontSize: '1.2rem', textAlign: 'center', margin: 0}}>{title}</p>
                <p style={{fontSize: '1.2rem', textAlign: 'center', margin: 0}}>{names}</p>
                {selected === title &&
                    <div style={{textAlign: 'start'}}>
                        {responsibilities.map((r, idx) => <p key={`resp-${idx}`} style={{margin: 0}}>{r}</p>)}
                    </div>
                }
            </div>
        </div>
    );
};

export {RoleCard};