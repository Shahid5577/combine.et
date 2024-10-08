import { useState } from "react";
import BackEnd from "../TechPages/backend";
import Frontend from "../TechPages/frontend";
import Database from '../TechPages/database';
import CloudDev from "../TechPages/clouddev";
import Mobile from '../TechPages/mobile';
import Testing from '../TechPages/testing';
import Others from '../TechPages/others';

function Tools() {
    const [activeContent, setActiveContent] = useState<string>('content1');
    
    const handleButtonClick = (content: string) => {
        setActiveContent(content);
    };

    return (
        <div className="mt-8 sm:mt-24 p-4 w-full flex flex-col gap-8">
            <div className="w-full justify-center items-center text-center flex flex-col gap-6">
                <h1 className="text-sm sm:text-3xl text-bold dark:text-zinc-300 text-zinc-700">
                    THE TECHNOLOGIES WE WORK WITH
                </h1>
                <p className="text-[10px] sm:text-sm text-center text-zinc-500">
                    We utilise leading digital technologies in the delivery of high-quality online solutions that are fit-for-purpose and help you stand out in increasingly saturated markets.
                </p>
            </div>
            <div className="flex sm:flex-row flex-wrap justify-center gap-4">
                <button
                    onClick={() => handleButtonClick('content1')}
                    className={`${
                        activeContent === 'content1'
                            ? 'text-blue-500 border-b border-blue-500'
                            : 'text-zinc-500'
                    } font-bold text-[8px] md:text-[14px] py-1 md:py-2 px-2 md:px-4 rounded`}
                >
                    Backend
                </button>
                <button
                    onClick={() => handleButtonClick('content2')}
                    className={`${
                        activeContent === 'content2'
                            ? 'text-blue-500 border-b border-blue-500'
                            : 'text-zinc-500'
                    } font-bold text-[8px] md:text-[14px] py-1 md:py-2 px-2 md:px-4 rounded`}
                >
                    Frontend
                </button>
                <button
                    onClick={() => handleButtonClick('content3')}
                    className={`${
                        activeContent === 'content3'
                            ? 'text-blue-500 border-b border-blue-500'
                            : 'text-zinc-500'
                    } font-bold text-[8px] md:text-[14px] py-1 md:py-2 px-2 md:px-4 rounded`}
                >
                    Database
                </button>
                <button
                    onClick={() => handleButtonClick('content4')}
                    className={`${
                        activeContent === 'content4'
                            ? 'text-blue-500 border-b border-blue-500'
                            : 'text-zinc-500'
                    } font-bold text-[8px] md:text-[14px] py-1 md:py-2 px-2 md:px-4 rounded`}
                >
                    Cloud & DevOps
                </button>
                <button
                    onClick={() => handleButtonClick('content5')}
                    className={`${
                        activeContent === 'content5'
                            ? 'text-blue-500 border-b border-blue-500'
                            : 'text-zinc-500'
                    } font-bold text-[8px] md:text-[14px] py-1 md:py-2 px-2 md:px-4 rounded`}
                >
                    Mobile
                </button>
                <button
                    onClick={() => handleButtonClick('content6')}
                    className={`${
                        activeContent === 'content6'
                            ? 'text-blue-500 border-b border-blue-500'
                            : 'text-zinc-500'
                    } font-bold text-[8px] md:text-[14px] py-1 md:py-2 px-2 md:px-4 rounded`}
                >
                    Testing
                </button>
                <button
                    onClick={() => handleButtonClick('content7')}
                    className={`${
                        activeContent === 'content7'
                            ? 'text-blue-500 border-b border-blue-500'
                            : 'text-zinc-500'
                    } font-bold text-[8px] md:text-[14px] py-1 md:py-2 px-2 md:px-4 rounded`}
                >
                    Others
                </button>
            </div>
            <div className="p-4">
                {activeContent === 'content1' && <div><BackEnd/></div>}
                {activeContent === 'content2' && <div><Frontend/></div>}
                {activeContent === 'content3' && <div><Database/></div>}
                {activeContent === 'content4' && <div><CloudDev/></div>}
                {activeContent === 'content5' && <div><Mobile/></div>}
                {activeContent === 'content6' && <div><Testing/></div>}
                {activeContent === 'content7' && <div><Others/></div>}
            </div>
        </div>
    );
}

export default Tools;
