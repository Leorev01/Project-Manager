import React from 'react';

export default function Project({project, deleteHandler}){

    const [updated, setUpdated] = React.useState(false);
    const [taskInput, setTaskInput] = React.useState('');

    function addTask(task){
        project.tasks.push(task);
        setTaskInput('');
        setUpdated(prevUpdated => !prevUpdated);
    }
    
    function removeTask(task, index){
        project.tasks.splice(index, 1);
        setUpdated(prevUpdated => !prevUpdated);
    }

    function handleChange(event){
        const value = event.target.value;
        setTaskInput(value);
    }

    return(
        <section className="w-[35rem] mt-16 m-auto">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                <button onClick={() => deleteHandler(project)}>Delete</button>    
            </div>
            <div>
                <p className="mb-4 text-stone-400">{project.date}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </div>
            <div className="flex items-center justify-between mt-5">
                <h2 className="text-2xl font-bold text-stone-700">Tasks</h2>
                <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" name="input" value={taskInput} onChange={handleChange}></input> 
                <button className="text-stone-600 hover:text-stone-950" onClick={() => addTask(taskInput)}>Add Task</button>
            </div>
            <ul className="flex flex-col p-4 mt-8 rounded-md bg-stone-100 gap-10">
                {project.tasks.map((task, index) => (
                    <div className="flex flex-row items-center justify-between w-[35rem]">
                        <li key={index}>{task}</li>                            <button className="text-stone-700 hover:text-red-500" onClick={() => removeTask(task, index)}>Clear</button>
                    </div>
                ))}
            </ul>
        </section>
    )
}