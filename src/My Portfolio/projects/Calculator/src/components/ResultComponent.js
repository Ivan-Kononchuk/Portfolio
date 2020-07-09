import React from 'react';

export default function ResultComponent(props){
	var {result} = props;
	return (
		<div className="result">
			<p>{result}</p>
		</div>
	);
}