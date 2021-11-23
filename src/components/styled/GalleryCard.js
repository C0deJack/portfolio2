import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledGalleryCard = styled.div`
    background-color: hotpink;
    width: 300px;
    height: 400px;
    margin: 1rem;

    h3 {
        color: ${props => props.theme.color.foreground};
    }
`;

export default function GalleryCard({ projectTitle }) {
    return (
        <StyledGalleryCard>
            <h3>{projectTitle}</h3>
        </StyledGalleryCard>
    );
}

GalleryCard.propTypes = {
    projectTitle: PropTypes.string.isRequired,
};
