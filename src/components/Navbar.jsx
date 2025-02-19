import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState(false)

  useEffect(()=>{
    if(visible){
      document.body.style.overflow = "hidden";
    }
    else{
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };

  },[visible])

  return (
    <div className=' sticky top-0 left-0 bg-white'>
      <div className='flex justify-between items-center mt-2.5 sticky top-0 left-0'>

        <Link to="/" className='text-sm'>Change News<sup className='text-[orange]'>KE</sup></Link>       
 
        <div className='hidden gap-2 lg:flex'>
          <NavLink className="hover:bg-[orange] p-1 rounded-sm"  to="/">Home</NavLink>
          <NavLink className="hover:bg-[orange] p-1 rounded-sm"  to="/latest">Hot</NavLink>
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
                  <NavLink onClick={()=>setVisible(false)} className="hover:bg-[orange] p-1"  to="/latest">Hot</NavLink>
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

      <div className='flex items-center justify-center gap-2'>
          <div>
          {search && (
            <div className='flex items-center justify-center border border-amber-500 rounded-full'>
              <input 
                className='outline-none px-4 py-1 flex-1' 
                type="text" 
                placeholder='Search...' 
              />
              <div className="block h-full cursor-pointer bg-blue-500 text-white rounded-tr-full rounded-br-full px-4 py-1">GO</div>
            </div>
          )}
          </div>

          <span onClick={()=>setSearch(!search)} className="material-symbols-outlined cursor-pointer text-[orange]">search</span>
          
        </div>

      <hr className='mt-2 text-[orange]' />
    </div>
  )
}

export default Navbar
