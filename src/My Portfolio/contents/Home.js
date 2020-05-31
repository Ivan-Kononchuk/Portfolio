import React, {Component} from 'react';

class About extends Component{
	render(){
		return(
			<div className='Home'>
				<h1>About me</h1>
				<p>
					My name is Ivan Kononchuk I'm 20 years old and I'm on my way to
				  become Full Stack Software Developer. Currently, I'm learning my stack
				  from morning to night. I'm just a fully motivated guy who wants to start
				  his programming career and ready to work hard next years of my life.
				</p>
				<table>
					<tbody>
						<tr>
							<th>I already know</th>
							<th>I will learn</th>
						</tr>
						<tr>
							<td>HTML</td>
							<td>Sql</td>
						</tr>
						<tr>
							<td>CSS</td>
							<td>MySql</td>
						</tr>
						<tr>
							<td>JavaScript</td>
							<td>Python</td>
						</tr>
						<tr>
							<td>React.JS</td>
							<td>Django</td>
						</tr>
					</tbody>
				</table>
				<p>
				Also, I don't forget about English and interacting with it as much
				as I can. English	level approximately B2.
				</p>
			</div>
		);
	}
}

export default About;