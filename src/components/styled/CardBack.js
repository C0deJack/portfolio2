import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledCardBack = styled.div`
    position: absolute;
    backface-visibility: hidden;
    width: 100%;
    height: 100%;
    padding: 1rem;
    background-color: ${props => props.theme.color.background};
    transform: rotateY(180deg);

    h3 {
        color: ${props => props.theme.color.foreground};
    }
`;

const CardBack = ({ passedRef, projectTitle, projectDesc }) => {
    return (
        <StyledCardBack ref={passedRef}>
            <h3>{projectTitle}</h3>
            <p>{projectDesc}</p>
        </StyledCardBack>
    );
};

CardBack.propTypes = {
    projectTitle: propTypes.string.isRequired,
    projectDesc: propTypes.string.isRequired,
    passedRef: propTypes.instanceOf(HTMLInputElement),
};

export default CardBack;
