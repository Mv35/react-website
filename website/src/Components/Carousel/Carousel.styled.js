import styled from "styled-components";

const CarouselContainer = styled.div`
    width: 100%;
    display: flex;
`;

const CarouselSlider = styled.div`
    display: flex;
    flex-grow: 1;
    transform: translateX(-99.7%);
`;

const CarouselImage = styled.img`
    display: flex;
    flex: 0 0 25%;
    max-width: calc(25% - 0.2rem);
    aspect-ratio: 16/9;
    margin: 0.09rem;
`;

const Handle = styled.div`
    flex-grow: 0;
    width: 5rem;
    background-color: red;
    z-index: 10;
    margin: 0.09rem 0;
`;

export { CarouselContainer, CarouselSlider, CarouselImage, Handle };
