import React from 'react';
import t1 from '../assets/placeholder1.jpg';
import t2 from '../assets/placeholder2.jpg';
import t3 from '../assets/placeholder3.jpg';
import t4 from '../assets/placeholder2.jpg';

const S3 = () => {
    
    return (
           
        <div className='px-4 lg:px-14 mt-20 max-w-screen-2xl mx-auto' id='s3'>   
            <div className='text-center mb-10'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>SERVICES</h2>
            </div>

            <div  className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                <div>
                    <img className="h-auto max-w-full" src={t1} alt=''/>
                    <div>
                        <h2 className='font-semibold text-Grey'>Some text</h2>
                        <p className='text-neutralGrey text-justify'>Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna.</p>
                    </div>
                </div>
                <div>
                    <img className="h-auto max-w-full" src={t2} alt=''/>
                    <div>
                        <h2 className='font-semibold text-Grey'>Some text</h2>
                        <p className='text-neutralGrey text-justify'>Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna.</p>
                    </div>
                </div>
                <div>
                    <img className="h-auto max-w-full" src={t3} alt=''/>
                    <div>
                        <h2 className='font-semibold text-Grey'>Some text</h2>
                        <p className='text-neutralGrey text-justify'>Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna.</p>
                    </div>
                </div>
                <div>
                    <img className="h-auto max-w-full" src={t4} alt=''/>
                    <div>
                        <h2 className='font-semibold text-Grey'>Some text</h2>
                        <p className='text-neutralGrey text-justify'>Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna.</p>
                    </div>
                </div>
            </div>

        </div>
    )
} 

export default S3;