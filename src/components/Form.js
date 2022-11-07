import React, { useEffect, useState } from "react";
import {v4 as uuidV4} from "uuid"

const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
    
    const onInputChange = (e) =>{
        setInput(e.target.value);
    };

    const updateTodo = (title, id, completed)=>{
        const newTodo = todos.map((todo) =>
            todo.id === id ? {title, id, completed} : todo
        );
        setTodos(newTodo);
        setEditTodo("")
    };
    useEffect(()=> {
        if(editTodo){
            setInput(editTodo.title);
        }else {
            setInput("");
        }
    }, [setInput, editTodo]);

    const onFormSubmit = (e) => {
        e.preventDefault();
        if(!editTodo){
            setTodos([...todos, {id: uuidV4(), title: input, completed: false}]);
        }else{
            updateTodo(input, editTodo.id, editTodo.completed);
        }
        setInput("");
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input 
            type="text" 
            placeholder="Enter an item" 
            className="itemInput"
            value = {input}
            required
            onChange={onInputChange}
            />
            <button 
            className="button-add"
            type="submit"
            >
                {editTodo ? "Edit" : "Add"}
            </button>
        </form>
    )
}
export default Form;