 const HeaderNews =({newS}) =>{

    const {img, title, description, post_date, author}=newS;

    return(
       
        <div className="bg-slate-50 shadow-md p-3 rounded-md">
            <img src="https://www.fairobserver.com/wp-content/uploads/2023/09/Dhaka-1.jpg" className="rounded-md mb-3" alt="" />
            <h1 className="text-2xl lg:text-3xl font-semibold tracking-wide text-orange-400">{title}</h1>
            <p className="text-base tracking-wider mt-3">{description}</p>
            <p className="text-[20px font-semibold mt-3 tracking-wider text-red-600">Post-Date:{post_date}</p>
            <div className="flex justify-between">
            <h2 className="text-xl font-semibold tracking-widest">Author: {author}</h2>
            <button className="text-[20px font-semibold bg-orange-400 px-3  rounded-sm shadow-md">Red More....</button>
                
            </div>
            
        </div>


    )

}

export default HeaderNews;