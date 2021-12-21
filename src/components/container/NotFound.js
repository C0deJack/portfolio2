import styled from 'styled-components';

const StyledNotFound = styled.div`
    color: ${props => props.theme.color.foreground};
    text-align: center;

    h1 {
        font-size: 45px;
    }

    h2 {
        font-size: 185px;
    }

    h1,
    h2 {
        font-weight: 200 !important;
    }
`;

function NotFound() {
    return (
        <StyledNotFound>
            <h1>Sorry page not found</h1>
            <h2>404</h2>
        </StyledNotFound>
    );
}

export default NotFound;
