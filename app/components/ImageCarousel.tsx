'use client'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ images }: { images: Array<string> }) => {
    const renderImages = () => {
        return images.map((image) =>
            <div>
                <img src={image} alt={image} />
            </div>
        )
    }
    return (
        <div className="container">
            <Carousel>
                {renderImages()}
            </Carousel>
        </div>
    )
}

export default ImageCarousel