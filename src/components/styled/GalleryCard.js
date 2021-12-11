import { useRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledGalleryCard = styled.div`
    background-color: lime;
    width: 300px;
    height: 400px;
    margin: 1rem;
    padding: 1rem;

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

    return (
        <StyledGalleryCard className='card' ref={boxRef} onClick={handleClick}>
            <h3>{projectTitle}</h3>
        </StyledGalleryCard>
    );
}

GalleryCard.propTypes = {
    projectTitle: PropTypes.string.isRequired,
};
