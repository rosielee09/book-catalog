import Book from "./Book.jsx";
import architectureImage from "./assets/building-evolutionary-architectures.png";
import uxImage from "./assets/quantative-user-research.png";

function App() {
	return (
		<div className='app'>
			<header className='app-header'>
				<h1>Rosie's Book Catalog</h1>
			</header>
			<main className='content'>
				<button className='card add-button'>
					+ Add
				</button>
				<Book
					image={architectureImage}
					title='Building Evolutionary Architectures, 2nd Edition'
					author='Neal Ford, Rebecca Parsons, Patrick Kua, Pramod Sadalage'
					link='https://itbook.store/books/9781492097549'
				/>
				<Book
					image={uxImage}
					title='Quantitative User Experience Research'
					author='Chris Chapman, Kerry Rodden'
					link='https://itbook.store/books/9781484292679'
				/>
			</main>

			<footer className='app-footer'>
				<p>©Rosie Lee, 2025</p>
			</footer>
		</div>
	);
}

export default App;
