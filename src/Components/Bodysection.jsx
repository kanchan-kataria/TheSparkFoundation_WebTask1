import React from 'react'
import sidePhoto from './sidePhoto.svg'
import Services from './services';
function Bodysection(){
    return(
        <>
            <div className='bg-gray-900 w-full  h-auto'>
                <div className='flex justify-between pt-5'>
                    <div className='text-white items-center m-24'>
                        <p className="text-5xl font-bold">The Spark Foundation Bank</p>
                        <p className="text-xl pt-4 font-light">Mission and Vision Statement</p>
                        <p className="text-lg pt-4 font-extralight ">The sparks foundation is working to bring parity in education,making sure children <br/>have equal opportunity at success,
                         irrespective of the financial background.</p>
                         <button class="bg-blue-500 hover:bg-blue-700  text-white font-bold mt-4 py-2 px-4 rounded">Get Started </button>



                    </div>

                    <div className='flex mt-14'>
                        <img src={sidePhoto} alt="logo" style={{height: '350px'}} />
                    </div>

                    <div>

                    </div>
                    
                </div>



            </div>

        
        <Services/>
        
        </>
    )

    

}

export default Bodysection;