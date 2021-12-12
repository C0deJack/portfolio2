import { useRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledGalleryCard = styled.div`
    .card {
        background-color: lime;
        width: 300px;
        height: 400px;
        margin: 1rem;
        padding: 1rem;
    }

    h3 {
        color: ${props => props.theme.color.foreground};
    }
`;

export default function GalleryCard({ projectTitle }) {
    const boxRef = useRef();

    const handleClick = () => {
        gsap.to(boxRef.current, {
            rotation: '+=360',
        });
    };

    const handleOnHover = isMouseHovering => {
        const rotation = isMouseHovering ? 180 : 0;

        gsap.to(boxRef.current, {
            rotationY: rotation,
            duration: 1,
            ease: 'back.out(1.7)',
        });
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
            <div className='card' ref={boxRef}>
                <h3>{projectTitle}</h3>
            </div>
        </StyledGalleryCard>
    );
}

GalleryCard.propTypes = {
    projectTitle: PropTypes.string.isRequired,
};
