import React from 'react';
import styled from 'styled-components';

const StyledError = styled.div`
	color: ${props => props.theme.color.foreground};
	text-align: center;

    h2 {
        font-size: 45px;
        font-weight: 200;
        margin: 0;
    }
`;

function Error() {
	return (
		<StyledError>
			<h2>Error</h2>
			<p>Sorry, something has gone wrong.</p>
			<p>Please try and reload the page.</p>
			<p>If problems persist, please contact customer support on</p>
			<p>012345 6789 1011</p>
		</StyledError>
	);
}

export default Error;
