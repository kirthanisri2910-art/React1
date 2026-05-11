function Badge(props)
{
    return(
    <div className="bg-blue-800 text-white text-center rounded  font-semibold w-60 h-30 p-5">
    <p>status</p>
    <h1 className="text-xl">{props.username}</h1> 
    <p className={props.status ? "text-green-400" : "text-red-600"}>{props.status ? "Active " : "Inactive"}</p>     
    </div>
        
    );
}
export default Badge