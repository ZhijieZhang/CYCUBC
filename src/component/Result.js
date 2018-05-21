import React from 'react';

import '../style/Result.css'

function Result(props) {
	let {profs} = props;
	/* 
		profs structure:
		{
			name: profName,
			rating: 
			{
				firstName: prof.teacherfirstname_t,
				lastName: prof.teacherlastname_t,
				rating: prof.averageratingscore_rf,
				rmp: `http://www.ratemyprofessors.com/ShowRatings.jsp?tid=${prof.pk_id}`
			},
			avg: [{"course": ..., "year": ..., "avg": ...}, {...}, {...}, ...]
		}
	*/

	return(
		<li className="result-content">
			<div className="prof-course">{profs.course}</div>
			{profs.map((prof,index) => {
				let {name, rating, avg} = prof;
				let {rating: ratingScore, rmp, lastName} = rating;

				return(
					<div key={index} className="course-content">
						<div className="prof-name">{name}</div>
						<div className="title">{`Professor ${lastName}'s rating:`}</div>
						<div className="prof-rating">
							{ratingScore} <br/>
							<a href={rmp}>Visit Professor {lastName}'s Rate My Professor page</a>
						</div>
						<div className="title">{`Courses Professor ${lastName}'s taught:`}</div>
						<table>
							<tr>
								<th>Course</th>
								<th>Average</th>
								<th>Year</th>
							</tr>
							{avg.map((avg,index) => {
								return(
									<tr key={index} className="average">
										<td>{avg.course}</td>
										<td>{avg.avg}</td>
										<td>{avg.year}</td>
									</tr>
								);
							})}
						</table>
					</div>
				);
			})}
		</li>
	);
}

export default Result;