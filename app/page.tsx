import Link from 'next/link'
import DetailsGridElement from './components/detailsGridElement'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      {/* image on landing page with contact us */}
      <div className={styles.landingPageInformation} style={{ height: 700, padding: 128 }}>
        <div style={{ background: 'white', width: 500, marginLeft: 'auto', paddingTop: 32, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src='../assets/logo.png' />
          <h3>Find the best location for you!</h3>
          <p>Something about houses blablabla. Nest paragraph, hav</p>
          <Link href="contacts"
            style={{ background: 'green', display: 'flex', justifyContent: 'center', width: '100%', padding: '16px 32px', color: 'white', textDecoration: 'none' }}>
            Contact us</Link>
        </div>
      </div>
      <h2 className={styles.textDivider}><span>Details</span></h2>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 16 }}>
        <h5>Our company offers you great open state houses in many intresting and secure places.</h5>
        <h5>All out conglomerats are open for visits, as well as daily tours with our presenter.</h5>
      </div>
      {/* six cards with details */}
      <div className="container" >
        <div className="row">
          <DetailsGridElement img={"https://cdn-icons-png.flaticon.com/512/8044/8044503.png"} text={'Ecologic houses'} />
          <DetailsGridElement img={"https://img.freepik.com/premium-wektory/ikona-miejsca-parkingowego-na-ktorym-mozna-zaparkowac-samochod-plaskie-wektor-ilustracja-na-bialym-tle_124715-1477.jpg"} text={'Personal parking space'} />
          <DetailsGridElement img={"https://cdn-icons-png.flaticon.com/512/2345/2345454.png"} text={'Safe conglomerats'} />
        </div>
        <div className="row">
          <DetailsGridElement img={"https://cdn-icons-png.flaticon.com/512/5849/5849219.png"} text={'Modern Houses'} />
          <DetailsGridElement img={"https://p1.hiclipart.com/preview/530/701/121/solar-system-solar-power-renewable-energy-solar-energy-solar-panels-active-solar-photovoltaics-photovoltaic-system-png-clipart.jpg"} text={'Built-in photovoltaics'} />
          <DetailsGridElement img={"https://cdn.iconscout.com/icon/premium/png-256-thumb/buildings-4059596-3358727.png"} text={'Single and multi-family houses'} />
        </div>
      </div>

    </main>
  )
}
