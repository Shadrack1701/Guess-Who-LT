import React from 'react';
import Image from 'next/image'
import useWindowSize from "@/lib/hooks/use-window-size";

const Done = () => {
    const {windowSize} = useWindowSize();
    const textPos = Math.round((windowSize.width || 100) / 2)// - (windowSize.height || 100) / 6);

    return (
        <div>
            <p style={{top: textPos}}
               className={`w-full fixed text-4xl text-white text-center text-border`}
            >
                Thank you for taking the quiz!
            </p>
            <Image alt="Auth.js logo"
                   src="/Guess-Who.jpg"
                   width={windowSize.width || 100}
                   height={windowSize.width || 100}
            />
        </div>
    );
};

export {Done};