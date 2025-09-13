import Book from "./Book.jsx";

function App() {
	return (
		<div>
			<header className='app-header'>
				<h1>Rosie's Book Catalog</h1>
			</header>
			<main className='content'>
				<Book
					image='./assets/building'
					title='Building Evolutionary Architectures, 2nd Edition'
					authors='Neal Ford, Rebecca Parsons, Patrick Kua, Pramod Sadalage'
					link='https://itbook.store/books/9781492097549'
				/>
			</main>

			<footer>
				<p>copyright</p>
			</footer>
		</div>
	);
}

export default App;
