import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';

const fadeInUpAnimation = keyframes`${fadeInUp}`;

const StyledProjects = styled.section`
    padding: 2rem;
    max-width: 770px;

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
                    <section className='options'>
                        <div className='option-isotop'>
                            <ul id='filter' className='option-set filters-nav' data-option-key='filter'>
                                <li>
                                    <a data-option-value='*' className='selected'>
                                        All
                                    </a>
                                </li>
                                <li>
                                    <a data-option-value='.typeScript'>TypeScript</a>
                                </li>
                                <li>
                                    <a data-option-value='.javaScript'>JavaScript</a>
                                </li>
                                <li>
                                    <a data-option-value='.nodejs'>Node.js</a>
                                </li>
                                <li>
                                    <a data-option-value='.react'>React</a>
                                </li>
                                <li>
                                    <a data-option-value='.jquery'>JQuery</a>
                                </li>
                                <li>
                                    <a data-option-value='.blazor'>C# Blazor</a>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <div className='masonary-layout'>
                        <div className='row'>
                            <div className='masonary'>
                                <div className='col-lg-4 col-md-6 col-sm-6 javaScript react'>
                                    <div className='tema-col'>
                                        <img src='images/projects/lna.png' alt='' />
                                        <div className='team-caption'>
                                            <h3>
                                                <a href='case-work.html' title=''>
                                                    Maria Yaltekee
                                                </a>
                                            </h3>
                                            <span>Graphic Designer</span>
                                            <a href='case-work.html' title='' className=''>
                                                <img src='images/arrow-right.svg' alt='' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6 col-sm-6 react blazor'>
                                    <div className='tema-col'>
                                        <img src='images/projects/lna.png' alt='' />
                                        <div className='team-caption'>
                                            <h3>
                                                <a href='case-work.html' title=''>
                                                    Maria Yaltekee
                                                </a>
                                            </h3>
                                            <span>Graphic Designer</span>
                                            <a href='case-work.html' title='' className=''>
                                                <img src='images/arrow-right.svg' alt='' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6 col-sm-6 jquery typeScript nodejs'>
                                    <div className='tema-col'>
                                        <img src='images/projects/lna.png' alt='' />
                                        <div className='team-caption'>
                                            <h3>
                                                <a href='case-work.html' title=''>
                                                    Maria Yaltekee
                                                </a>
                                            </h3>
                                            <span>Graphic Designer</span>
                                            <a href='case-work.html' title='' className=''>
                                                <img src='images/arrow-right.svg' alt='' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6 col-sm-6 blazor jquery nodejs'>
                                    <div className='tema-col'>
                                        <img src='images/projects/lna.png' alt='' />
                                        <div className='team-caption'>
                                            <h3>
                                                <a href='case-work.html' title=''>
                                                    Maria Yaltekee
                                                </a>
                                            </h3>
                                            <span>Graphic Designer</span>
                                            <a href='case-work.html' title='' className=''>
                                                <img src='images/arrow-right.svg' alt='' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6 col-sm-6 jquery apps nodejs'>
                                    <div className='tema-col'>
                                        <img src='images/projects/lna.png' alt='' />
                                        <div className='team-caption'>
                                            <h3>
                                                <a href='case-work.html' title=''>
                                                    Maria Yaltekee
                                                </a>
                                            </h3>
                                            <span>Graphic Designer</span>
                                            <a href='case-work.html' title='' className=''>
                                                <img src='images/arrow-right.svg' alt='' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6 col-sm-6 typescript apps'>
                                    <div className='tema-col'>
                                        <img src='images/projects/lna.png' alt='' />
                                        <div className='team-caption'>
                                            <h3>
                                                <a href='case-work.html' title=''>
                                                    Maria Yaltekee
                                                </a>
                                            </h3>
                                            <span>Graphic Designer</span>
                                            <a href='case-work.html' title='' className=''>
                                                <img src='images/arrow-right.svg' alt='' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='full-div w-100 text-center mt-70'>
                                <a href='#' title='' className='btn-default'>
                                    Load more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledProjects>
    );
}
