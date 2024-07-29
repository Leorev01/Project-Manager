import React from 'react';
import Modal from './Modal';

export default function AddProject({addProject, projectHandler}){

    const modalRef= React.useRef();

    const[formValues, setFormValues] = React.useState({
        title: '',
        description: '',
        date: ''
    });

    function handleChange(event){
        const {name, value} = event.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault();
        {if(formValues.title.trim() === '' || formValues.description.trim() === '' || formValues.date.trim() === ''){ modalRef.current.open() 
        } else{
            addProject(formValues.title, formValues.description, formValues.date);
            projectHandler();
        }};
    }

    return(
        <>
            <Modal ref={modalRef} title={"Error"} text="All fields are required" />
            <div className=' m-auto mt-20'>
                <div className='text-center w-[35rem]'>
                    <form id='projectForm' className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
                        <h3>Title</h3>
                        <input type='text' name="title" onChange={handleChange} className="py-1 rounded-sm bg-stone-200"></input>
                        <h3>Description</h3>
                        <input type="text" name="description" onChange={handleChange} className=" py-1 rounded-sm bg-stone-200"></input>
                        <h3>Due Date</h3>
                        <input type="date" name="date" onChange={handleChange} className="py-1 rounded-sm bg-stone-200"></input>
                        <div className='flex justify-between mt-4'>
                            <button type="button" onClick={projectHandler}>Cancel</button>
                            <button className='bg-black text-white p-2 rounded-md' type="submit">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}