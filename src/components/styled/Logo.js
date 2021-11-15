import styled from 'styled-components';

const StyledLogo = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.color.dark};

    div {
        margin: 0;
        font-size: 40px;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        color: ${props => props.theme.color.foreground};
    }
`;

export default function Logo() {
    return (
        <StyledLogo href='/'>
            <div>JWP</div>
        </StyledLogo>
    );
}
