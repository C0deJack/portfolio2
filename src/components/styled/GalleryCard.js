import { useRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import propTypes from 'prop-types';
// import Card from './Card';
import CardFront from './CardFront';
import CardBack from './CardBack';

// 0.5622188906

const StyledGalleryCard = styled.div`
    position: relative;
    width: 300px;
    height: 534px;
    margin: 1rem;
`;

const StyledCardContainer = styled.div`
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
`;

export default function GalleryCard({ projectTitle, projectDesc, image }) {
    const frontRef = useRef();
    const backRef = useRef();

    const rotateElementAboutY = (element, toFront) => {
        const rotation = toFront ? 180 : 0;

        gsap.to(element, {
            rotationY: rotation,
            duration: 1,
            ease: 'back.out(1.7)',
        });
    };

    const handleClick = () => {
        // TODO - handle touch devices.
    };

    const handleOnHover = isMouseHovering => {
        const rotateToBack = isMouseHovering;
        const rotateToFront = !rotateToBack;

        rotateElementAboutY(frontRef.current, rotateToBack);
        rotateElementAboutY(backRef.current, rotateToFront);
    };

    return (
        <StyledGalleryCard
            onClick={handleClick}
            onMouseEnter={() => {
                handleOnHover(true);
            }}
            onMouseLeave={() => {
                handleOnHover(false);
            }}
        >
            <StyledCardContainer>
                <CardFront passedRef={frontRef} image={image} />
                <CardBack passedRef={backRef} projectTitle={projectTitle} projectDesc={projectDesc} />
            </StyledCardContainer>
        </StyledGalleryCard>
    );
}

GalleryCard.propTypes = {
    projectTitle: propTypes.string.isRequired,
    projectDesc: propTypes.string.isRequired,
    image: propTypes.string,
};
