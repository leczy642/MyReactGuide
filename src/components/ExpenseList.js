import './ExpenseList.css'

const ExpenseList = (props) => {
   let filteredContent = props.items;

    return(
        <div>{filteredContent}</div>
    );

}



export default ExpenseList;