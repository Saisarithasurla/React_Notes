
function Movie(props)
{
    return(
        <div className="movie">
            <img className='imagee'src={props.imgLink}/>
            <h2 className="my">{props.title}</h2>
            <p>Released Year:{props.year}</p>
        </div>

    )
}
export default Movie