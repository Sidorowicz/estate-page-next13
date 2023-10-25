

const ImageGallery = ({ images }: { images: Array<any> }) => {
    return (
        <div className="container">
            <div className="row">
                {images.map((image) => <div className="col">
                    <img src={image.image} />
                </div>)}
            </div>
        </div>
    )
}

export default ImageGallery