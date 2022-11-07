import React from 'react';

const ToDoList = ({todos, setTodos, setEditTodo }) => {
    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo)=> todo.id !== id));
    };

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item)=>{
                if(item.id === todo.id) {
                    return{...item, completed: !item.completed}
                }
                return item;
            })
        );
    };

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id ===id);
        setEditTodo(findTodo);
    };

    return(
        <div>
            {todos.map((todo)=> (
                <li className='list-item' key={todo.id}>
                    <input
                    type="text"
                    value={todo.title}
                    className={`list ${todo.completed ? "complete" : ""}`}
                    onChange={(e)=> e.preventDefault()}
                />
                    <div>
                        <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
                            <i class="fa-regular fa-circle-check"></i>
                        </button>
                        <button 
                        className="button-edit task-button" 
                        onClick={() => handleEdit(todo)}>
                            <i class="fa-regular fa-pen-to-square"></i>
                        </button>
                        <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
};

export default ToDoList;