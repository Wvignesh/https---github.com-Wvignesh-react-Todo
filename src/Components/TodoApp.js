import React from 'react';
import TodoList from './TodoList';

function TodoApp() {
   
    let dateObj = new Date();

    let days = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

    let date = dateObj.getDate();
    let month = months[dateObj.getMonth()];
    let day = days[dateObj.getDay()];
    

  return (
    < >
      <div className='Todo-App'>

      <h1> Today <span> {day} {date} {month} </span>   </h1>

      <TodoList />

      </div>
    </>
  )
}

export default TodoApp;
