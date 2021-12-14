import { useRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledGalleryCard = styled.div`
    position: relative;
    width: 300px;
    height: 400px;
    margin: 1rem;

    .card-container {
        transform-style: preserve-3d;
    }

    .card {
        position: absolute;
        backface-visibility: hidden;
        width: 300px;
        height: 400px;
        margin: 1rem;
        padding: 1rem;
    }

    .front {
        background-color: ${props => props.theme.color.background};
    }

    .back {
        background-color: ${props => props.theme.color.background};
        transform: rotateY(180deg);
    }

    h3 {
        color: ${props => props.theme.color.foreground};
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
                <div className='card front' ref={frontRef}>
                    <h3>{projectTitle} FRONT</h3>
                </div>
                <div className='card back' ref={backRef}>
                    <h3>{projectTitle} BACK</h3>
                </div>
            </div>
        </StyledGalleryCard>
    );
}

GalleryCard.propTypes = {
    projectTitle: PropTypes.string.isRequired,
};
