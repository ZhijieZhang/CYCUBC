import React from 'react';

// import 'font-awesome/css/font-awesome.min.css';
import '../style/Result.css'


function Result(props) {
	let {profs, displayState, handleDisplayClick, handleDeletionClick, index} = props;
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

	function getCourseHeaderState() {
		return displayState === 'hide' ? 'course-header dark' : 'course-header light';
	}

	function displaySymbol() {
		return displayState === 'hide' ? '+' : '-';
	}

	return (
		<li className="result-content">
			<div className={getCourseHeaderState()} onClick={()=>{handleDisplayClick(index)}}>
				{profs.course}
				<span className='delete operation' onClick={(e)=>{handleDeletionClick(e,index)}}>
					<i className="far fa-trash-alt"></i>
				</span>
				<span className='display operation'>
					{displaySymbol()}
				</span>
			</div>
			<div className={displayState}>
				{profs.map((prof,index) => {
					let {name, rating, avg} = prof;
					let [lastName] = name.split(', ');
					// Convert ABCD -> Abcd
					lastName = lastName.replace(/(\w)(\w+)/g, (match, p1, p2) => p1+p2.toLowerCase());

					return(
						<div key={index} className="course-content">
							<div className="prof-name">{name}</div>
							<div className="title">{`Professor ${lastName}'s rating:`}</div>
							{rating == null ?
								`Rating N/A` : 
								<div className="prof-rating">
									{rating.rating} <br/>
									<a href={rating.rmp}>Visit Professor {lastName}'s Rate My Professor page</a>
								</div>
							}
							<div className="title">{`Courses Professor ${lastName}'s taught:`}</div>
							{avg == null ?
								`Courses N/A` :
								<table>
									<tbody>
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
									</tbody>
								</table>
							}
						</div>
					);
				})}				
			</div>
		</li>	
	);	
}

export default Result;