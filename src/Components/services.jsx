import React from 'react'

import { Card , CardBody,CardTitle,CardSubtitle,CardText,Button } from 'reactstrap';



function Services(){
    const cardInfo=[{Title:"Customers",Subtitle:" View the list of Customers",buttonText:"View Customers"},
                    {Title:"Transfer Money",Subtitle:"Transfer Money to Customers",buttonText:"Transfer"} ,
                    {Title:"View Transcation",Subtitle:" View the list of Transcation",buttonText:"View Transcation"}     

                    ]
    return(
        <>
            <div className='bg-gray-900 w-full h-auto '>
                <div><p className="text-white text-5xl font-bold text-center"> Our Services</p></div>
                <div className='flex items-center justify-center gap-x-32 p-5 ' >
                    {cardInfo.map((info)=>(
                        
                            <Card className=' hover:border-4  '
                            style={{
                                width: '17rem',
                                height: '17rem'
                            }}>
        
                            <CardBody className='bg-gray-900 font-light text-white text-center pt-5'>
                                <CardTitle tag="h5">
                                    {info.Title}
                                </CardTitle>
                                <CardSubtitle
                                className="mb-2 text-muted pt-2"
                                tag="h6"
                                >
                                {info.Subtitle}
                                </CardSubtitle>
                                
                                <button className="bg-blue-500 hover:bg-blue-700  text-white font-bold mt-4 py-2 px-4 rounded">
                                {info.buttonText}
                                </button>
                            </CardBody>
                        </Card>


                    ))}
                    


                </div>
                
                
            </div>
        
        
        </>
    )
}

export default Services;