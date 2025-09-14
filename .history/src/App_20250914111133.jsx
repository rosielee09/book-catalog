import Book from "./Book.jsx";
// import architectureImage from "./assets/building-evolutionary-architectures.png";
// import uxImage from "./assets/quantative-user-research.png";
import { useEffect, useState } from "react";

function App() {
	const [books, setBooks] = useState([]);
	const isbns = ["9781492097549", "9781484292679"];

	useEffect(() => {
		async function fetchBooks() {
			try {
				const results = await Promise.all(
					isbns.map((isbn) =>
						fetch(
							`https://api.itbook.store/1.0/books/${isbn}`
						).then((res) => res.json())
					)
				);
				setBooks(results);
			} catch (error) {
				console.error("Error fetching books:", error);
			}
		}
		fetchBooks();
	}, []);

	return (
		<div className='app'>
			<header className='app-header'>
				<h1>Rosie's Book Catalog</h1>
			</header>

			<main className='content'>
				<button className='card add-button'>
					+ Add
				</button>

				{books.length > 0 ? (
					books.map((book) => (
						<Book
							key={book.isbn13}
							image={book.image}
							title={book.title}
							author={book.authors}
							link={`https://itbook.store/books/${book.isbn13}`}
						/>
					))
				) : (
					<p>Loading books...</p>
				)}
			</main>

			<footer className='app-footer'>
				<p>©Rosie Lee, 2025</p>
			</footer>
		</div>
	);
}

export default App;
