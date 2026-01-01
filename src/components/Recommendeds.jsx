import Styles from './Recommendeds.module.css'
import Thumbnail from '../assets/thumbnail.jpeg'

function Recommended(){
    return(
        <div className={Styles.main}>
            <div className={Styles.headingSection}>
                <h2>Recommended Videos</h2>
            </div>
            <div className={Styles.navbar}>
                <ul className={Styles.navList}>
                    <li className={Styles.navItem}><button className={Styles.navButton}>All</button></li>
                    <li className={Styles.navItem}><button className={Styles.navButton}>Music</button></li>
                    <li className={Styles.navItem}><button className={Styles.navButton}>Gaming</button></li>
                    <li className={Styles.navItem}><button className={Styles.navButton}>News</button></li>
                </ul>
            </div>
            <div className={Styles.videoSectionR1}>
                <div className={Styles.videoCard}>
                    <img className={Styles.videoThumbnail} src={Thumbnail} alt="Video Thumbnail" />
                    <div className={Styles.videoInfo}>
                        <h4 className={Styles.videoTitle}>Video Title</h4>
                        <p className={Styles.videoChannel}>Channel Name</p>
                    </div>
                </div>
                <div className={Styles.videoCard}>
                    <img className={Styles.videoThumbnail} src={Thumbnail} alt="Video Thumbnail" />
                    <div className={Styles.videoInfo}>
                        <h4 className={Styles.videoTitle}>Video Title</h4>
                        <p className={Styles.videoChannel}>Channel Name</p>
                    </div>
                </div>
                <div className={Styles.videoCard}>
                    <img className={Styles.videoThumbnail} src={Thumbnail} alt="Video Thumbnail" />
                    <div className={Styles.videoInfo}>
                        <h4 className={Styles.videoTitle}>Video Title</h4>
                        <p className={Styles.videoChannel}>Channel Name</p>
                    </div>
                </div>
                <div className={Styles.videoCard}> 
                    <img className={Styles.videoThumbnail} src={Thumbnail} alt="Video Thumbnail" />
                    <div className={Styles.videoInfo}>
                        <h4 className={Styles.videoTitle}>Video Title</h4>
                        <p className={Styles.videoChannel}>Channel Name</p>
                    </div>
                </div>
                <div className={Styles.videoCard}>
                    <img className={Styles.videoThumbnail} src={Thumbnail} alt="Video Thumbnail" />
                    <div className={Styles.videoInfo}>
                        <h4 className={Styles.videoTitle}>Video Title</h4>
                        <p className={Styles.videoChannel}>Channel Name</p>
                    </div>
                </div>
                <div className={Styles.videoCard}>
                    <img className={Styles.videoThumbnail} src={Thumbnail} alt="Video Thumbnail" />
                    <div className={Styles.videoInfo}>
                        <h4 className={Styles.videoTitle}>Video Title</h4>
                        <p className={Styles.videoChannel}>Channel Name</p>
                    </div>
                </div>
                <div className={Styles.videoCard}>
                    <img className={Styles.videoThumbnail} src={Thumbnail} alt="Video Thumbnail" />
                    <div className={Styles.videoInfo}>
                        <h4 className={Styles.videoTitle}>Video Title</h4>
                        <p className={Styles.videoChannel}>Channel Name</p>
                    </div>
                </div>
                <div className={Styles.videoCard}>
                    <img className={Styles.videoThumbnail} src={Thumbnail} alt="Video Thumbnail" />
                    <div className={Styles.videoInfo}>
                        <h4 className={Styles.videoTitle}>Video Title</h4>
                        <p className={Styles.videoChannel}>Channel Name</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Recommended;