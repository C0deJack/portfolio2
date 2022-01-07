import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledCardFront = styled.div`
    position: absolute;
    backface-visibility: hidden;
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
    }

    h3 {
        color: ${props => props.theme.color.foreground};
    }
`;

const CardFront = ({ passedRef, image }) => {
    return (
        <StyledCardFront ref={passedRef}>
            <img src={image} alt='image' />
        </StyledCardFront>
    );
};

CardFront.propTypes = {
    passedRef: propTypes.instanceOf(HTMLInputElement),
    image: propTypes.string,
};

export default CardFront;
