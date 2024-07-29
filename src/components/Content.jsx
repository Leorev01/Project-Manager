import React from 'react';
import Image from "../assets/no-projects.png";

export default function Content({project, projectHandler}){
    return (
        <div className="m-auto mt-20">
            {!project ? (
                <div className="w-[35rem] mt-16 flex items-center flex-col gap-4">
                    <img className="w-16 h-16 object-contain mx-auto" src={Image} alt="No Project" />
                    <h1 className='text-xl font-bold'>No Project Selected</h1>
                    <p>Select a project or get started with a new one</p>
                    <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={projectHandler}>Create new project</button>
                </div>
            ) : (
                <p>Hello</p>
            )}
        </div>
    );

}