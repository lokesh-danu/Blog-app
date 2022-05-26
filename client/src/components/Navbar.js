import logo from '../img/logo2.svg';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="p-5 bg-black flex justify-between h-20 sticky top-0 opacity-80">
            <img src={logo} alt="logo" className="h-12 text-white" />
            <ul className="flex space-x-9" >
                <Link to='/'>
                    <li className="text-2xl text-yellow-100 hover:text-fuchsia-500" >Home</li>
                </Link>
                <Link to='/register'>
                    <li className="text-2xl text-yellow-100 hover:text-fuchsia-500" >Register</li>
                </Link>
                <Link to='/login'>
                    <li className="text-2xl text-yellow-100 hover:text-fuchsia-500" >Login</li>
                </Link>
                <Link to='/create'>
                    <li className="text-2xl text-yellow-100 hover:text-fuchsia-500" >Write</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;