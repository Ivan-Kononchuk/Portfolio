import React from 'react';

export default function ResultComponent(props){
	var {result} = props;
	return (
		<div className="result" tabIndex='0'>
			<p>{result}</p>
		</div>
	);
}