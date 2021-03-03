import './Button.css'

export const Button = (props) => {
    const operators = ["+", "-", "*", "/"]

    return (
        <div className={operators.includes(props.children) ? "button operator" : "button"}
            onClick={() => { props.handleclick(props.children) }}
        >
            {props.children}
        </div>
    )
}