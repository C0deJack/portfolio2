import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';
import IsotopeGallery from '../styled/IsotopeGallery';

const fadeInUpAnimation = keyframes`${fadeInUp}`;

const StyledProjects = styled.section`
    padding: 2rem;

    .page-content {
        max-width: 770px;
    }

    h1 {
        animation: 2s ${fadeInUpAnimation};
        height: 50px;
        margin-bottom: 150px;
    }

    .line {
        background-color: ${props => props.theme.color.grey};
        width: 80px;
        height: 2px;
        display: inline-block;
        margin: 0.5rem;
    }

    span,
    p {
        color: ${props => props.theme.color.grey};
    }
`;

export default function Projects() {
    return (
        <StyledProjects className='cases-section'>
            <div className='page-content'>
                <div className='fixed-bg bg7 bg-without-color'></div>
                <div className='container'>
                    <div className='main-banner-text title-hd wow fadeInUp mgb-100' data-wow-delay='300ms'>
                        <div className='line'></div>
                        <span>PORTFOLIO</span>
                        <h1 className='h1'>
                            Notable projects<span className='dot'></span>
                        </h1>
                        <p className='bdy'>
                            You may be interested in what we can offer you. More services you can find below. We do
                            everything at a high level.
                        </p>
                    </div>
                </div>
            </div>
            <IsotopeGallery />
        </StyledProjects>
    );
}
