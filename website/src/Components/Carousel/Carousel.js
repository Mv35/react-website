import React from "react";
import {
    CarouselContainer,
    CarouselSlider,
    CarouselImage,
    Handle,
} from "./Carousel.styled";

const Carousel = () => {
    return (
        <CarouselContainer className="container">
            <Handle className="leftHandle"></Handle>
            <CarouselSlider className="slider">
                <CarouselImage
                    alt="1"
                    src="https://via.placeholder.com/150?text=1"
                />
                <CarouselImage
                    alt="2"
                    src="https://via.placeholder.com/150?text=2"
                />
                <CarouselImage
                    alt="3"
                    src="https://via.placeholder.com/150?text=3"
                />
                <CarouselImage
                    alt="4"
                    src="https://via.placeholder.com/150?text=4"
                />
                <CarouselImage
                    alt="5"
                    src="https://via.placeholder.com/150?text=5"
                />
                <CarouselImage
                    alt="6"
                    src="https://via.placeholder.com/150?text=6"
                />
                <CarouselImage
                    alt="7"
                    src="https://via.placeholder.com/150?text=7"
                />
                <CarouselImage
                    alt="8"
                    src="https://via.placeholder.com/150?text=8"
                />
            </CarouselSlider>
            <Handle className="rightHandle"></Handle>
        </CarouselContainer>
    );
};

export default Carousel;
