import React,{useState} from 'react';
import './AddTask.css'

function AddTask(props) {

   const [input, setInput] = useState("")

 const handleSubmit = (e) => {

  e.preventDefault();
   
  props.submit({
      text:input,
      isComplete:false
  })
 
  setInput('')

 }


 const handleChange = (e) => {

    setInput(e.target.value);
    
 }




  return (
    <div className='Add-Task'>
       
    <center>

    <form onSubmit={handleSubmit}>
   
   <input type="text" placeholder='Add Task e.g , class at 10.00 AM ' onChange={handleChange} value={input} />
   <input type="submit" value='+'  />

   </form>

    </center>

    </div>
  )
}

export default AddTask
