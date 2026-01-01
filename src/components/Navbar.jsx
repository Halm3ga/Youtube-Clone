import CIcon from '../assets/cicon.webp'
import Styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={Styles.navbar}>
            <div className={Styles.logo}>Channels</div>
            <ul className={Styles.navLinks}>
                <li className={Styles.navItem}><img src={CIcon} alt="Logo" className={Styles.navIcon} /></li>
                <li className={Styles.navItem}><img src={CIcon} alt="Logo" className={Styles.navIcon} /></li>
                <li className={Styles.navItem}><img src={CIcon} alt="Logo" className={Styles.navIcon} /></li>
            </ul>
        </nav>
    );
}

export default Navbar;
