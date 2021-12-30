import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import './Slider.css'
function Slider() {
    return (
        <Carousel className="sliderSize">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/61MkiIMUSvL._SX3000_.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/61CX1noQ8nL._SX3000_.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>


        </Carousel>
    );
}

export default Slider;
