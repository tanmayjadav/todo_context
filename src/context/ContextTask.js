import { createContext , useContext } from "react";

export const ContextTask = createContext({
    todos:[{
        id:1,
        todo:"",
        completed:false,
    }],

    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{},
})

export const UseContextTask = ()=>{
    return useContext(ContextTask)
}

export const TodoProvider = ContextTask.Provider