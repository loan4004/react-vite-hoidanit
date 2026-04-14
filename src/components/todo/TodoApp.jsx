import './todo.css';
import TodoData from './TodoData';
import TodoNew from './TodoNew';
import reactLogo from '../../assets/react.svg';
import { useState } from 'react';

const TodoApp = () => {
    const [todoList, setTodoList] = useState([
        // { id: 1, name: "Learning React" },
        // { id: 2, name: "Watching Youtube" }
    ])

    const addNewTodo = (name) => {
        const newTodo = {
            id: randomIntFromInterval(1, 1000000),
            name: name
        }
        setTodoList([...todoList, newTodo])

        //array.push

    }

    const randomIntFromInterval = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    const deleteTodo = (id) => {
        const newTodo = todoList.filter(item => item.id !== id)
        setTodoList(newTodo);
        // console.log(">>>check newTodo: ", newTodo)

        // console.log(">>> check id : ", id)
    }

    return (
        <div className="todo-container">
            <div className="todo-title"> Todo List</div>
            <TodoNew
                addNewTodo={addNewTodo}
            />

            {todoList.length > 0 ?
                <TodoData
                    deleteTodo={deleteTodo}
                    todoList={todoList}
                />

                :

                <div className='todo-image'>
                    <img src={reactLogo} className='logo' />
                </div>
            }


            {/* {todoList.length > 0 &&
        <TodoData
          todoList={todoList}
        />
      }

      {todoList.length === 0 &&   // toans tuwr ddieuf kienj
        <div className='todo-image'>
          <img src={reactLogo} className='logo' />
        </div>
      } */}
        </div>
    )
}

export default TodoApp;