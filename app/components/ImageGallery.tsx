import Image from "next/image"


const ImageGallery = ({ images }: { images: Array<any> }) => {
    return (
        <div style={{ border: '1px solid gray' }} className='container-fluid '>
            <div className="row"  >
                {images.map((image) =>
                    <div className="col-4" style={{ height: 400, padding: 0, overflow: 'hidden' }}>
                        <Image src={image.image} alt={image.id} width={800} height={400} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default ImageGallery