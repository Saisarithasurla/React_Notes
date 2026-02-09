import "./MainBody.css"
import Movie from "./Movie.jsx"
function MainBody()
{
    return(
        <div>
            <h1 className="mov">Movies</h1>
            <div className="movies">
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>

            </div>
        </div>
    )
}
export default MainBody



