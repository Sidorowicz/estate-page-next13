import ImageCarousel from '../components/ImageCarousel'
import ImageGallery from '../components/ImageGallery';
import styles from '../page.module.css'


async function getOffer(id: any) {
    if (!id) return;
    const res = await fetch(`http://localhost:8000/houses/${id}`)
    return res.json()
}

async function getImages() {
    const res = await fetch(`http://localhost:8000/gallery`)
    return res.json()
}

export default async function page({ searchParams }: { searchParams: { [key: string]: string | string | [] | undefined } }) {
    const selectedId = searchParams.id
    const selectedHouse = await getOffer(selectedId)
    const images = await getImages()
    return (
        <div>
            {selectedId && <ImageCarousel images={selectedHouse.images} />}
            <h2 className={styles.textDivider}><span>Recently acquired estate</span></h2>
            <ImageGallery images={images} />

        </div>
    )
}
