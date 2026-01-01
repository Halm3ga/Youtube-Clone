import Styles from "./Header.module.css";
import Icon from '../assets/cicon.webp';

function Header() {
    return(
        <div className={Styles.main}>
            <div className={Styles.brandPartition}>
                <button className={Styles.brandButton}>YouTube Clone</button>
            </div>
            <div className={Styles.nav}>
                <ul className={Styles.navbar}>
                    <li><button className={Styles.navItemButton}>Home</button></li>
                    <li><button className={Styles.navItemButton}>Trending</button></li>
                    <li><button className={Styles.navItemButton}>Recommended</button></li>
                </ul>
            </div>
            <div className={Styles.searchBar}>
                <input type="text" placeholder="Search"></input>
                <button className={Styles.searchButton}>Search</button>
            </div>
            <div className={Styles.channel}>
                <ul className={Styles.channelList}>
                    <li><button className={Styles.channelButton}><img src={Icon} alt="Channel Thumbnail" /></button></li>
                    <li><button className={Styles.channelButton}><img src={Icon} alt="Channel Thumbnail" /></button></li>
                    <li><button className={Styles.channelButton}><img src={Icon} alt="Channel Thumbnail" /></button></li>
                    <li><button className={Styles.channelButton}><img src={Icon} alt="Channel Thumbnail" /></button></li>
                </ul>
            </div>
            <div className={Styles.userActions}>
                <button className={Styles.loginUser}>Login</button>
                <button className={Styles.signupUser}>Sign Up</button>
            </div>
        </div>
    );
}

export default Header