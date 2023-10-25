import Link from "next/link"
import styles from '../page.module.css'


const MainLayoutFooter = () => {
    return (
        <div className="mt-auto">
            <div style={{ background: 'green', color: 'white' }}>
                <div className="container" style={{ paddingTop: 16, paddingBottom: 16 }} >
                    <div className="row">
                        <div className="col-12">
                            <h3 className={styles.footerPartnersElement}>Our partners:</h3>
                        </div>
                        <div className="col">
                            Brick Company Logo
                        </div>
                        <div className="col">
                            Wood Company Logo
                        </div>
                        <div className="col">
                            Dutch East India Company Logo
                        </div>
                    </div>
                    <hr className="hr" />
                    <div className="row">
                        <div className='col' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <h2 className={styles.footerSocialsHeader}>Our social media</h2>
                            <Link href="#" className={styles.footerSocialElement} style={{ fontSize: 18, marginBottom: 16 }}  >Facebook</Link>
                            <Link href="#" className={styles.footerSocialElement} style={{ fontSize: 18, marginBottom: 16 }}>Instagram</Link>
                            <Link href="#" className={styles.footerSocialElement} style={{ fontSize: 18, marginBottom: 16 }}>Telegram</Link>
                            <Link href="#" className={styles.footerSocialElement} style={{ fontSize: 18, marginBottom: 16 }}>Google</Link>
                        </div>
                        <div className='col' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <h2 className={styles.footerSocialsHeader}>About us</h2>
                            <Link href="#" className={styles.footerSocialElement} style={{ fontSize: 18, marginBottom: 16 }}>Facebook</Link>
                            <Link href="#" className={styles.footerSocialElement} style={{ fontSize: 18, marginBottom: 16 }}>Instagram</Link>
                            <Link href="#" className={styles.footerSocialElement} style={{ fontSize: 18, marginBottom: 16 }}>Telegram</Link>
                            <Link href="#" className={styles.footerSocialElement} style={{ fontSize: 18, marginBottom: 16 }}>Google</Link>
                        </div>
                        <div className='col' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', }}>
                            <h1 className={styles.footerContactElement}>Contact</h1>
                            <div>
                                <h3>Our mail</h3>
                                <h6>email: vortex@niemail.com</h6>
                                <p>Our specialists are available from 10 a.m. to 6 p.m</p>
                            </div>
                            <div>
                                <h3>Call us</h3>
                                <h6>tel: 123456789</h6>
                                <p>Our hotline is open from 8 a.m. to 8 p.m</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div></div >
    )
}

export default MainLayoutFooter