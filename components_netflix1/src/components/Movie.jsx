
function Movie(props)
{
    return(
        <div class="mydiv">
            <img className="image" src={props.imgLink}/>
            <h2 className="pair">{props.title}</h2>
            <p className="par">Released Year:{props.year}</p>
        </div>
    )
}
export default Movie 