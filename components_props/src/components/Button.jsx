
const Button=(props) =>
{
    return(
        <button style={{color:props.color ,fontSize:props.size}}>
            {props.text}
        </button>

    )
}
export default Button
