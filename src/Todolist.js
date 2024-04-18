import React,{useState} from 'react';

const Todolist = () => {
    const[todos, setTodos] = useState([]);
    const[newTodo,setNewTodo] = useState("");

    const handleAddTodo = () => {
        if(newTodo.trim() !== ""){
            setTodos([...todos, {text:newTodo.trim(),checked: false}]);
            setNewTodo("");
        }
    };

    const handleDeleteTodo =(index) =>{
       const newTodos = [...todos];
       newTodos.splice(index,1);
       setTodos(newTodos);
    }

    const handleToggleTodo = (index) => {
        const newTodos =[...todos];
        newTodos[index].checked = !newTodos[index].checked;
        setTodos(newTodos);
    };
    return(
        <>
        <h1>TO-DO LIST</h1>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
       <button onClick={handleAddTodo}>Add</button>
       <ul>
        {todos.map((todos, index) => (
            <li key ={index} >
           <input type ="checkbox" checked ={todos.checked}  onChange={() => handleToggleTodo(index)}/>
          <span style={{marginRight:"10px",textDecoration : todos.checked ? "line-through" : "none"}}>  {todos.text} </span>
          <button style={{marginTop:"5px" , marginBottom: "5px"}} onClick={() => handleDeleteTodo(index)}>Delete</button>
           </li>
        ))}
       </ul>
        </>
    )
}
export default Todolist;