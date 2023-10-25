import Link from 'next/link'

export const MainLayoutNavbar = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: 600, alignItems: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
            <Link href="/"><img src="../assets/logo.png" style={{ width: 250 }} /></Link>
            <Link href="gallery">Gallery</Link>
            <Link href="offers">Offers</Link>
            <Link href="contacts">Contact</Link>
            <Link href="about">About</Link>
        </div>
    )
}
