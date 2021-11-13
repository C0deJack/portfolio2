import React from 'react'
import styled from "styled-components";

const StyledTab = styled.li`
    list-style: none;
    padding: 1rem;

    a {
        text-decoration: none;
        font-size: 22px;
        color: ${props => props.theme.color.foreground};
    }
`;


export default function Tab(props) {
    return (
        <StyledTab>
            <a href={props.link}>{props.linkName}</a>
        </StyledTab>
    )
}
