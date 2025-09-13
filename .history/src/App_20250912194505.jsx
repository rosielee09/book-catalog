import Book from "./Book.jsx";

function App() {
	return (
		<div>
			<header className='app-header'>
				<h1>Rosie's Book Catalog</h1>
			</header>
			<main className='content'>
				<Book
					image='./assets/building-evolutionary-architectures'
					title='Building Evolutionary Architectures, 2nd Edition'
					author='Neal Ford, Rebecca Parsons, Patrick Kua, Pramod Sadalage'
					link='https://itbook.store/books/9781492097549'
				/>
				<Book
					image='quantative-user-research.png'
					title='Quantitative User Experience Research'
					author='Chris Chapman, Kerry Rodden'
					link='https://itbook.store/books/9781484292679'
				/>
			</main>

			<footer className='app-footer'>
				<p>© 2025 Rosie's Book Catalog</p>
			</footer>
		</div>
	);
}

export default App;
