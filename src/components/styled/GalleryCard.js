import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledGalleryCard = styled.div`
    position: relative;
    width: 300px;
    height: 400px;
    margin: 1rem;
    /* transform-style: preserve-3d; */

    .card {
        position: absolute;
        /* backface-visibility: hidden; */
        background-color: lime;
        width: 300px;
        height: 400px;
        margin: 1rem;
        padding: 1rem;
    }

    .back {
        background-color: blue;
    }

    h3 {
        color: ${props => props.theme.color.foreground};
    }
`;

export default function GalleryCard({ projectTitle }) {
    const frontRef = useRef();
    const backRef = useRef();

    const handleClick = () => {
        gsap.to(frontRef.current, {
            rotationY: 180,
            duration: 1,
            ease: 'back.out(1.7)',
        });
    };

    useEffect(() => {
        gsap.set(backRef.current, {
            rotationY: 180,
        });
    }, []);

    const handleOnHover = isMouseHovering => {
        const rotation = isMouseHovering ? 180 : 0;

        gsap.to([frontRef.current, backRef.current], {
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
            <div className='card front' ref={frontRef}>
                <h3>{projectTitle} FRONT</h3>
            </div>
            <div className='card back' ref={backRef}>
                <h3>{projectTitle} BACK</h3>
            </div>
        </StyledGalleryCard>
    );
}

GalleryCard.propTypes = {
    projectTitle: PropTypes.string.isRequired,
};
