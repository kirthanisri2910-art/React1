
function Movie(props)
{
    return(
        <div  className="bg-white border   rounded p-4 border-red-700 shadow w-60 text-center  ">
            <p>MOVIE</p>
            <img src={props.image} alt="flower" className="w-40 h-40 mx-auto"/>
            <h1 className="text-xl text-green-600">{props.movieName}</h1>
            <h1 className="text-gray-600">{props.ticketPrice}</h1>
         
        </div>
    );
}
export default Movie