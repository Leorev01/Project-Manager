import React from 'react';

export default function Sidebar({projectHandler, projects, handleProjectSelection}){

    return(
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h1>
        <div>
            <button onClick={projectHandler} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">Add Project</button>
        </div>
        <ul className="mt-8">
            {!projects? null : projects.map(project => (
                <li onClick={() =>handleProjectSelection(project)} key={project.id}>{project.title}</li>
            ))}
        </ul>
    </aside>)
}