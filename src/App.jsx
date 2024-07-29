import React from 'react';
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import AddProject from './components/AddProject';
import Project from './components/Project';
import Modal from './components/Modal';

function App() {

  const modalRef = React.useRef();
  const [title,setTitle]= React.useState("");
  const [text, setText]= React.useState("");

  const [clicked, setClicked] = React.useState(false);
  const [selectedProject, setProjectSelected] = React.useState();
  const [projects, setProjects] = React.useState([]);

  function addProject(projectTitle, projectDescription, projectDate) {
    setProjects(prevProjects =>
    [...prevProjects,{
      id: prevProjects.length + 1,
      title: projectTitle,
      description: projectDescription,
      date: projectDate,
      tasks:[]
    }]
    );
  }

  function handleButtonClick(){
    setClicked(prevClicked => !prevClicked);
  }

  function handleDeleteProject(project){
    setProjects(prevProjects => 
      prevProjects.filter(p => p.id !== project.id)
    )
    setProjectSelected(null);
    setTitle("Project Deleted");
    setText(`The project ${project.title} has been deleted`);
    modalRef.current.open();
  }

  function handleSelectProject(project){
    setClicked(false);
    setProjectSelected(project);
  }

  function updateProjectTasks(projectId, newTaskList) {
    setProjects(prevProjects => 
      prevProjects.map(p => 
        p.id === projectId ? { ...p, tasks: newTaskList } : p
      )
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Modal ref={modalRef} title={title} text={text} />
      <Sidebar
        projectHandler={handleButtonClick}
        projects={projects}
        handleProjectSelection={handleSelectProject}
      />
      {selectedProject && !clicked ? (
        <Project project={selectedProject} deleteHandler={handleDeleteProject} updateTasks={updateProjectTasks}/>
      ) : (
        clicked ? (
          <AddProject addProject={addProject} projectHandler={handleButtonClick} />
        ) : (
          <Content projectHandler={handleButtonClick} />
        )
      )}
    </main>
  );
}

export default App;
