import "./ButtonClear.css"

export const ButtonClear = (props) => {
    return (
        <div className="button-clear" onClick={() => props.handleclick()}>
            Clear
        </div>
    )
}