import React, { useState, useEffect } from "react";
import {
    CarouselContainer,
    CarouselSlider,
    CarouselImage,
    Handle,
} from "./Carousel.styled";

function buildCarouselElements() {
    const elements = [
        {
            element_name: "1",
            element_image_source: "https://via.placeholder.com/150?text=1",
        },
        {
            element_name: "2",
            element_image_source: "https://via.placeholder.com/150?text=2",
        },
        {
            element_name: "3",
            element_image_source: "https://via.placeholder.com/150?text=3",
        },
        {
            element_name: "4",
            element_image_source: "https://via.placeholder.com/150?text=4",
        },
        {
            element_name: "5",
            element_image_source: "https://via.placeholder.com/150?text=5",
        },
        {
            element_name: "6",
            element_image_source: "https://via.placeholder.com/150?text=6",
        },
        {
            element_name: "7",
            element_image_source: "https://via.placeholder.com/150?text=7",
        },
        {
            element_name: "8",
            element_image_source: "https://via.placeholder.com/150?text=8",
        },
    ];
    return elements;
}

const CarouselThumbnails = (props) => {
    const [showInfo, setShowInfo] = useState(false);
    const onTimeout = () => {
        setShowInfo(false);
        console.log("on timeout", showInfo);
    };
    const onClickImage = () => {
        setShowInfo(true);
        console.log("showinfo", showInfo);
        setTimeout(onTimeout, 5000);
    };
    return props.elements.map(
        ({ element_name, element_image_source, onClick }) => {
            //console.log(`${element_name} and ${element_image_source}`);

            return (
                <CarouselImage
                    key={element_name}
                    src={element_image_source}
                    onClick={() => onClickImage()}
                ></CarouselImage>
            );
        }
    );
};

const Carousel = () => {
    //todo percentage based on n per array
    const [translationAmount, setTranslationAmount] = useState("0%");

    const onClickRightHandle = () => {
        setTranslationAmount("-100%");
    };

    const onClickLeftHandle = () => {
        setTranslationAmount("0%");
    };

    return (
        <CarouselContainer className="container">
            <Handle className="leftHandle">
                <button onClick={onClickLeftHandle}></button>
            </Handle>

            <CarouselSlider sliderAmount={translationAmount} className="slider">
                <CarouselThumbnails
                    elements={buildCarouselElements()}
                ></CarouselThumbnails>
            </CarouselSlider>
            <Handle className="rightHandle">
                <button onClick={onClickRightHandle}></button>
            </Handle>
        </CarouselContainer>
    );
};

export default Carousel;
