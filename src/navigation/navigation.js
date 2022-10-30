import logo from './static/REAPER.jpg';
import './index.css';

export default function Navigation() {
    return(
        <nav className = "nav">
            <a href="/" className = "site-logo"><img className="logo" src={logo} width={100} height={100} alt="logo"></img></a>
            <ui>
                <li>
                    <a href="/Shop">Shop</a>
                </li>
                <li>
                    <a href="/About">About</a>
                </li>
                <li>
                    <a href="/Contact">Contact</a>
                </li>
                <li>
                    <a href="/Login">Login</a>
                </li>
            </ui>
        </nav>
    );
}
