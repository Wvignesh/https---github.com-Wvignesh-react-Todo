import React,{useState} from 'react';
import Todo from './Todo/Todo';
import AddTask from './../AddTask/AddTask';

function TodoList() {
  
    const [todos, setTodos] = useState([]);

    const Addtodo = (todo) => {

        if(!todo.text){
            return ;
        } 
         const newtodo = [...todos, todo];
       
         setTodos(newtodo)
    }

    const isComplete = (index) => {

 const updateList = [...todos];

 updateList[index].isComplete =! updateList[index].isComplete;
 setTodos(updateList);

    }

    const remove = (index) => {

        const filterArr = [...todos];

        filterArr.splice(index,1);
        setTodos(filterArr)

    }


    const Edit = (index, newval ) => {

      if(!newval){

        return ;
      }

       const updateList =[...todos];
       updateList[index].text =newval;
       setTodos(updateList)

  }


  return (
    <div className=' Todo-List'>
      <AddTask submit={Addtodo} />
      <Todo todo={todos} isComplete={isComplete} remove = {remove} Edit={Edit} />
    </div>
  )
}

export default TodoList
