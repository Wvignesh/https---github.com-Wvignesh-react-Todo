import React from 'react';
import './Todo.css';
import Popup from '../../popup/Popup';

function Todo(props) {

   const [edit, setEdit] = React.useState({
     index: null,
     text: ""
   })

    const update = (val) => {
   
       props.Edit(edit.index,val);
       setEdit({
         index:null,
         text:""
       })
    }

    const arr = [1, 2, 3, 4, 5, 6];

    const handleClick = ()=> {
      return ;
    }

    const todolist = props.todo.map((currentEle, index) => {

     return   <div key={index}>

            <li key={arr[0]++}>

              <span key={arr[3]++} onClick={currentEle.isComplete ? () => props.remove(index) : {handleClick}  } className={ currentEle.isComplete ? 'cross' : 'do'} > {currentEle.isComplete ? 'X' : '=>' } </span>

              <span key={arr[1]++} className={currentEle.isComplete? 'completetask' : 'duetask'}  onClick={() => props.isComplete(index)} >     {currentEle.text} </span> 

              <button className='edit' key={arr[4]++} onClick={ () => setEdit({ index:index, text:currentEle.text})}
              disabled= {
   
                 currentEle.isComplete ? true: false

              }  >Edit &#10000;</button>
              
              <hr key={arr[2]++}/>
              
              
               </li>

        </div>
    })
  return (
    < >
      <div>
          <center>
               <div className='Todo'>

             <ol className='ol'>

               {todolist}

             </ol>

               </div>
          </center>


          {
            edit.text ? ( <Popup edit={edit} update={update} />

            ) : null
          }
      </div>
    </>
  )
}

export default Todo
