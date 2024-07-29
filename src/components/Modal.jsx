import ReactDOM from "react-dom";
import React from "react";

const Modal =  React.forwardRef(function Modal({title, text}, ref){

    const modalRef= React.useRef();

    React.useImperativeHandle(ref, ()=>{
        return{
            open(){
                modalRef.current.showModal();
            },
        }
    })

    return ReactDOM.createPortal(
        <dialog ref={modalRef}>
            <form method="dialog" className="flex flex-col px-3 border-black border-2 w-[25rem]">
                <h1>{title}</h1>
                <p>{text}</p>
                <button>Close</button>
            </form>
        </dialog>
        , document.getElementById('modal-root')
    );
})

export default Modal;