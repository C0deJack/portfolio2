import styled from 'styled-components';
import { Cta } from '../styled/Cta';

const StyledHome = styled.section`
    padding: 2rem;

    h1 {
        color: ${props => props.theme.color.foreground};
        font-size: 60px;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        margin: 0.5rem 0;
    }

    .line {
        background-color: ${props => props.theme.color.foreground};
        width: 80px;
        height: 2px;
        display: inline-block;
        margin: .5rem;
    }
`;


export const Home = () => {
    return (
        <StyledHome>
            <div className="line"></div>
            <span>WEB DEVELOPER</span>
            <h1>Jack Wood-Pearce</h1>
            <Cta href="../../../Jack Wood-Pearce CV.pdf" text="Download CV" openNewWindow={true} />
        </StyledHome>
    )
}
