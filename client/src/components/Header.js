import logo from '../img/logo.png';
const Header = () => {
    return (
        <>
            <div className="h-screen bg-contain bg-no-repeat bg-left bg-[#fffccf70] flex" >
                <img src={logo} alt="" className='h-screen' />
                <div className="w-2/5 flex flex-col h-screen justify-center p-6">

                    <h2 className='font-lora text-8xl my-6'>React blog</h2>
                    
                    <p className='font-hand text-4xl p-2 leading-snug'> You can buy attention (advertising). You can beg for attention from the media (PR). You can bug people one at a time to get attention (sales). Or you can earn attention by creating something interesting and valuable and then publishing it online for free</p>
                    
                    <h4 className='font-roboto text-2xl' >-David Meerman Scott</h4>

                </div>
            </div>
        </>
    );
}

export default Header;