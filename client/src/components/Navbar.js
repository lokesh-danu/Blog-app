import logo from '../img/logo2.svg';
const Navbar = () => {
    return ( 
        <>
        <nav className="p-5 bg-black flex justify-between h-20">
            <img src={logo} alt="logo" className="h-12 text-white" />
            <ul className="flex space-x-9" >
                <li className="text-2xl text-yellow-100 hover:text-fuchsia-500" >Home</li>
            </ul>
        </nav>
        </>
     );
}
 
export default Navbar;