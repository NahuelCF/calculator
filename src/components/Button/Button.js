import './Button.css'

export const Button = (props) => {
    const operators = ["+", "-", "*", "/"]

    return (
        <div className={operators.includes(props.children) ? "button operator" : "button"}>
            {props.children}
        </div>
    )
}