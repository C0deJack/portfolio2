import { useRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Card from './Card';

const StyledGalleryCard = styled.div`
    position: relative;
    width: 300px;
    height: 400px;
    margin: 1rem;

    .card-container {
        transform-style: preserve-3d;
    }
`;

export default function GalleryCard({ projectTitle }) {
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
            <div className='card-container'>
                <Card passedRef={frontRef} projectTitle={projectTitle} isBackSide={false} />
                <Card passedRef={backRef} projectTitle={projectTitle} isBackSide={true} />
            </div>
        </StyledGalleryCard>
    );
}

GalleryCard.propTypes = {
    projectTitle: propTypes.string.isRequired,
};
