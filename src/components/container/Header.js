import styled from 'styled-components';
import Logo from '../styled/Logo';
import NavBar from '../styled/NavBar';
import { ThemeToggle } from '../styled/ThemeToggle';

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
                <NavBar />
                <ThemeToggle />
            </div>
        </StyledHeader>
    );
}
