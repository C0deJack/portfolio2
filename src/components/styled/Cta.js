import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCta = styled.a`
    display: inline-block;
    color: ${props => props.theme.color.foreground};
    text-decoration: none;
    height: 60px;
    line-height: 58px;
    padding: 0 36px;
    font-size: 20px;
    border: 2px solid ${props => props.theme.color.primary};
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    -ms-border-radius: 50px;
    -o-border-radius: 50px;
    border-radius: 50px;
    transition: all 0.4s ease-in-out;

    &:hover {
        background-color: ${props => props.theme.color.primary};
        color: ${props => props.theme.color.background};
    }
`;

export const Cta = ({ href, text, openNewWindow }) => {
    return (
        <>
            {openNewWindow ? (
                <StyledCta
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {text}
                </StyledCta>
            ) : (
                <StyledCta href={href}>{text}</StyledCta>
            )}
        </>
    );
};

Cta.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string,
    openNewWindow: PropTypes.bool,
};
