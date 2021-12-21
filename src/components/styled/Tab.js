import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTab = styled.li`
    list-style: none;
    padding: 1rem;

    a {
        text-decoration: none;
        font-size: 22px;
        color: ${props => props.theme.color.foreground};
    }
`;

export default function Tab({ link, linkName }) {
    return (
        <StyledTab>
            <a href={link} title={`go to ${linkName} page`} aria-label={linkName}>
                {linkName}
            </a>
        </StyledTab>
    );
}

Tab.propTypes = {
    link: PropTypes.string.isRequired,
    linkName: PropTypes.string,
};
