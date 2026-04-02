
const ThirdComponent = () => {
    return (
        <div>
            Third component
        </div>
    )
}

const SecondComponent = () => {
    return (
        <div>
            second component
        </div>
    )
}

export { SecondComponent, ThirdComponent };  // nếu xuất ra nhiều biến thì dùng dấu { }

// export default SecondComponent; // export {SecondComponent}