
const TodoNew = (props) => {
    console.log(">>> check point: ", props)//khi ban hong biet 1 bien so gia tri ntn thi dung console.log
    const { addNewTodo } = props;

    // addNewTodo("eric")

    return (
        <div className='todo-new'>
            <input type="text" />
            <button>Add</button>
        </div>
    )
}

export default TodoNew;