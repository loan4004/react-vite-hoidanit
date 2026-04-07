
const TodoNew = (props) => {
    console.log(">>> check point: ", props)//khi ban hong biet 1 bien so gia tri ntn thi dung console.log
    const { addNewTodo } = props;

    // addNewTodo("eric") //fire : khai hoar

    const handleClick = () => {
        alert("click me")
    }

    const handleOnChange = (name) => {
        console.log(">>> handleOnChange", name)
    }

    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
        </div>
    )
}

export default TodoNew;