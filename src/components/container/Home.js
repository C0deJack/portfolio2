import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';
import { Cta } from '../styled/Cta';

const fadeInUpAnimation = keyframes`${fadeInUp}`;

const StyledHome = styled.section`
    
    padding: 2rem;
    max-width: 770px;

    h1{
        animation: 2s ${fadeInUpAnimation};
        height: 50px;
        margin-bottom: 150px;
    }

    .line {
        background-color: ${props => props.theme.color.grey};
        width: 80px;
        height: 2px;
        display: inline-block;
        margin: .5rem;
    }

    span,
    p {
        color: ${props => props.theme.color.grey};
    }
`;


export const Home = () => {
    return (
        <StyledHome>
            <div className="line"></div>
            <span>WEB DEVELOPER</span>
            <h1 className="h1">Jack<br />Wood-Pearce<span className="dot"></span></h1>
            <p className="mb-5">A creative, dedicated software engineer focussed on frontend development</p>
            <Cta href="../../../Jack Wood-Pearce CV.pdf" text="Download CV" openNewWindow={true} />
        </StyledHome>
    )
}
