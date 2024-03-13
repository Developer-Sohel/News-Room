
export default function Navbar(){
    return(
       <div className="bg-red-500">
        
        <div class="navbar container mx-auto lg:px-24 py-3">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li className="text-[17px font-medium tracking-wider text-white gap-3"><a>Bangladesh</a></li>
      <li  className="text-[17px font-medium tracking-wider text-white gap-3" id="International"><a href="">International</a></li>
      <li  className="text-[17px font-medium tracking-wider text-white gap-3"><a href="">Sport</a></li>
      <li  className="text-[17px font-medium tracking-wider text-white gap-3"><a href="">Job</a></li>
      <li  className="text-[17px font-medium tracking-wider text-white gap-3"><a href="">Entertainment</a></li>
      <li  className="text-[17px font-medium tracking-wider text-white gap-3"><a href="">Video</a></li>

       
        <li>
          
          <ul class="p-2">
            
          </ul>
        </li>
        
      </ul>
    </div>
    <a class="text-3xl font-bold tracking-widest text-white">News <span className="text-lime-400">Room</span></a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li className="text-[17px font-medium tracking-wider text-white gap-3"><a>Bangladesh</a></li>
      <li  className="text-[17px font-medium tracking-wider text-white gap-3"><a href="">International</a></li>
      <li  className="text-[17px font-medium tracking-wider text-white gap-3"><a href="">Sport</a></li>
      <li  className="text-[17px font-medium tracking-wider text-white gap-3"><a href="">Job</a></li>
      <li  className="text-[17px font-medium tracking-wider text-white gap-3"><a href="">Entertainment</a></li>
      <li  className="text-[17px font-medium tracking-wider text-white gap-3"><a href="">Video</a></li>

      
      <li>
       
      </li>
     
    </ul>
  </div>
  <div class="navbar-end">
  <label class="input input-bordered flex items-center gap-2">
  <input type="text" class="grow" placeholder="Search" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
</label>
  </div>
</div>
       </div>
    )

}