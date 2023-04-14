import React from 'react'
import sparklogo from './sparklogo.png'
import {Link, Outlet} from 'react-router-dom'

function Navbar() {
    return(
        <>
          <div className='bg-gray-950 h-20 w-full shadow-sm shadow-gray-800 rounded-sm px-5 py-4'>
            <div className='flex justify-between items-center border-white '>
                        
                <div className='flex ml-16'>
                        <img src={sparklogo} alt="logo" style={{height: '48px'}} />
                </div>

                <div >
                        <ul className="flex text-white  gap-5 list-none">
                            <li ><Link to="/">Home</Link></li>
                            <li><Link to="/view">View Customer</Link></li>
                            <li><Link to="/sendMoney">Send Money</Link></li>
                            <li><Link to="/viewTrans">View Transctaion</Link></li>
            
            
                        </ul>
                        <Outlet />
                </div>
        
                
            </div>            


          </div>
        
        
        </>
    )


}

export default Navbar;