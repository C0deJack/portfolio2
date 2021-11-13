import React from 'react'
import styled from 'styled-components';

const StyledLink = styled.a`
    background-color: ${({ theme }) => theme.color.secondary};
    color: ${({ theme }) => theme.color.primary};
    text-decoration: none;

    /* bootstrap styles */
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    :hover {
        background-color: ${({ theme }) => theme.color.info};
        text-decoration: none;
    }
`;


export default function LinkButton(props) {
    return (
        <StyledLink href={props.link}>
            {props.linkName}
        </StyledLink>
    )
} 

