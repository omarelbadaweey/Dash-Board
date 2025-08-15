
function UserCard({id , name , avatar , email , onDelete }) {
    return(
        <div className="bg-neutral-800 rounded-2xl shadow-lg shadow-black/30 p-4 text-center hover:scale-105 transition-transform">
            <img className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-blue-400 object-cover" src={avatar} alt={name}/>
            <h2 className="text-lg font-semibold whitespace-nowrap overflow-hidden text-ellipsis text-white">{name}</h2>
            <p className="text-sm text-neutral-400">{email}</p>
            <button className="bg-red-500 rounded-full hover:bg-red-600 active:scale-[1.2] active:bg-black px-5 py-1 cursor-pointer text-white font-bold mt-2" onClick={() => onDelete(id)}>Delete</button>
        </div>
        
    )
}
export default UserCard;