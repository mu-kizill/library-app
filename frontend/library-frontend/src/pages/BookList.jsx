import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch("http://localhost:5022/api/books");
            const data = await response.json();
            setBooks(data);
        };

        fetchBooks();
    }, []);

    const handleDelete = async (bookId) => {
        await fetch(`http://localhost:5022/api/books/${bookId}`, {
            method: 'DELETE'
        });

        const updatedBooks = books.filter(book => book.id !== bookId);
        setBooks(updatedBooks);
    };

    return (
        <div className="p-6">
    <h1 className="text-2xl font-bold mb-4 text-center">Books</h1>
    <table className="min-w-full border border-gray-300 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
            <tr>
                <th className="px-6 py-3 border">Title</th>
                <th className="px-6 py-3 border">Author</th>
                <th className="px-6 py-3 border">Genre</th>
                <th className="px-6 py-3 border">Year</th>
                <th className="px-6 py-3 border">Actions</th>
            </tr>
        </thead>
        <tbody className="text-center">
            {books.map((book) => (
                <tr key={book.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-2 border">{book.title}</td>
                    <td className="px-6 py-2 border">{book.author}</td>
                    <td className="px-6 py-2 border">{book.genre}</td>
                    <td className="px-6 py-2 border">{book.year}</td>
                    <td className="px-6 py-2 border space-x-2">
                        <button
                            onClick={() => handleDelete(book.id)}
                            className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                        >
                            Sil
                        </button>
                        <Link
                            to={`/edit/${book.id}`}
                            className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded inline-block"
                        >
                            Güncelle
                        </Link>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

    );
};

export default BookList;
