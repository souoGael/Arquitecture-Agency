
import { useNavigate } from "react-router-dom";
import { useVisibilityAnimation } from '../useVisibilityAnimation';
import b1 from '../assets/placeholder1.jpg';
import b2 from '../assets/placeholder2.jpg';
import b3 from '../assets/placeholder3.jpg';
import b4 from '../assets/placeholder2.jpg';


const S4 = () => {
    const { ref, animationClassUp } = useVisibilityAnimation();
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/portfolio/${id}`); // Redirects to /newpage
        window.scrollTo(0, 0); // Scrolls to the top
       
    };
    
    return (
        <div>

            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 mt-14 mb-14' id='s4'>
                <div className='text-center mb-10'>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>PROJECTS</h2>
                </div>
    
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div ref={ref} className={`grid grid-cols-1 md:grid-cols-4 gap-4 ${animationClassUp}`}>
                        <div className="relative group overflow-hidden">
                            <img className="h-auto max-w-full object-cover transition-transformation duration-300 group-hover:scale-110" src={b1} alt=""/>
                            {/* Overlay Text */}
                            <div onClick={() => handleClick("p1")} className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                                <span className="text-white font-semibold text-lg">TEMPLATE</span>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden">
                            <img className="h-auto max-w-full object-cover transition-transformation duration-300 group-hover:scale-110" src={b2} alt=""/>
                            {/* Overlay Text */}
                            <div onClick={() => handleClick("p2")} className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                                <span className="text-white font-semibold text-lg">TEMPLATE</span>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden">
                            <img className="h-auto max-w-full object-cover transition-transformation duration-300 group-hover:scale-110" src={b3} alt=""/>
                            {/* Overlay Text */}
                            <div onClick={() => handleClick("p3")} className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                                <span className="text-white font-semibold text-lg">TEMPLATE</span>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden">
                            <img className="h-auto max-w-full object-cover transition-transformation duration-300 group-hover:scale-110" src={b4} alt=""/>
                            {/* Overlay Text */}
                            <div onClick={() => handleClick("p4")} className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                                <span className="text-white font-semibold text-lg">TEMPLATE</span>
                            </div>
                        </div>                
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default S4;