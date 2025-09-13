function Book(props) {
	const buttonLabel = "Learn more";

	return (
		<div className='entry'>
			<h2>{props.title}</h2>
			<h3>{props.author}</h3>
		</div>
	);
}
