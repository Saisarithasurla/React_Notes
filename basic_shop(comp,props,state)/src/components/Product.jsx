const Product=({title,price,imageurl,count,counterFn}) =>
{
    return(
        <div className=" flex flex-col justify-between p-3 rounded-2xl shadow-2xl shadow-blue-300">
            <img src={imageurl} alt={title}/>
            <h2>{title}</h2>
            <p>Price:₹{price}</p>
            <button onClick={()=>counterFn(count+1)} className=" bg-black text-2xl py-2 text-white text-center rounded-3xl">Add to Cart</button>

        </div>
    )
}
export default Product