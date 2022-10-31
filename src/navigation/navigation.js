import logo from '../statics/REAPER.jpg';
import './navigation.css';

export default function Navigation() {
    return(
        <nav className = "nav">
            <a href="/" className = "site-logo"><img className="logo" src={logo} width={100} height={100} alt="logo"></img></a>
            <ul>
                <li className="navlist">
                    <a href="../Shop" className="link1">Shop</a>
                </li>
                <li className="navlist">
                    <a href="../About" className="link2">About</a>
                </li>
                <li className="navlist">
                    <a href="../Contact" className="link3">Contact</a>
                </li>
                <li className="navlist">
                    <a href="../Account" className="link4">Account</a>
                </li>                
                <li className="navlist">
                    <a href="../Login" className="link5">Login</a>
                </li>
            </ul>
        </nav>
    );
}
