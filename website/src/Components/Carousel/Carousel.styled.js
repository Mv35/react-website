import styled from "styled-components";

const CarouselContainer = styled.div`
    width: 100%;
    display: flex;
    overflow: hidden;
`;

const CarouselSlider = styled.div`
    width: 100%;
    display: flex;
    flex-grow: 1;
    transform: translateX(${(props) => props.sliderAmount});
`;

const CarouselImage = styled.img`
    display: flex;
    flex: 0 0 25%;
    max-width: calc(25% - 0.2rem);
    aspect-ratio: 16/9;
    margin: 0.1rem;
`;

const Handle = styled.div`
    flex-grow: 0;
    width: 5rem;
    background-color: red;
    z-index: 2;
    margin: 0.09rem;
`;

export { CarouselContainer, CarouselSlider, CarouselImage, Handle };
