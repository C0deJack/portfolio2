import Tab from './Tab';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
    ul {
        margin: 0 5rem 0;
        display: flex;
    }
`;

export default function NavBar() {
    return (
        <StyledNavBar>
            <ul role='navigation'>
                <Tab link='/' linkName='home' />
                <Tab link='/projects' linkName='projects' />
                <Tab link='/contact' linkName='contact' />
            </ul>
        </StyledNavBar>
    );
}
