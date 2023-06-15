"use client";

import useScroll from "@/lib/hooks/use-scroll";
import React from "react";

const Nav = ({question}: { question: string }) => {
    const scrolled = useScroll(15);

    return (
        <>
            <div
                className={`fixed top-0 w-full ${
                    scrolled
                        ? "border-b border-gray-200 bg-gray-200 backdrop-blur-xl"
                        : "bg-white/0"
                } z-30 transition-all`}
            >
                <p style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    padding: '.5rem'
                }}>{question}</p>
            </div>
        </>
    );
}

export {Nav};