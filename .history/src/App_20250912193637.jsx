import Book from "./Book.jsx";

function App() {
	return (
		<div>
			<header className='app-header'>
				<h1>Rosie's Book Catalog</h1>
			</header>
			<main className='content'>
				<Book
					image=''
					title='Building Evolutionary Architectures, 2nd Edition'
					authors=''
					link=''
				/>
			</main>

			<footer>
				<p>copyright</p>
			</footer>
		</div>
	);
}

export default App;
