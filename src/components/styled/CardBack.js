import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledCardBack = styled.div`
    position: absolute;
    backface-visibility: hidden;
    width: 300px;
    height: 400px;
    padding: 1rem;
    background-color: ${props => props.theme.color.background};
    transform: 'rotateY(180deg)';

    h3 {
        color: ${props => props.theme.color.foreground};
    }
`;

const CardBack = ({ passedRef, projectTitle }) => {
    return (
        <StyledCardBack ref={passedRef}>
            <h3>{projectTitle} BACK NEW</h3>
        </StyledCardBack>
    );
};

CardBack.propTypes = {
    projectTitle: propTypes.string.isRequired,
    passedRef: propTypes.instanceOf(HTMLInputElement),
};

export default CardBack;
