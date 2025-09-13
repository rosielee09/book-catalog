export default function Book({ title, author, image, link }) {
	return (
		<div className='card book-card'>
			<img src={image} alt={title} className='book-image' />
			<h3 className='book-title'>{title}</h3>
			<p className='book-author'>By {author}</p>
			<a
				href={link}
				target='_blank'
				rel='noopener noreferrer'
				className='book-link'
			>
				Details
			</a>
		</div>
	);
}
