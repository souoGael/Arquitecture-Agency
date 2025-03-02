import aboutImg from '../assets/placeholder4.jpg';
import { useVisibilityAnimation } from '../useVisibilityAnimation';


const S2 = () => {
    const { ref, animationClassLeft, animationClassUp } = useVisibilityAnimation();
    
    return (
        // <div ref={ref} className={animationClass}>
        <div>
            {/* about text */}
            <div className='mt-10 px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='s2'>
                
                <div className='md:w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-10'>
                    <div ref={ref} className={`md:w-full mx-auto ${animationClassLeft}`}>
                        <h2 className='md:w-full text-2xl text-neutralDGrey font-semibold mb-4'>The unseen values of s2</h2>
                        <p className='md:w-full text-sm text-justify text-neutralGrey mb-4'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                    </div>
                    <div className={` ${animationClassUp}`}>
                        <img src={aboutImg} alt=''/>
                    </div>
                </div>


            </div>
            
        </div>
    )
} 

export default S2;