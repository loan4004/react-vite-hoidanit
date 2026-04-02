// () => { }
// component = html + css + javascript
//fragment manh vo
//JSX : 1 parent

import './style.css';

const MyComponent = () => {
    return (
        <>
            <div> eric & hoidanit update </div>
            <div className="child"
                style={{ borderRadius: "10px" }}
            >child</div>

        </>
    );
}

export default MyComponent;  // xuất ra mycomponent