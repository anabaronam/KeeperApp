import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

//To create expansion
//It starts as false bc it is not yet expanded

const [isExpandend, setIsExpanded] = useState(false);

const [note, setNote] = useState({
    title: "",
    content: ""
});

function handleChange(event) {
    const {name,value} = event.target;
    

    setNote(prevNote => {
    return {
        ...prevNote,
    [name]: value
    }
    });
}

function submitNote(event){
    props.onAdd(note);
    setNote({
        title:"",
        content:""
    });
    event.preventDefault();
}

function expand (){
    setIsExpanded(true);
}

  return (
    <div>
      <form className="create-note">
        
        {isExpandend && (<input name="title" placeholder="Title" onChange={handleChange} value={note.title} />
    )}
        <textarea 
        name="content" 
        onClick={expand}
        value={note.content} 
        onChange={handleChange} 
        placeholder="Take a note..." 
        rows= {isExpandend ? 3 : 1} />
        <Zoom in={isExpandend}>
        <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;