

function TodoListItem(props){
    const todoItems = props.todos;
    const toggleList = props.onToggleTodoList;

    function toggleTodoList(){
        toggleList(todoItems.id);
    }

    return(
        <div>
            <label>
                <input type="checkbox" checked={todoItems.completed} onChange={toggleTodoList}/>
                 {todoItems.name}
            </label>
        </div>
    );
}
export default TodoListItem;