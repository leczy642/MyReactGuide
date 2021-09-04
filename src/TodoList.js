import TodoListItem from "./TodoListItem";

function TodoList(props){
    const todoItems = props.todo;
    const toggleTodoList = props.onToggle

    return(
        <div>
            {
              todoItems.map(todo =>{
                  return <TodoListItem key ={todo.id} todos ={todo} onToggleTodoList={toggleTodoList}/>
              })  
            }
        </div>
    );
}

export default TodoList;