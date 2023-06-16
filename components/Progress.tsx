import React from 'react';

const Progress = (props) => {
    const {total, current} = props;
    return (
        <div className={'fixed bottom-0 left-0 w-screen h-4 bg-white'}>
            <div
                className="flex flex-col items-start justify-center w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                <div className="bg-blue-600 h-4 rounded-full" style={{width: `${current / total * 100}%`}}></div>
            </div>
        </div>
    );
};

export {Progress};