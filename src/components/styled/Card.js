import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledCard = styled.div`
    position: absolute;
    backface-visibility: hidden;
    width: 300px;
    height: 400px;
    padding: 1rem;
    background-color: ${props => props.theme.color.background};

    h3 {
        color: ${props => props.theme.color.foreground};
    }
`;

const Card = ({ passedRef, projectTitle, isBackSide }) => {
    const flipCardStyle = isBackSide => (isBackSide ? { transform: 'rotateY(180deg)' } : {});

    return (
        <StyledCard style={flipCardStyle(isBackSide)} ref={passedRef}>
            {isBackSide ? 'BACK' : 'FRONT'}
            <h3>{projectTitle} </h3>
        </StyledCard>
    );
};

Card.propTypes = {
    projectTitle: propTypes.string.isRequired,
    passedRef: propTypes.instanceOf(HTMLInputElement),
    isBackSide: propTypes.bool.isRequired,
};

export default Card;
