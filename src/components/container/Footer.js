import styled from 'styled-components';

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    div {
        color: red;
    }
`;

export const Footer = () => {
    return <div>I&apos;m a footer test</div>;
};
