import { useState } from "react";

const TodoNew = (props) => {
    // useState hook (getter / setter)
    // const valueInput = "eric";

    const [valueInput, setValueInput] = useState("eric")

    // console.log(">>> check point: ", props)//khi ban hong biet 1 bien so gia tri ntn thi dung console.log
    const { addNewTodo } = props;

    // addNewTodo("eric") //fire : khai hoar

    const handleClick = () => {
        addNewTodo(valueInput);
        setValueInput("")
    }

    const handleOnChange = (name) => {
        // console.log(">>> handleOnChange", name)
        setValueInput(name)
    }

    return (
        <div className='todo-new'>
            <input
                type="text"
                onChange={(event) => handleOnChange(event.target.value)}
                value={valueInput}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>

            <div>
                My text input is = {valueInput}
            </div>

        </div>
    )
}

export default TodoNew;