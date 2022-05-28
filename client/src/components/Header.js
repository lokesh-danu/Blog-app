import logo from '../img/logo.png';
import background from '../img/quill.jpg'
const Header = () => {
    return (
        <>
            <div className="h-screen bg-no-repeat bg-cover" 
            style={{backgroundImage:`url(${background})`}} >
                {/* <img src={logo} alt="" className='h-1/3 lg:h-3/4 p-4 lg:p-10' /> */}
                <div className="flex flex-col h-screen px-6 justify-center lg:w-2/5  lg:justify-center lg:p-6">

                    <h2 className='text-yellow-200 text-center mb-4 lg:my-6'>React blog</h2>
                    
                    <p className='font-hand text-white text-xl lg:text-4xl leading-snug'>You can buy attention . You can beg for attention from the media . You can bug people one at a time to get attention . Or you can earn attention by creating something interesting and valuable and then publishing it online for free </p>
                    
                    <h6 className='text-right text-lime-500' >-David Meerman Scott</h6>

                </div>
            </div>
        </>
    );
}

export default Header;

// You can buy attention . You can beg for attention from the media . You can bug people one at a time to get attention . Or you can earn attention by creating something interesting and valuable and then publishing it online for free

//bg-[#fffccf70]