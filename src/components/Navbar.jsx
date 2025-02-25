import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if(visible){
      document.body.style.overflow = "hidden";
    }
    else{
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };

  },[visible]);

  return (
    <div className=' sticky top-0 left-0 bg-white'>
      <div className='flex px-4 sm:px-20 justify-between items-center mt-2.5 sticky top-0 left-0'>

        <Link to="/" className='text-sm shadow-blue-500'>Change News<sup className='text-[orange]'>KE</sup></Link>       
 
        <div className='hidden gap-2 lg:flex'>
          <NavLink className="hover:bg-[orange] p-1 rounded-sm"  to="/">Home</NavLink>
          <NavLink className="hover:bg-[orange] p-1 rounded-sm"  to="/trending-news">Trends</NavLink>
          <NavLink className="hover:bg-[orange] p-1 rounded-sm"  to="/tech">Tech</NavLink>
          <NavLink className="hover:bg-[orange] p-1 rounded-sm"  to="/agriculture">Agriculture</NavLink>
          <NavLink className="hover:bg-[orange] p-1 rounded-sm"  to="/health">Health</NavLink>
          <NavLink className="hover:bg-[orange] p-1 rounded-sm"  to="/education">Education</NavLink>
        </div>
        <div className='flex items-center justify-center lg:hidden'>
          <span onClick={()=>setVisible(!visible)} className="material-symbols-outlined text-[orange]">menu</span>
          {
            visible && (
              <div className='fixed top-0 right-0 max-w-full left-0 overflow-hidden text-[orange] bg-black h-[100vh]'>
                <div className='flex items-center bg-white p-2'  onClick={()=>setVisible(false)}>
                  <span className="material-symbols-outlined ">arrow_back_ios</span>
                  <span className='text'>Back</span>
                </div>

                <div className='flex flex-col'>
                  <NavLink onClick={()=>setVisible(false)} className="hover:bg-[orange] p-1"  to="/">Home</NavLink>
                  <NavLink onClick={()=>setVisible(false)} className="hover:bg-[orange] p-1"  to="/trending-news">Trends</NavLink>
                  <NavLink onClick={()=>setVisible(false)} className="hover:bg-[orange] p-1"  to="/tech">Tech</NavLink>
                  <NavLink onClick={()=>setVisible(false)} className="hover:bg-[orange] p-1"  to="/agriculture">Agriculture</NavLink>
                  <NavLink onClick={()=>setVisible(false)} className="hover:bg-[orange] p-1"  to="/health">Health</NavLink>
                  <NavLink onClick={()=>setVisible(false)} className="hover:bg-[orange] p-1"  to="/education">Education</NavLink>
                </div>                
              </div>
            )
          }
          </div>
        
      </div>
      <hr className='mt-2 text-blue-500' />
    </div>
  )
}

export default Navbar
