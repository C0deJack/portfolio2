import styled from 'styled-components';
import Logo from '../styled/Logo';
import NavBar from '../styled/NavBar';
import { ThemeToggle } from '../styled/ThemeToggle';
import Weather from '../styled/Weather';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    div {
        display: flex;
    }
`;

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <div>
                <Weather />
                <NavBar />
                <ThemeToggle />
            </div>
        </StyledHeader>
    );
};
