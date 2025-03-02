import { Link } from 'react-scroll';
import { RiArrowUpSLine } from "react-icons/ri";

const MyFooter = () => {
    return (
      
    <footer
        className="flex flex-col items-center bg-gray-800 text-center text-surface dark:bg-neutral-700 dark:text-white lg:text-left">
        <div className="container p-6 mt-10">
            <div className="grid justify-items-center md:grid-cols-2 lg:grid-cols-3">
            
            {/* <!-- First links section --> */}
            <div className="mb-6">
                <h5 className="text-neutralGrey text-sm mb-2.5 uppercase">ADDRESS</h5>

                <div className='text-white mb-2'>
                    <h5>ADDRESS 1 <br />
                        47774 GODELLA, LDA <br />
                        AGLA <br />
                    </h5>
                </div>
            </div>

            {/* <!-- Second links section --> */}
            <div className="mb-6">
                <h5 className="text-neutralGrey text-sm mb-2.5 uppercase">CONTACT</h5>
                <div className='text-white mb-2'>
                    <h5>ARQUITECTURE AGENCY</h5>
                    <h5 className='mt-2'>INFO@TEMPLATE.COM</h5>
                    <h5 className='mt-2'>+33 333 33 33 33</h5>
                </div>
            </div>

            {/* <!-- Third links section --> */}
            <div className="mb-6">
                <h5 className="text-neutralGrey text-sm mb-2.5 uppercase">FOLLOW US</h5>
                <div className='text-white mb-2'>
                    <ul className="mb-0 list-none">
                        <li>
                            <a href="#!">INSTAGRAM</a>
                        </li>
                        <li className='mt-2'>
                            <a href="#!">FACEBOOK</a>
                        </li>
                        <li className='mt-2'>
                            <a href="#!">X</a>
                        </li>
                    </ul>
                </div>
            </div>

            </div>
        </div>

        <div className="text-sm text-neutralGrey w-full bg-gray-800 p-4 text-center">
            <div className='p-4 justify-items-center mb-10 flex justify-between'>
                <div className="flex-1 flex justify-center">
                    <div className="w-10 h-10 bg-white rounded-full"></div>
                </div>
                <div>
                    <Link to="slides" spy={true} smooth={true} offset={-100} key={"slides"} className="block cursor-pointer">
                        <RiArrowUpSLine
                            className="text-white hover:opacity-40 text-3xl"
                            aria-label="Scroll up"
                        />
                    </Link>
                </div>
            </div>
            © 2025 ARQUITECT AGENCY. ALL RIGHTS RESERVED
            {/* <a href="https://tw-elements.com/">TW Elements</a> */}
        </div>
    </footer>
        
    )
} 

export default MyFooter;