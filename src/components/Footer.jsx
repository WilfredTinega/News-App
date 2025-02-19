import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date().getFullYear();
  return (
    <div>
      <hr className='text-[orange]' />
      <div>
        <div>

        </div>
        <div className='flex justify-between flex-col sm:flex-row'>
          <p>Copyright &copy;{today} Change News. All rights reserved.</p>
          <p>Developed with love by <Link className='text-[orange]' to="https://wilfredtinega.netlify.app">Wilfred Tinega</Link></p>
          
        </div>
      </div>
      
    </div>
  )
}

export default Footer
