import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function CarouselItem() {
    return (
        <Carousel
            autoplay
            infintiteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={500}
        >
            <div>
                <img
                    
                    src="https://m.media-amazon.com/images/I/61MkiIMUSvL._SX3000_.jpg"
                    alt="first slide"
                />
            </div>
            <div>

            <img
                loading="lazy"
                src="https://m.media-amazon.com/images/I/61CX1noQ8nL._SX3000_.jpg"
                alt="Second slide"
                />
                </div>
        </Carousel>
    );
}

export default CarouselItem;
